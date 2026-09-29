import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Contact"
        subtitle="Say hi."
      />

      <ul className="mt-8 space-y-3">

        <ContactLink
          label="Email"
          href="mailto:calvingarciano@gmail.com"
          text="calvingarciano@gmail.com"
        />

        <ContactLink
          label="GitHub"
          href="https://github.com/calvinpatrickgarciano"
          text="github.com/calvinpatrickgarciano"
        />

        <ContactLink
          label="LinkedIn"
          href="https://linkedin.com/in/calvin-patrick-garciano-58675543b"
          text="linkedin.com/in/calvin-patrick-garciano-58675543b"
        />

      </ul>
    </section>
  )
}

export default ContactSection