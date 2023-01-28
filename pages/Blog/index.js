import Head from 'next/head'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import BlogIntro from '../../components/blog-intro'
import Layout from '../../components/layout'
import { indexQuery } from '../../lib/queries'
import { getClient, overlayDrafts } from '../../lib/sanity.server'
import SectionSeparator from '../../components/section-separator'
import { usePreviewSubscription } from '../../lib/sanity'


export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}


export default function Index({ allPosts: initialAllPosts, preview }) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  })
  // const {data: allPosts} = usePreviewSubscription(indexQuery, {initialData: initialAllPosts, enabled: preview})
  const [heroPost, ...morePosts] = allPosts || []

  if (preview) {
    return (
    <PreviewSuspense fallback={allPosts}>
      <PreviewDocumentsCount/>
      <div>preview</div>
    </PreviewSuspense>
    )
  }
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>DEW | Blog</title>
          <meta
        name="description"
        key="blog-description"
        content= "DEW's blog. I post about web-development, web design and other stuff."
          />
        </Head>
        <Container>
          <BlogIntro/>
          <SectionSeparator/>
          <p className="z-10 text-accent-7 absolute m-2 rounded-full lg:text-2xl text-lg bg-accent-3 w-max py-2 px-4">New in blog!</p>
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


