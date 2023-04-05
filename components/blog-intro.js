import Link from "next/link";

export default function BlogIntro() {
  return (
    <section className="my-5 flex flex-col justify-items-center md:flex-row md:justify-between ">
      <Link
        href={"/"}
        className="text-4xl font-bold leading-tight tracking-tighter hover:underline md:text-6xl"
      >
        DWE | Blog
      </Link>
      <h4 className="mt-5 max-w-full text-left text-lg md:max-w-sm md:pl-8">
        Welcome to my blog. Here you can expect to find posts about tech,
        design, side projects, AI and everything inbetween.
      </h4>
    </section>
  );
}
