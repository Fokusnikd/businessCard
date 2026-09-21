import { About, Contact, Footer, Header, Hero, Projects, TechStrip } from '@/components/organisms'
import { SiteLayout } from '@/components/templates'
import { site } from '@/content/site'

export function HomePage() {
  return (
    <SiteLayout
      skipLabel={site.skipLink}
      header={
        <Header
          brandAriaLabel={site.brand.homeLabel}
          initials={site.brand.initials}
          nav={site.nav}
        />
      }
      footer={
        <Footer
          initials={site.brand.initials}
          credit={site.footer.credit}
          toTop={site.footer.toTop}
        />
      }
    >
      <Hero />
      <TechStrip />
      <About />
      <Projects />
      <Contact />
    </SiteLayout>
  )
}
