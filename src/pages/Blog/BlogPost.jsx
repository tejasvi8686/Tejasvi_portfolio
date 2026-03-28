import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("/blogData.json");
        const data = await response.json();
        const found = data.find((p) => p.slug === slug);
        if (found) {
          setPost(found);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="animate-pulse space-y-4 w-full max-w-3xl px-6">
          <div className="h-8 bg-p3 rounded w-2/3"></div>
          <div className="h-4 bg-p3 rounded w-1/4"></div>
          <div className="h-4 bg-p3 rounded w-full"></div>
          <div className="h-4 bg-p3 rounded w-full"></div>
          <div className="h-4 bg-p3 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center text-s1">
        <h2 className="text-2xl text-white mb-4">Post not found</h2>
        <Link
          to="/blog"
          className="flex items-center gap-2 bg-[#1C2B3A] hover:bg-[#263B50] text-white px-4 py-2 rounded-lg transition-all"
        >
          <RiArrowLeftSLine size={20} /> Back to Blog
        </Link>
      </div>
    );
  }

  const renderContent = (content) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl font-semibold text-s3 mt-6 mb-3">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("```")) {
        const lines = block.split("\n");
        const code = lines.slice(1).filter((l) => l !== "```").join("\n");
        return (
          <pre
            key={i}
            className="bg-p3 border border-p4 rounded-lg p-4 overflow-x-auto my-4 text-sm font-fira"
          >
            <code>{code}</code>
          </pre>
        );
      }
      if (block.startsWith("- ")) {
        return (
          <ul key={i} className="list-disc list-inside space-y-1 my-3 text-s1">
            {block.split("\n").map((item, j) => (
              <li key={j}>{item.replace(/^- /, "")}</li>
            ))}
          </ul>
        );
      }
      if (/^\d+\./.test(block)) {
        return (
          <ol
            key={i}
            className="list-decimal list-inside space-y-1 my-3 text-s1"
          >
            {block.split("\n").map((item, j) => (
              <li key={j}>{item.replace(/^\d+\.\s*/, "")}</li>
            ))}
          </ol>
        );
      }
      return (
        <p key={i} className="text-s1 leading-relaxed my-3">
          {block}
        </p>
      );
    });
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Tejasvi Raj</title>
        <meta name="description" content={post.summary} />
        <meta property="og:title" content={`${post.title} | Tejasvi Raj`} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="w-full h-full overflow-y-auto content-container">
        <article className="max-w-3xl mx-auto px-6 py-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-s1 hover:text-white transition-all mb-6"
          >
            <RiArrowLeftSLine size={20} /> back to blog
          </Link>

          <div className="flex gap-2 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-p3 border border-p4 rounded px-2 py-0.5 text-xs text-s1"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl text-white mb-3">{post.title}</h1>

          <time className="text-sm text-s1 block mb-8">
            {new Intl.DateTimeFormat("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(new Date(post.date))}
          </time>

          <div className="prose prose-invert">{renderContent(post.content)}</div>

          <div className="border-t border-p4 mt-10 pt-6 pb-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-s1 hover:text-white transition-all"
            >
              <RiArrowLeftSLine size={20} /> more articles
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
