import Container from './container'
import cn from 'classnames'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex justify-center w-screen fixed bottom-0 h-min px-3">
        <nav className="relative w-full z-50 p-5 bg-accent-2/25 backdrop-blur-lg max-w-2xl bottom-2 rounded-2xl">
          <ul className="flex flex-row gap-6 items-center justify-between px-3">
            <Link className= "bg-inherit border-inherit border px-3 py-1 rounded-xl " href={`/`}>Home</Link> 
          <Link href={`/`} className="text-3xl lg:px-6 font-thin ">DEW</Link>
            <Link className="border-inherit border px-3 py-1 rounded-xl" href={`/Blog`}>Blog</Link>
          </ul>
        </nav>
    
    </div>
  )
}
