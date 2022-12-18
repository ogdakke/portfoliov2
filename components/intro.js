import Link from 'next/link'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex justify-items-center  md:justify-between my-5 md:mb-12">
      <Link href={"/"} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
        Hi, I'm Daniel
      </Link>
      <h4 className="max-w-xs md:max-w-sm text-left text-lg mt-5 md:mt-0 md:pl-8">
        I'm a developer from Finland 
        with a passion for Fullstack development of beautiful, fast and simple websites.
      </h4>
    </section>
  )
}
