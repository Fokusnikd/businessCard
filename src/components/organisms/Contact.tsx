import { ArrowHint, Container, Eyebrow, Heading } from '@/components/atoms'
import { ContactBottom } from '@/components/molecules'
import { site } from '@/content/site'
import styles from './Contact.module.css'

const contact = site.contact

export function Contact() {
  return (
    <Container as="section" className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.top}>
        <Eyebrow className={styles.eyebrow}>{contact.eyebrow}</Eyebrow>
        <ArrowHint />
      </div>
      <Heading as="h2" id="contact-title" className={styles.title}>
        {contact.titleLead}
        <br />
        {contact.titleMid} <em className={styles.emphasis}>{contact.titleEmphasis}</em>
      </Heading>
      <p className={styles.body}>
        {contact.body[0]}
        <br />
        {contact.body[1]}
      </p>
      <ContactBottom email={contact.email} note={contact.note} />
    </Container>
  )
}
