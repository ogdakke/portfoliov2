import Link from 'next/link'
import { useTheme } from 'next-themes'
import  {useState, useEffect} from 'react'

export default function Intro() {
  const {theme, setTheme} = useTheme()
  return (
    <section className="flex-row flex justify-between my-16 md:my-32">
      <Link href={"/"} className="hover:underline text-5xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight">
        Hi, I'm Daniel
      </Link>
      <div className="p-4 flex">
              <button 
              onClick={() => setTheme( theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Dark Mode"
              title='Toggle Dark Mode'
              className="stroke-[1.5] hover:stroke-[2.5] transition-all p-1.5 stroke-accent-5 dark:stroke-accent-3 rounded-3xl">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1V2.55556M15 27.4444V29M29 15H27.4444M2.55556 15H1M24.8995 24.8995L23.7996 23.7996M6.20045 6.20045L5.1005 5.1005M24.8996 5.10059L23.7996 6.20053M6.20053 23.7996L5.10059 24.8996M21.2222 15C21.2222 18.4364 18.4364 21.2222 15 21.2222C11.5636 21.2222 8.77778 18.4364 8.77778 15C8.77778 11.5636 11.5636 8.77778 15 8.77778C18.4364 8.77778 21.2222 11.5636 21.2222 15Z" stroke="inherit" stroke-width="" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
           </div>
    </section>
  )
}
