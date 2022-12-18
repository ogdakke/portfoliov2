import Container from './container'
import cn from 'classnames'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="z-50 flex justify-center w-screen fixed bottom-3 h-min px-3">
        <nav className="w-full relative  p-5 bg-accent-1/40 backdrop-blur-xl max-w-2xl bottom-2 rounded-3xl">
          <ul className=" flex flex-row gap-6 items-center justify-between px-3">
            <Link className= "text-lg px-4 py-1 border border-transparent bg-bgPrimary/50 hover:border-accent-3/75 hover:bg-bgPrimary transition-all duration-150 rounded-full" href={`/`}>Home</Link>           
            <Link className="text-lg px-4 py-1 border border-transparent bg-bgPrimary/50 hover:border-accent-3/75 hover:bg-bgPrimary transition-colors rounded-full" href={`/Blog`}>Blog</Link>
          </ul>
        </nav>
    </div>
  )
}
