import { Accent, ArrowHint, Button, Container, Eyebrow, Heading } from '@/components/atoms'
import { HeroBottom } from '@/components/molecules'
import { site } from '@/content/site'

import { HeroArt } from './HeroArt'
import styles from './Hero.module.css'

const hero = site.hero

export function Hero() {
  return (
    <Container as="section" className={styles.hero} aria-labelledby="hero-title">
      <div>
        <Eyebrow withStatus>{hero.eyebrow}</Eyebrow>
        <Heading as="h1" id="hero-title">
          {hero.greeting}
          <br />
          <span className={styles.name}>
            {hero.name}
            <Accent />
          </span>
        </Heading>
        <p className={styles.line}>
          {hero.lineLead}
          <br />в <em>{hero.lineEmphasis}</em>
        </p>
        <p className={styles.description}>{hero.description}</p>
        <Button href={hero.cta.href}>
          {hero.cta.label} <ArrowHint />
        </Button>
      </div>
      <HeroArt />
      <HeroBottom note={hero.bottom.note} scroll={hero.bottom.scroll} href={hero.bottom.href} />
    </Container>
  )
}
