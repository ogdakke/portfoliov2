import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-bgPrimary border-t border-accent-2">
      <Container>
        <div className="py-8 lg:py-28 flex flex-col lg:flex-row lg:items-center">
          <div className='flex flex-col'>
          <Link className='underline text-md lg:text-lg lg:m-4 px-4 m-1 py-1' href={"/"}>Home</Link>
          <Link className='underline text-md lg:text-lg lg:m-4 px-4 m-1 py-1' href={"/Blog"}>Blog</Link>
          </div>
          <p className="lg:m-4 p-4 text-md lg:text-lg tracking-tighter leading-tight lg:text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Made by DW <br/> 2022
          </p>
        </div>
      </Container>
    </footer>
  )
}
