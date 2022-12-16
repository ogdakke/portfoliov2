import Head from 'next/head'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import BlogIntro from '../../components/blog-intro'
import Layout from '../../components/layout'
import { indexQuery } from '../../lib/queries'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import SectionSeparator from '../../components/section-separator'

export default function Index({ allPosts: initialAllPosts, preview }) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })
  const [heroPost, ...morePosts] = allPosts || []
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>DEW | Blog</title>
        </Head>
        <Container>
          <BlogIntro/>
          <SectionSeparator/>
          <p className="text-accent-1 m-2 rounded-lg lg:rounded-2xl lg:text-2xl text-lg absolute bg-slate-200/80 w-min py-1 px-3" >New!</p>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          <SectionSeparator/>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
