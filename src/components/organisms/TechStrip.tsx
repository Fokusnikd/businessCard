import { Container, Eyebrow, Heading } from '@/components/atoms'
import { SectionHeading, TechList } from '@/components/molecules'
import { site } from '@/content/site'
import styles from './TechStrip.module.css'

const tech = site.tech

export function TechStrip() {
  return (
    <Container as="section" className={styles.strip} id="stack" aria-labelledby="stack-title">
      <SectionHeading
        eyebrow={<Eyebrow muted>{tech.eyebrow}</Eyebrow>}
        title={
          <Heading as="h2" id="stack-title">
            {tech.title}
          </Heading>
        }
        note={tech.note}
      />
      <TechList items={tech.items} ariaLabel={tech.ariaLabel} featured="React" />
    </Container>
  )
}
