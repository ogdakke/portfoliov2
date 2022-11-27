import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function PostImage({ title, slug, image: source, priority }) {
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small rounded-3xl', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    >
      <Image
        className="w-full h-auto rounded-xl lg:rounded-3xl"
        layout="responsive"
        width={2000}
        height={1000}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div className='bg-bgPrimary border color-accent-1 rounded-xl lg:rounded-3xl align-content-middle' >
      <h1 className=' text-6xl text-center align-text-middle'>
        {title}
      </h1>
    </div>
  )

  return (
    <div className="sm:mx-0">
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
