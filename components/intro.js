import Link from 'next/link'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex justify-items-center  md:justify-between my-5 md:mb-12">
      <Link href={"/"} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
        Hi, I'm Daniel
      </Link>
    </section>
  )
}
