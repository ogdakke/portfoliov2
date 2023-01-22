import Container from './container'
import cn from 'classnames'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="z-50 flex justify-center w-screen fixed bottom-4 h-min px-3">
        <nav className=" w-full relative p-5 bg-accent-4/50 dark:bg-accent-1/40 backdrop-blur-xl max-w-2xl bottom-2 rounded-3xl">
          <div className="fill-accent-5 dark:fill-accent-3 text-accent-5 dark:text-accent-3  flex flex-row gap-6 items-center justify-between">
            <Link
             className= "flex items-center gap-1 text-lg pl-3 pr-4 py-1 border border-transparent bg-bgLight/50 hover:bg-bgLight dark:bg-bgPrimary/50 dark:hover:border-accent-3/75 dark:hover:bg-bgPrimary transition-all duration-150 rounded-3xl hover:border-accent-5" href={`/`}>
              <svg aria-label='logo of home button' width="18" height="18" viewBox="0 0 20 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
              <path className='inherit' d="M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z"/>
              </svg>
            Home
              </Link>           
            <Link
             className="flex items-center gap-1 text-lg pl-3 pr-4 py-1 border border-transparent bg-bgLight/50 hover:bg-bgLight dark:bg-bgPrimary/50 dark:hover:border-accent-3/75 dark:hover:bg-bgPrimary transition-all duration-150 rounded-3xl hover:border-accent-5" href={`/Blog`}>
            <svg aria-label="logo of blog button" width="18" height="18" viewBox="0 -1 20 20" xmlns="http://www.w3.org/2000/svg">
            <path className='inherit' d="M9 4.80423C7.9428 4.28906 6.75516 4 5.5 4C4.24484 4 3.0572 4.28906 2 4.80423V14.8042C3.0572 14.2891 4.24484 14 5.5 14C7.1686 14 8.71789 14.5108 10 15.3847C11.2821 14.5108 12.8314 14 14.5 14C15.7552 14 16.9428 14.2891 18 14.8042V4.80423C16.9428 4.28906 15.7552 4 14.5 4C13.2448 4 12.0572 4.28906 11 4.80423V12C11 12.5523 10.5523 13 10 13C9.44772 13 9 12.5523 9 12V4.80423Z" />
            </svg>
            Blog
              </Link>
          </div>
        </nav>
    </div>
  )
}
