import AOS from 'aos';

export function initAos() {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    offset: 80,
    once: true,
    disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  });
}
