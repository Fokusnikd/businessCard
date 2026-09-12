import { Container, Eyebrow, Heading } from '@/components/atoms'
import { Principles } from '@/components/molecules'
import { site } from '@/content/site'
import { cx } from '@/shared/lib/cx'
import sectionStyles from '@/styles/section.module.css'

import styles from './About.module.css'

const about = site.about

export function About() {
  return (
    <Container
      as="section"
      className={cx(sectionStyles.section, styles.about)}
      id="about"
      aria-labelledby="about-title"
    >
      <div>
        <Eyebrow muted>{about.eyebrow}</Eyebrow>
        <Heading as="h2" id="about-title">
          {about.titleLead}
          <br />
          <span className={styles.soft}>{about.titleSoft}</span>
        </Heading>
      </div>
      <div className={styles.body}>
        <p className={styles.lead}>
          {about.lead[0]}
          <br className={styles.desktopBreak} /> {about.lead[1]}
        </p>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <Principles items={about.principles} />
      </div>
    </Container>
  )
}
