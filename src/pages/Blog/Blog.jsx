import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { RiArticleLine } from "react-icons/ri";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/blogData.json");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | Tejasvi Raj</title>
        <meta
          name="description"
          content="Technical articles by Tejasvi Raj on React, CSS, performance optimization, and modern web development."
        />
        <meta property="og:title" content="Blog | Tejasvi Raj" />
        <meta
          property="og:description"
          content="Technical articles on React, CSS, performance optimization, and modern web development."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="w-full h-full text-s1 overflow-y-auto content-container">
        <div className="border-b border-p4 w-full h-11">
          <span className="border-r border-p4 h-full flex gap-1 items-center px-3 cursor-pointer w-fit">
            <RiArticleLine size={18} /> _blog
          </span>
        </div>
        <div className="max-w-3xl mx-auto px-6 py-10">
          <h1 className="text-3xl text-white mb-2">Blog</h1>
          <p className="text-s1 mb-8">
            {"// thoughts on web development, React, and modern CSS"}
          </p>

          {loading ? (
            <div className="space-y-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-pulse border border-p4 rounded-xl p-6">
                  <div className="h-5 bg-p3 rounded w-2/3 mb-3"></div>
                  <div className="h-4 bg-p3 rounded w-1/4 mb-3"></div>
                  <div className="h-4 bg-p3 rounded w-full mb-2"></div>
                  <div className="h-4 bg-p3 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  to={`/blog/${post.slug}`}
                  className="block border border-p4 rounded-xl p-6 hover:border-s3 transition-all group"
                >
                  <h2 className="text-xl text-white group-hover:text-a2 transition-all mb-2">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-3 text-sm text-s1 mb-3">
                    <time>
                      {new Intl.DateTimeFormat("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }).format(new Date(post.date))}
                    </time>
                    <span>·</span>
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-p3 border border-p4 rounded px-2 py-0.5 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-s1">{post.summary}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
