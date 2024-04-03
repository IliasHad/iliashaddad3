import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'About me',
  description:
    'I’m an experienced and self-taught software engineer with more than 3 years of experience in full-stack dev. I’ve been working with the most popular front-end frameworks(Vue and React), and NodeJs on the backend. I’m also a Shopify developer. I help Shopify store owners and clients with their technical needs (custom Shopify theme dev, custom Shopify app dev and speed optimization). I love mountain biking, especially long trips where I can visit new places! If you need a new custom-made website, a unique Shopify store or app, have an idea of an engaging web application: Please feel free to contact me and we’ll talk about the details!',
}

export default async function About() {
  return (
    <>
      <PageIntro eyebrow="About me" title="Problem solver">
        <div className="max-w-2xl text-base flex flex-col gap-4">
          <p>
            I&apos;m an experienced and self-taught software engineer with more
            than 3 years of experience in full-stack dev. I&apos;ve been working
            with the most popular front-end frameworks(Vue and React), and
            NodeJs on the backend.
          </p>
          <p>
            I&apos;m also a Shopify developer. I help Shopify store owners and
            clients with their technical needs (custom Shopify theme dev, custom
            Shopify app dev and speed optimization).
          </p>
          <p>
            I love mountain biking, especially long trips where I can visit new
            places! If you need a new custom-made website, a unique Shopify
            store or app, have an idea of an engaging web application: Please
            feel free to contact me and we&apos;ll talk about the details!
          </p>
        </div>
      </PageIntro>

      <ContactSection />
    </>
  )
}
