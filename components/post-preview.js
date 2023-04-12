// import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/Blog/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-xs opacity-80 ">
        <Date dateString={date} />
      </div>
      <p className="text-md mb-4 leading-relaxed opacity-95">{excerpt}</p>
      {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
    </div>
  );
}
