 import cn from 'classnames'
 import Image from 'next/image'
 import Link from 'next/link'
 import { urlForImage } from '../lib/sanity'

export default function PostImage ({source}) {
  const postImage = source?.asset?._ref ? (
    <Image
      src={urlForImage(source).width(1200).height(800).url()}
      />

  ) : (
    <p>{source}</p>
  )
  console.log(source)
  return (
      postImage
    )
}












//  export default function PostImage({title, slug, source, priority }) {
//    // Check if an image has been provided
//    const postImage = source?.asset?._ref ? (
//      // If an image has been provided, render the image with a shadow effect
//      // and wrap it in a link to the post page if a slug has been provided
//      <div
//      className={cn('shadow-small rounded-3xl', {
//        'hover:shadow-medium transition-shadow duration-200': slug,
//       })}
//       >

//        <Image
//          className="w-full h-auto rounded-xl lg:rounded-3xl"
//          layout="responsive"
//          width={2000}
//          height={1000}
//          src={urlForImage().postImage(source).height(1000).width(2000).url()}
//          sizes="100vw"
//          priority={priority}
//        />
//      </div>
//    ) : (
//      // If no image has been provided, render the post title in a colored box
//      <div className='bg-bgPrimary border color-accent-1 rounded-xl lg:rounded-3xl align-content-middle' >
//        <h1 className=' text-6xl text-center align-text-middle'>
//          {title}

//        </h1>
//      </div>
//    )
//    console.log(postImage);
//    console.log(source);
//    return (
//      <div className="sm:mx-0">
//        {slug ? (
//          // If a slug has been provided, wrap the image in a link to the post page
//          <Link href={`/Blog/posts/${slug}`} aria-label={title}>
//            {postImage}
//          </Link>
//        ) : (
//          // If no slug has been provided, just render the image
//          postImage
//        )}
//      </div>
//    )
//  }
 