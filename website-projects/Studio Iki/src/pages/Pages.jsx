import { Link } from 'react-router-dom'
import { credentials, faqGroups, imagery, services } from '../data/content'
import { ButtonLink, CTASection, EmptyState, FAQItem, Hero, ImageFrame, SectionHeading, ServiceCard } from '../components/UI'

function ServicesGrid() {
  return <div className="cards-grid cards-grid--four">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
}

function CredentialsList() {
  return <ul className="check-list">{credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul>
}

function MedicalNote() {
  return (
    <aside className="medical-note">
      <h2>Complementary care</h2>
      <p>Studio IKI therapies support well-being and relaxation. They do not diagnose conditions, promise a cure, or replace qualified medical advice or treatment.</p>
    </aside>
  )
}

export function HomePage() {
  return (
    <>
      <Hero
        title="Authentic Japanese Reiki training and personalised holistic therapies"
        body="Learn or receive care with Nongnapat Neuman, a certified Jikiden Reiki Shihan and holistic practitioner with more than 20 years of experience."
        image={imagery.treatment}
        imageAlt="Nongnapat offering a gentle treatment in a calm, nature-connected room"
        actions={<><ButtonLink to="/contact">Join a Seminar</ButtonLink><ButtonLink to="/therapies" variant="secondary">Explore Therapies</ButtonLink></>}
      />

      <section className="section section--tint"><div className="shell split feature-row">
        <div data-aos="fade-up"><p className="eyebrow">Primary offering</p><h2>Jikiden Reiki Seminars</h2><p>Learn the authentic teachings of Jikiden Reiki through the official curriculum of the Jikiden Reiki Institute in Kyoto, with hands-on practice and respect for its Japanese roots.</p><ButtonLink to="/jikiden-reiki-seminar">Explore the Seminar</ButtonLink></div>
        <ImageFrame src={imagery.seminar} alt="A quiet setting prepared for traditional Reiki learning" />
      </div></section>

      <section className="section"><div className="shell"><SectionHeading title="Holistic Therapies" body="Four gentle pathways, offered with personal attention and respect for each person’s needs." centered /><ServicesGrid /></div></section>

      <section className="section section--tint"><div className="shell split feature-row feature-row--image-first">
        <ImageFrame src={imagery.portrait} alt="Portrait of Nongnapat Neuman at Healing Garden" />
        <div data-aos="fade-up"><p className="eyebrow">Experienced, personal care</p><h2>About Nongnapat Neuman</h2><p>For more than 20 years, Nongnapat has worked across holistic therapy, wellness education, treatment development, and practitioner training.</p><CredentialsList /><ButtonLink to="/about" variant="secondary">Read Full Story</ButtonLink></div>
      </div></section>

      <section className="section"><div className="shell garden-panel"><SectionHeading eyebrow="Chiang Dao, Thailand" title="Healing Garden" body="A quiet nature sanctuary created for slowing down, reconnecting, and allowing the body’s natural intelligence to be heard." centered /><ImageFrame src={imagery.garden} alt="Healing Garden surrounded by the landscape of Chiang Dao" /></div></section>

      <blockquote className="philosophy-quote">“Healing begins with safety, slowing down, listening, and supporting the body’s innate capacity.”</blockquote>

      <section className="section"><div className="shell"><SectionHeading title="Upcoming Gatherings" body="Seminars and events will appear here when their details are confirmed." /><EmptyState title="New dates are being prepared" body="You can still share your interest in a seminar or future gathering." action={<ButtonLink to="/contact" variant="secondary">Register Your Interest</ButtonLink>} /></div></section>

      <section className="section section--tint"><div className="shell narrow"><SectionHeading title="Frequently Asked Questions" centered />{faqGroups[0].items.slice(0, 2).map(([q, a]) => <FAQItem key={q} question={q} answer={a} />)}<div className="center-link"><Link to="/faq">Read Full FAQ</Link></div></div></section>

      <CTASection title="Begin Your Healing Journey" body="Whether you wish to learn Jikiden Reiki or receive personalised therapeutic support, you are welcome to begin with an inquiry."><ButtonLink to="/contact">Inquire About Seminars</ButtonLink><ButtonLink to="/contact" variant="secondary">Book a Therapy Session</ButtonLink></CTASection>
    </>
  )
}

export function SeminarPage() {
  return (
    <>
      <Hero eyebrow="Traditional Japanese Reiki education" title="Jikiden Reiki Seminar" body="Learn a simple, practical form of Reiki preserved through its Japanese lineage and taught with respect for its origins." image={imagery.seminar} imageAlt="A peaceful environment for learning Jikiden Reiki" actions={<ButtonLink to="/contact">Inquire About a Seminar</ButtonLink>} />
      <section className="section section--tint"><div className="shell split feature-row"><div><p className="eyebrow">Directly passed down Reiki</p><h2>Close to its original Japanese form</h2><p>Jikiden Reiki follows the lineage of Chujiro Hayashi Sensei and the Yamaguchi family in Kyoto. It emphasizes simplicity, hands-on practice, and trust in the body’s natural ability to restore balance.</p><p>The seminar follows the official curriculum of the Jikiden Reiki Institute in Kyoto, Japan.</p></div><ImageFrame src={imagery.seminarPractice} alt="Hands-on learning in a calm seminar setting" /></div></section>
      <section className="section"><div className="shell"><SectionHeading title="For Whom" body="A practical learning path for personal care, family support, and responsible professional integration." centered /><div className="cards-grid cards-grid--three"><article className="card"><h3>For self-care</h3><p>For people seeking a grounded practice they can bring into everyday life.</p></article><article className="card"><h3>For family support</h3><p>For those who want gentle practical skills to support the people close to them.</p></article><article className="card"><h3>For practitioners</h3><p>For wellness and healthcare professionals interested in authentic Japanese Reiki.</p></article></div></div></section>
      <section className="section section--tint"><div className="shell split feature-row"><div><p className="eyebrow">The curriculum</p><h2>Learn through practice and context</h2><p>Teaching includes hands-on practice, the history and philosophy of Jikiden Reiki, and ways to embody its simplicity in daily life.</p><p>Exact dates, duration, prerequisites, language, price, capacity, inclusions, and certification details are confirmed individually before registration.</p></div><div className="card quiet-card"><h3>Learning environment</h3><p>Healing Garden offers a warm, supportive setting where students can learn without hurry and experience care as they practise.</p><h3>Official lineage</h3><p>Instruction is led by Nongnapat Neuman, a certified Jikiden Reiki Shihan through Kyoto, Japan.</p></div></div></section>
      <CTASection title="Learn Jikiden Reiki at Healing Garden" body="Share your interest and receive confirmed seminar details directly."><ButtonLink to="/contact">Join a Jikiden Reiki Seminar</ButtonLink></CTASection>
    </>
  )
}

export function TherapiesPage() {
  return (
    <>
      <Hero centered eyebrow="Personalised holistic care" title="Therapies" body="Gentle, attentive sessions that create the conditions for relaxation, reconnection, and restoration." />
      <section className="section section--tint"><div className="shell"><SectionHeading title="Pathways to Balance" body="Explore each modality, or ask for guidance if you are unsure where to begin." centered /><ServicesGrid /></div></section>
      {services.map((service, index) => (
        <section className={`section ${index % 2 ? 'section--tint' : ''}`} id={service.id} key={service.id}>
          <div className={`shell split service-detail ${index % 2 ? 'service-detail--reverse' : ''}`}>
            <div data-aos="fade-up"><p className="eyebrow">0{index + 1}</p><h2>{service.title}</h2><p>{service.body}</p><ButtonLink to="/contact" variant="secondary">Inquire About This Therapy</ButtonLink></div>
            <ImageFrame src={index === 0 ? imagery.treatment : imagery.therapy} alt={`A calm Studio IKI ${service.title} setting`} />
          </div>
        </section>
      ))}
      <section className="section"><div className="shell narrow"><MedicalNote /></div></section>
      <CTASection title="Begin Your Journey" body="If you are unsure which approach suits you, begin with a conversation."><ButtonLink to="/contact">Ask Which Therapy Is Right for Me</ButtonLink><ButtonLink to="/contact" variant="secondary">Book a Therapy Session</ButtonLink></CTASection>
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <Hero eyebrow="Nongnapat Neuman" title="A Journey of Healing & Discovery" body="More than 20 years of professional wellness experience have shaped a calm, personal approach rooted in deep listening." image={imagery.portrait} imageAlt="Nongnapat Neuman, founder and practitioner at Studio IKI" />
      <section className="section section--tint"><div className="shell split feature-row"><div><p className="eyebrow">Professional foundation</p><h2>Refining the craft</h2><p>Nongnapat was part of the opening teams at Kamalaya Wellness Sanctuary and Four Seasons Resort Koh Samui, developing treatment protocols and training programmes while supporting therapist teams and guests with complex needs.</p><p>She later served as Wellness Development Manager and teacher at Kamalaya and as an international independent teacher for Chiva-Som International Academy.</p></div><ImageFrame src={imagery.treatment} alt="Nongnapat offering attentive, gentle care" /></div></section>
      <section className="section"><div className="shell"><SectionHeading title="Experience and Credentials" body="Traditional wisdom, careful training, and modern therapeutic understanding meet in one personal practice." centered /><div className="credentials-panel card"><CredentialsList /></div></div></section>
      <blockquote className="philosophy-quote">“Healing is not about becoming someone else. It is about returning to who we truly are.”</blockquote>
      <section className="section"><div className="shell split feature-row feature-row--image-first"><ImageFrame src={imagery.garden} alt="The restorative natural surroundings of Healing Garden" /><div><p className="eyebrow">The philosophy</p><h2>Space to slow down and listen</h2><p>Genuine healing cannot be forced. Nongnapat’s intention is not to fix anyone, but to create a supportive environment where people can reconnect with themselves and allow healing to unfold in its own way.</p><p>Healing Garden was created from this vision: a nature-connected place to breathe deeply and rediscover the quiet wisdom already within.</p></div></div></section>
      <CTASection title="Meet Studio IKI" body="Begin with a question, a therapy inquiry, or an interest in learning Jikiden Reiki."><ButtonLink to="/contact">Begin the Dialogue</ButtonLink></CTASection>
    </>
  )
}

export function EventsPage() {
  return (
    <>
      <Hero centered eyebrow="At Healing Garden" title="Gatherings & Events" body="Upcoming seminars and gatherings will be shared here once dates and practical details are confirmed." />
      <section className="section"><div className="shell"><SectionHeading title="Upcoming Gatherings" body="Studio IKI’s event calendar is currently being prepared." /><EmptyState title="There are no published events yet" body="Register your interest and ask about future Jikiden Reiki seminars or gatherings." action={<ButtonLink to="/contact">Register Your Interest</ButtonLink>} /></div></section>
      <CTASection title="Reserve Your Space" body="When an event is announced, availability and registration details will be confirmed directly."><ButtonLink to="/contact">Make an Inquiry</ButtonLink></CTASection>
    </>
  )
}

export function FAQPage() {
  return (
    <>
      <Hero centered title="Frequently Asked Questions" body="Clear starting points for learning, receiving care, and planning a visit." />
      <section className="section section--tint"><div className="shell narrow faq-groups">{faqGroups.map((group) => <section key={group.title}><h2>{group.title}</h2>{group.items.map(([q, a]) => <FAQItem key={q} question={q} answer={a} />)}</section>)}</div></section>
      <section className="section"><div className="shell narrow"><MedicalNote /></div></section>
      <CTASection title="Still have questions?" body="You are welcome to ask about a seminar, therapy, or practical detail."><ButtonLink to="/contact">Contact Studio IKI</ButtonLink></CTASection>
    </>
  )
}

export function ContactPage() {
  return (
    <section className="section contact-page"><div className="shell reading-column contact-intro" data-aos="fade-up"><p className="eyebrow">Contact & inquiry</p><h1>Begin the Dialogue</h1><p className="lede">Whether you are asking about a therapy, an upcoming seminar, or simply wishing to connect, contact Nongnapat directly.</p><div className="contact-card card"><ImageFrame src={imagery.portrait} alt="Nongnapat Neuman" /><div><h2>Nongnapat Neuman</h2><p>Founder, teacher, and practitioner</p><a href="mailto:nongnapatr@gmail.com">nongnapatr@gmail.com</a><p className="pending">Phone details pending</p><p className="pending">Complete location details pending · Chiang Dao, Thailand</p></div></div></div></section>
  )
}

const legalCopy = {
  privacy: { title: 'Privacy Policy', body: 'Approved privacy policy content has not yet been supplied. This page is reserved for the final policy.' },
  terms: { title: 'Terms / Booking Policy', body: 'Approved booking, payment, cancellation, and service terms have not yet been supplied. This page is reserved for the final policy if the confirmed booking model requires it.' },
}

export function LegalPage({ type }) {
  const content = legalCopy[type]
  return <section className="section legal-page"><article className="shell reading-column"><p className="eyebrow">Studio IKI</p><h1>{content.title}</h1><div className="legal-placeholder"><h2>Content pending approval</h2><p>{content.body}</p><p>For questions in the meantime, please <Link to="/contact">contact Studio IKI</Link>.</p></div></article></section>
}

export function NotFoundPage() {
  return <section className="section"><div className="shell narrow not-found"><p className="eyebrow">404</p><h1>Page not found</h1><p>The page you are looking for may have moved.</p><ButtonLink to="/">Return Home</ButtonLink></div></section>
}
