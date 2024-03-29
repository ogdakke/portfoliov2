import Link from "next/link";

export default function Header() {
  return (
    <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
      <Link href="/Blog" className="hover:underline">
        DWE
      </Link>
    </h2>
  );
}
