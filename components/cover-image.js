import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../lib/sanity";

export default function CoverImage({ title, slug, image: source, priority }) {
  const imgUrl = urlForImage(source).height(1200).width(2000).url();
  // Check if an image has been provided
  //  since the query is dereferencing like: "coverImage.asset->", we can just check for _id immediatly
  const image = source?._id ? (
    // If an image has been provided, render the image with a shadow effect
    // and wrap it in a link to the post page if a slug has been provided
    <Image
      className="h-auto w-full rounded-xl shadow-xl"
      width={2000}
      height={1200}
      alt={`Cover Image for ${title}`}
      src={imgUrl}
      sizes="100vw"
      // This line of code sets the priority of the image for lazy loading.
      priority={priority}
      placeholder="blur"
      blurDataURL={source.metadata.lqip}
    />
  ) : (
    // If no image has been provided, render the post title in a box
    <div className="color-accent-1 align-content-middle rounded-xl border bg-bgPrimary lg:rounded-3xl">
      <h1 className=" align-text-middle text-center text-5xl">{title}</h1>
    </div>
  );
  return (
    <div className="sm:mx-0">
      {/* This line of code is using the Ternary operator to conditionally render a link to the post page
          if a slug has been provided, otherwise it will just render the image or title. */}
      {slug ? (
        <Link href={`/Blog/posts/${slug}`} as={`/Blog/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
