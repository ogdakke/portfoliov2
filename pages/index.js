import Head from 'next/head'
import Links from '../components/links'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import SectionSeparator from '../components/section-separator'
import Table from '../components/table'
import HeroPost from '../components/hero-post'
import { indexQuery } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import HeroLanding from '../components/hero-landing'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home({allPosts: initialAllPosts,  preview }) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })
  const [heroPost] = allPosts || []
  return (
    <Suspense fallback={<Loading/>}>
      <Layout preview={preview}>
        <Head>
          <title>DEW | Home</title>
          <meta
            name="description"
            key="home-description"
            content= "Developer portfolio for DEW. I develop websites and webapps for different purposes, but always with quality in mind."
          />
        </Head>
        <Container>
          <Intro />
          <HeroLanding/>
          
          <SectionSeparator/>
          {heroPost && (
            <>
              <p className="z-10 text-accent-7 absolute m-2 rounded-2xl text-lg bg-accent-3 w-max py-2 px-4">New in blog!</p>
              <HeroPost 
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            </>
          )}
          <SectionSeparator/>
          <Links/>  
          <Table/>
        </Container>
      </Layout>
    </Suspense>
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
