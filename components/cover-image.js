 import Image from 'next/image'
 import Link from 'next/link'
 import { urlForImage } from '../lib/sanity'
 
 export default function CoverImage({ title, slug, image: source, priority }) {

   
  const imgUrl = urlForImage(source).height(1200).width(2000).url()
  // Check if an image has been provided
  //  since the query is dereferencing like: "coverImage.asset->", we can just check for _id immediatly
  const image = source?._id ? (
    // If an image has been provided, render the image with a shadow effect
    // and wrap it in a link to the post page if a slug has been provided
       <Image
        className=" w-full h-auto rounded-3xl lg:rounded-4xl shadow-xl"
        
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
    <div className='bg-bgPrimary border color-accent-1 rounded-xl lg:rounded-3xl align-content-middle' >
      <h1 className=' text-5xl text-center align-text-middle'>
        {title}
      </h1>
    </div>
  )
  return (
    <div className="sm:mx-0">
      {/* This line of code is using the Ternary operator to conditionally render a link to the post page
          if a slug has been provided, otherwise it will just render the image or title. */}
      {slug ? (
        <Link href={`/Blog/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
