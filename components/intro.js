import Link from 'next/link'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex justify-items-center  md:justify-between my-16 md:my-32">
      <Link href={"/"} className="hover:underline text-5xl md:text-7xl lg:text-7xl font-bold tracking-tighter leading-tight">
        Hi, I'm Daniel
      </Link>
    </section>
  )
}
