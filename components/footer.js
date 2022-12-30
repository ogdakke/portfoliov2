import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <footer className="mt-10 mb-20 border-t border-accent-2">
      <Container>
        <div className="py-8 lg:py-20 flex flex-col ">
          
          <p className="lg:m-4 p-4 text-md lg:text-lg tracking-tighter leading-tight lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Made by DEW 2022
          </p>
        </div>
      </Container>
    </footer>
  )
}
