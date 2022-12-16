import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import SectionSeparator from '../components/section-separator'
import TextSection from '../components/TextSection'

export default function Index({ preview }) {
  return (
    <>
      <Layout>
        <Head>
          <title>DEW | Home</title>
        </Head>
        <Container>
          <Intro />
          <SectionSeparator/>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl py-3">Links:</h1>
            <ul className="flex flex-col gap-4">
              <li><Link className="text-xl underline" href={'https://github.com/ogdakke'}>GitHub</Link></li>
              <li><Link className="text-xl underline" href={'http://www.linkedin.com/in/Daniel-Wargh'}>LinkedIn</Link></li>
            </ul>
            <h1 className="text-3xl py-3" >Skills:</h1>
            <ul className="flex flex-col gap-1 text-xl">
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>PHP</li>
              <li>Figma</li>
            </ul>
          </div>
        </Container>
      </Layout>
    </>
  )
}

// export async function getStaticProps({ preview = false }) {
//   const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
//   return {
//     props: { allPosts, preview },
//     // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
//     revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
//   }
// }
