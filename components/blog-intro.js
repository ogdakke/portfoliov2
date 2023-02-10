import Link from "next/link";

export default function BlogIntro() {
  return (
    <section className="flex-col md:flex-row flex justify-items-center md:justify-between my-5 ">
      <Link
        href={"/"}
        className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight hover:underline"
      >
        DEW | Blog
      </Link>
      <h4 className="max-w-full md:max-w-sm text-left text-lg mt-5 md:pl-8">
        Welcome to my blog. Here you can expect to find posts about tech,
        design, side projects, AI and everything inbetween.
      </h4>
    </section>
  );
}
