import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { navigation } from "../data/content";
import { ButtonLink } from "./ButtonLink";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="wordmark" to="/" aria-label="Studio IKI home">
          Studio IKI 息
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="site-header__actions">
          <ButtonLink className="desktop-cta" to="/contact">
            Contact
          </ButtonLink>
          <button
            ref={triggerRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/contact" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
        <ButtonLink
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Join a Seminar
        </ButtonLink>
      </nav>
    </header>
  );
}

function FooterIcon({ name }) {
  const paths = {
    privacy: (
      <path d="M12 3 5 6v5c0 4.8 2.8 8.1 7 10 4.2-1.9 7-5.2 7-10V6l-7-3Z" />
    ),
    terms: (
      <>
        <path d="M7 3v4M17 3v4M4 9h16" />
        <rect x="4" y="5" width="16" height="16" rx="2" />
      </>
    ),
    inquiry: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </>
    ),
  };
  return (
    <svg
      className="site-footer__link-icon"
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function Footer() {
  const links = [
    { to: "/privacy", label: "Privacy Policy", icon: "privacy" },
    { to: "/terms", label: "Terms / Booking Policy", icon: "terms" },
    { to: "/contact", label: "Inquiry", icon: "inquiry" },
    { label: "Instagram", icon: "instagram" },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__card">
        <div className="shell site-footer__content">
          <div className="site-footer__main">
            <div className="site-footer__brand-panel">
              <div className="site-footer__brand">
                <div className="site-footer__brand-copy">
                  <Link className="wordmark" to="/">
                    Studio IKI 息
                  </Link>
                  <p>
                    Japanese Reiki training
                    <br />
                    and holistic therapies.
                  </p>
                </div>
              </div>
            </div>
            <div className="site-footer__links-panel">
              <nav
                className="site-footer__links"
                aria-label="Footer navigation"
              >
                {links.map((item) =>
                  item.to ? (
                    <Link key={item.to} to={item.to}>
                      <FooterIcon name={item.icon} />
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <span
                      className="site-footer__pending-link"
                      key={item.label}
                      aria-label={`${item.label} profile, link pending`}
                    >
                      <FooterIcon name={item.icon} />
                      <span>{item.label}</span>
                    </span>
                  ),
                )}
              </nav>
              <p className="site-footer__copyright">
                © {new Date().getFullYear()} Studio IKI. Built with intention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SiteShell() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
