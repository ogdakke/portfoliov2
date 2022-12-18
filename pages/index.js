import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import SectionSeparator from '../components/section-separator'
import Table from '../components/table'
import HeroPost from '../components/hero-post'
import Image from 'next/image'
import { indexQuery } from '../lib/queries'
import { urlForImage, usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'

export default function Home({allPosts: initialAllPosts,  preview }) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })
  const [heroPost, ...morePosts] = allPosts || []
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>DEW | Home</title>
        </Head>
        <Container>
          <Intro />
          <SectionSeparator/>
          
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl py-3">Links:</h1>
            <ul className="flex gap-8 pb-4">
              <li>
                <Link className="bg-accent-2 border-2 border-transparent hover:border-accent-3 hover:bg-accent-2/25 transition-colors text-xl  px-4 py-2 rounded-full" href={'https://github.com/ogdakke'}>GitHub</Link></li>
            </ul>
            <Table/>
          </div>
          <SectionSeparator/>
          {heroPost && (
            <>
              <p className="z-10 text-accent-7 absolute m-2 rounded-full lg:text-2xl text-lg bg-accent-3 w-max py-2 px-4">New in blog!</p>
              <HeroPost 
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}
