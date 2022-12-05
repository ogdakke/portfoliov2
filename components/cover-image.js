/**
 * Renders a cover image for a post with a link to the post page if a slug is provided.
 * If no image is provided, a title is displayed in a colored box instead.
 * 
 * @param {string} title The title of the post.
 * @param {string} slug The slug for the post. This is used to create a link to the post page.
 * @param {object} image An object containing image data, including the asset reference.
 * @param {number} priority A number indicating the priority of the image for lazy loading.
 * 
 * @returns {React.Component} A React component that renders the post image or title.
 */
 import cn from 'classnames'
 import Image from 'next/image'
 import Link from 'next/link'
 import { urlForImage } from '../lib/sanity'
 
 export default function CoverImage({ title, slug, image: source, priority }) {
   // Check if an image has been provided
   const image = source?.asset?._ref ? (
     // If an image has been provided, render the image with a shadow effect
     // and wrap it in a link to the post page if a slug has been provided
     <div
       className={cn('shadow-small rounded-3xl', {
         // This line of code is using the Ternary operator to conditionally
         // apply a CSS class to the image based on whether a slug has been provided.
         // If a slug is provided, the class "hover:shadow-medium transition-shadow duration-200"
         // will be applied. Otherwise, no class will be applied.
         'hover:shadow-medium transition-shadow duration-200': slug,
       })}
     >
       <Image
         className="w-full h-auto rounded-xl lg:rounded-3xl"
         layout="responsive"
         width={2000}
         height={1000}
         // This line of code sets the alt attribute for the image to "Cover Image for [title]"
         // where [title] is the value of the title parameter passed to the function.
         // This is important for accessibility, as screen readers use the alt text to
         // describe images to users.
         alt={`Cover Image for ${title}`}
         // This line of code uses the urlForImage helper function to generate the URL for the image,
         // and sets the height and width of the image to 1000px and 2000px respectively.
         src={urlForImage(source).height(1000).width(2000).url()}
         sizes="100vw"
         // This line of code sets the priority of the image for lazy loading.
         priority={priority}
       />
    </div>
  ) : (
    // If no image has been provided, render the post title in a colored box
    <div className='bg-bgPrimary border color-accent-1 rounded-xl lg:rounded-3xl align-content-middle' >
      <h1 className=' text-6xl text-center align-text-middle'>
        {title}
      </h1>
    </div>
  )

  // Return the image or title wrapped in a div with the class "sm:mx-0"
  return (
    <div className="sm:mx-0">
      {/* This line of code is using the Ternary operator to conditionally render a link to the post page
          if a slug has been provided, otherwise it will just render the image or title. */}
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
