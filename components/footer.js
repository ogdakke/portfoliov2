import Link from 'next/link'
import Container from './container'



export default function Footer() {


  return (
    <footer className="mt-10 mb-20 border-t border-accent-2">
      <Container>
        <div className="pb-16 pt-8 lg:py-16 flex flex-col ">
          
          <Link 
          href="https://github.com/ogdakke" 
          title='My GitHub Profile'
          className="
          text-accent-5 
          fill-accent-5
          dark:text-accent-3
            dark:fill-accent-3
          opacity-85
          hover:opacity-100
           flex gap-1
           hover:underline 
           transition-all
           items-center 
           w-fit lg:m-4 p-4 text-md lg:text-lg tracking-tighter leading-tight lg:text-left mb-6 lg:mb-0 lg:pr-4 
           ">
            GitHub
            <svg width="20" height="20" viewBox="0 0 20 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path className='fill-inherit' d="M11 3C10.4477 3 10 3.44772 10 4C10 4.55228 10.4477 5 11 5H13.5858L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L15 6.41421V9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9V4C17 3.44772 16.5523 3 16 3H11Z" />
            <path d="M5 5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12V15H5V7L8 7C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5H5Z" />
            </svg>
          </Link>
          <Link 
          href="mailto:contactdew@proton.me"
          title="My Email"
          className="
          text-accent-5 
          fill-accent-5
          dark:text-accent-3
          dark:fill-accent-3
          opacity-85
          hover:opacity-100
          flex gap-1
          hover:underline 
          transition-all
          items-center 
          w-fit lg:m-4 p-4 text-md lg:text-lg tracking-tighter leading-tight lg:text-left mb-6 lg:mb-0 lg:pr-4 
           ">
            Email
            <svg width="20" height="20" viewBox="0 0 20 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path className='fill-inherit' d="M11 3C10.4477 3 10 3.44772 10 4C10 4.55228 10.4477 5 11 5H13.5858L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L15 6.41421V9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9V4C17 3.44772 16.5523 3 16 3H11Z" />
            <path d="M5 5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12V15H5V7L8 7C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5H5Z" />
            </svg>
          </Link>
           <p className="lg:m-4 p-4 text-md lg:text-lg tracking-tighter leading-tight lg:text-left mb-10 lg:mb-0 lg:pr-4">
             Made by DEW 2023
           </p>
           
        </div>
      </Container>
    </footer>
  )
}
