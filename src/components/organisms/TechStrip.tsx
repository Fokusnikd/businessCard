import { Container } from '@/components/atoms'
import { TechList } from '@/components/molecules'
import { site } from '@/content/site'
import styles from './TechStrip.module.css'

const tech = site.tech

export function TechStrip() {
  return (
    <div className={styles.strip}>
      <Container className={styles.inner}>
        <span className={styles.label}>{tech.label}</span>
        <TechList items={tech.items} ariaLabel={tech.ariaLabel} />
      </Container>
    </div>
  )
}
