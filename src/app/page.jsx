import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBathla from '@/images/clients/bathla/logo-light.svg'
import logoCava from '@/images/clients/cava/logo-light.svg'
import logoDoori from '@/images/clients/doori/logo-light.svg'
import logoGush from '@/images/clients/gush/logo-light.svg'
import logoHimeya from '@/images/clients/himeya/logo-light.svg'
import logoZeroharm from '@/images/clients/zeroharm/logo-light.svg'
import logoSkin from '@/images/clients/skin/logo-light.svg'
import logoMyplaza from '@/images/clients/myplaza/myplaza.svg'
import imageFeature from '@/images/feature1.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Gush', logoGush],
  ['Cava', logoCava],
  ['Doori', logoDoori],
  ['Himeya', logoHimeya],
  ['Zeroharm', logoZeroharm],
  ['Bathla', logoBathla],
  ['Skin', logoSkin],
  ['Myplaza',logoMyplaza]
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="MyPlaza provides a range of services centered around decentralized e-commerce and the creation of virtual stores."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Here are some of the key services it offers
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageFeature}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Store Creation">
            Users can create their own virtual stores within the MyPlaza.io platform.
             These stores can be customized with branding, product listings,
              and other features to create a unique online storefront.
            </ListItem>
            <ListItem title="Product Listing">
            Sellers can list digital and physical products for sale within their stores. 
            This includes the ability to add product descriptions, images, 
            pricing, and other details to showcase their offerings.
            </ListItem>
            <ListItem title="Decentralized Marketplace">
            The platform operates as a decentralized marketplace, meaning that it is not 
            controlled by a single central authority. Instead, transactions and store management are handled using 
            blockchain technology, which can offer increased security and transparency.
            </ListItem>
            <ListItem title="Community Engagement">
            MyPlaza.io aims to build a community of buyers and sellers within its platform. 
            Users can interact with each other, discover new products,
             and participate in the decentralized marketplace ecosystem.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Creator marketing done right .
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Effective influencer marketing boils down to genuine
              relationships, high conversions, and data. MyPlaza is designed to
              help you confidently work with influencers.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Myplaza', logo: logoMyplaza }}
      >
        MyPlaza is a platform for creators to sell their goods and services. It is a link-in-bio store that allows creators to get paid for recommending products.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
