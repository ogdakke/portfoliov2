import Container from './container'
import cn from 'classnames'
import Link from 'next/link'

export default function Navbar() {
  return (
        <nav className="fixed z-50 p-5 bg-accent-2/25 backdrop-blur-lg w-full top-0">
          <ul className=" flex flex-row gap-6 items-center">
          <Link href={`/`} className="text-3xl lg:px-6 font-thin">DEW</Link>
            <Link href={`/`}>Home</Link> 
            <Link href={`/Blog`}>Blog</Link>
          </ul>
        </nav>
  )
}
