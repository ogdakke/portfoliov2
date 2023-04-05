import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import SectionSeparator from "../components/section-separator";
import HeroPost from "../components/hero-post";
import { indexQuery } from "../lib/queries";
import { usePreviewSubscription } from "../lib/sanity";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import HeroLanding from "../components/hero-landing";
import { Projects } from "../components/projects";
export default function Home({ allPosts: initialAllPosts, preview }) {
  const { data: allPosts } = usePreviewSubscription(indexQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  });
  const [heroPost] = allPosts || [];
  return (
    <Layout preview={preview}>
      <Head>
        <title>DEW | Home</title>
        <meta
          name="description"
          key="home-description"
          content="Developer portfolio for DEW. I develop websites and webapps for different purposes, but always with quality in mind."
        />
      </Head>
      <Container>
        <Intro />
        <HeroLanding />

        <SectionSeparator />
        {heroPost && (
          <>
            <p className="absolute z-10 m-2 w-max rounded-2xl bg-accent-3 py-2 px-4 text-lg text-accent-7">
              New in blog!
            </p>
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          </>
        )}
        <SectionSeparator />
        <Projects />
        {/* <Links /> */}
        {/* <Table /> */}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
