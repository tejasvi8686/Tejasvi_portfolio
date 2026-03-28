import { useEffect, useState } from "react";
import { RiGitRepositoryLine, RiStarFill, RiExternalLinkLine } from "react-icons/ri";
import { FaCodeFork } from "react-icons/fa6";

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/tejasvi8686/repos?sort=updated&per_page=6"
        );
        const data = await response.json();
        const filtered = data
          .filter((repo) => !repo.fork && !repo.private)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setRepos(filtered);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="animate-pulse border border-p4 rounded-lg p-4">
            <div className="h-4 bg-p3 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-p3 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-p3 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    );
  }

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Python: "#3572A5",
      SCSS: "#c6538c",
    };
    return colors[language] || "#8b949e";
  };

  return (
    <div>
      <p className="mb-3">
        <span className="text-white">//github-activity</span> / Recent Repos
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-p4 rounded-lg p-4 hover:border-s3 transition-all group"
          >
            <div className="flex items-center gap-2 mb-2">
              <RiGitRepositoryLine className="text-s1" size={16} />
              <span className="text-white group-hover:text-a2 transition-all font-medium">
                {repo.name}
              </span>
              <RiExternalLinkLine
                className="text-s1 opacity-0 group-hover:opacity-100 transition-all ml-auto"
                size={14}
              />
            </div>
            {repo.description && (
              <p className="text-sm text-s1 mb-3 line-clamp-2">
                {repo.description}
              </p>
            )}
            <div className="flex items-center gap-4 text-xs text-s1">
              {repo.language && (
                <span className="flex items-center gap-1">
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                  ></span>
                  {repo.language}
                </span>
              )}
              <span className="flex items-center gap-1">
                <RiStarFill size={12} /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <FaCodeFork size={12} /> {repo.forks_count}
              </span>
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://github.com/tejasvi8686"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-s1 hover:text-white transition-all text-sm"
      >
        view all repositories →
      </a>
    </div>
  );
};

export default GitHubRepos;
