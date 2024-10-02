import { format, parseISO } from "date-fns";
import { slug as slugify } from "github-slugger";
import Link from "next/link";
import ViewCounter from "./ViewCounter";

const BlogDetails = ({ blog, slug }) => {
  return (
    <div className="px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>
      <span className="m-3">
        <ViewCounter  slug={slug}/>
      </span>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${slugify(blog.tags[0])}`} className="m-3">
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
