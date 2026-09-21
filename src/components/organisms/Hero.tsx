import { Button, Container, Eyebrow, Heading } from '@/components/atoms'
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
        <p className={styles.role}>{hero.role}</p>
        <Heading as="h1" id="hero-title">
          {hero.name}
        </Heading>
        <p className={styles.bio}>{hero.bio}</p>
        <div className={styles.actions}>
          <Button href={hero.cta.href}>{hero.cta.label}</Button>
          <Button href={hero.secondary.href} variant="ghost">
            {hero.secondary.label}
          </Button>
        </div>
      </div>
      <HeroArt />
      <HeroBottom note={hero.bottom.note} scroll={hero.bottom.scroll} href={hero.bottom.href} />
    </Container>
  )
}
