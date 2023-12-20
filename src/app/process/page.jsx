import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Building Your Plaza:" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        <strong className="font-semibold text-neutral-950">Effortless Setup:</strong> Ditch the website-building woes!
         Myplaza provides an intuitive interface where you can
         create your personalized "Plaza" in minutes. No coding or tech expertise required, just pure creative freedom.
        </p>
        
        <p>
        <strong className="font-semibold text-neutral-950">Customization Galore: </strong>Unleash your inner designer! Craft your Plaza's aesthetic with customizable themes
        , layouts, and branding elements. Make it a true reflection of your unique style and brand identity.
        </p>
        <p>
        <strong className="font-semibold text-neutral-950">Choose Your Domain:</strong>
Myplaza.io grants you a unique subdomain for your Plaza, like "[yourname].myplaza.io". This subdomain is your online 
storefront's web address, so choose wisely! Opt for something catchy, memorable, and relevant to your brand.
        </p>
        <p>
        <strong className="font-semibold text-neutral-950">  Design Your Dream Space: </strong>
         Myplaza offers a plethora of customizable themes and layouts to personalize your Plaza's look and feel
.        Whether you envision a sleek, minimalist vibe or a vibrant, eye-catching aesthetic, there's a theme to match your vision.
        </p>
      </div>

    </Section>
  )
}

function Build() {
  return (
    <Section title="Populating Your Plaza:" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        <strong className="font-semibold text-neutral-950"> Showcase Your Brilliance:</strong>
         Add your diverse offerings, be it physical products, digital downloads, or even service-based packages. Myplaza accommodates it all, 
        allowing you to present your creations with enticing descriptions, high-quality visuals, and clear pricing.
        </p>
        <p>
        <strong className="font-semibold text-neutral-950"> Inventory Management Made Easy:</strong> Stay on top of your stock with Myplaza's built-in inventory management system. 
        Track quantities, set up automatic low-stock alerts, and ensure your customers always have access to your latest creations.
        </p>
        <p>
        <strong className="font-semibold text-neutral-950">Bundle Your Magic:</strong> Create irresistible product bundles that offer curated collections or combine complementary items at a discounted price.
         This is a great way to upsell products, clear older inventory, and present unique offerings to your customers.
        </p>
      </div>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Attracting Your Tribe:" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        <strong className="font-semibold text-neutral-950"> Effortless Marketing:</strong> Myplaza offers integrated marketing tools like email campaigns, social media sharing options,
         and discount codes. Spread the word about your Plaza and watch your audience grow organically.
        </p>
        <p>
        <strong className="font-semibold text-neutral-950">Affiliate Power:</strong> Leverage the power of community! Myplaza lets you recruit affiliates who can promote your products 
        and earn commissions on every sale. It's a win-win situation for everyone involved.
        </p>
        <p>
        <strong className="font-semibold text-neutral-950">Collaborate and Conquer: </strong>Myplaza encourages collaboration. Partner with other creators to offer co-branded products, joint workshops,
         or cross-promotions. This expands your reach, attracts new audiences, and fosters a creative community spirit.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
       Streamlining the Flow:
      </h3>
      <List className="mt-8">
        <ListItem title="Seamless Transactions">
         Myplaza integrates with secure payment gateways, ensuring smooth and hassle-free transactions for your customers. 
        No more fumbling with invoices or manual payments – focus on creating, and let Myplaza handle the rest.
        </ListItem>
        <ListItem title="Order Fulfillment Simplified">
         Whether you handle shipping yourself or partner with fulfillment services, Myplaza 
        helps manage orders efficiently. Track shipments, send updates to customers, and ensure a delightful post-purchase experience.
        </ListItem>
        <ListItem title=" Insights for Growth">
        <strong className="font-semibold text-neutral-950">Data-Driven Decisions: </strong>Myplaza provides valuable analytics to track your performance. Monitor sales, customer behavior, and marketing campaign effectiveness.
         Gain insights to optimize your offerings, refine your strategies, and grow your business steadily.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title=" Building on Values, Empowering Creators"
      >
        <p>
        At Myplaza.io, we're more than just a platform – we're a community built on shared values that 
        fuel our dedication to empowering creators. These values are the bedrock of everything we do, 
        guiding our decisions and shaping the experience we offer to our vibrant community of innovators.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Creator-Centric">
          You're the star of the show! We believe in nurturing a platform where creators 
          take center stage. From intuitive tools to seamless transactions, we strive to remove obstacles and 
          let your artistry shine through. It's not about Myplaza; it's about your Plaza, your vision, and your success.
          </GridListItem>
          <GridListItem title="Creativity Unbound">
          Creativity deserves no boundaries. We champion diversity and embrace every form of expression.
           Whether you're painting landscapes, sculpting clay, or crafting code, 
          Myplaza provides a platform to unleash your unique voice and share it with the world.
          </GridListItem>
          <GridListItem title="Community Matters">
          Together, we thrive. We believe in fostering a supportive and collaborative space where creators connect, inspire, and learn
           from each other. Collaboration leads to innovation, and Myplaza facilitates connections that spark magic.
          </GridListItem>
          <GridListItem title="Innovation is Key">
          The future is bright! We embrace constant evolution and seek new ways to empower creators. From cutting-edge features to strategic partnerships, 
          we stay ahead of the curve, ensuring your Myplaza experience remains vibrant and dynamic.
          </GridListItem>
          <GridListItem title="Integrity Above All">
          Trust is our foundation. We value transparency and ethical practices. Your data is safe, your transactions are secure, 
          and your trust is paramount. We prioritize building a community where creators feel empowered and protected.
          </GridListItem>
          <GridListItem title=" Passion Fuels Growth">
          We believe in the power of passion. That's why we're passionate about supporting yours. 
          Our team is fueled by a shared love for creativity and a desire to see creators like you succeed.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="Where Creators Thrive">
        <p>
        Introducing Myplaza.io, a game-changer platform empowering creators to
         build, manage, and scale their businesses – all under one roof. Imagine 
         a bustling marketplace teeming with passionate individuals showcasing their 
         unique talents and offerings, from handcrafted jewelry to captivating online courses. 
         That's Myplaza in a nutshell!
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
