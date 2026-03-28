import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { MdViewInAr } from "react-icons/md";
import { RiArrowLeftSLine, RiCheckFill, RiCodeSSlashFill } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../../layouts/Styles.css";

const slugify = (name) =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/projectsData.json");
        const data = await response.json();
        const found = data.find((p) => slugify(p.name) === slug);
        if (found) {
          setProject(found);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="animate-pulse space-y-4 w-full max-w-3xl px-6">
          <div className="h-8 bg-p3 rounded w-1/3"></div>
          <div className="h-64 bg-p3 rounded"></div>
          <div className="h-4 bg-p3 rounded w-full"></div>
          <div className="h-4 bg-p3 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (notFound || !project) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center text-s1">
        <h2 className="text-2xl text-white mb-4">Project not found</h2>
        <Link
          to="/projects"
          className="flex items-center gap-2 bg-[#1C2B3A] hover:bg-[#263B50] text-white px-4 py-2 rounded-lg transition-all"
        >
          <RiArrowLeftSLine size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  const {
    projectNo,
    name,
    images,
    category,
    liveLink,
    codeLink,
    description,
    technologies,
    features,
  } = project;

  const imageReadyToView =
    images && images.length > 0
      ? images.map((image) => ({
          original: image,
          thumbnail: image,
          originalAlt: `${name} project screenshot`,
          thumbnailAlt: `${name} project thumbnail`,
        }))
      : [];

  return (
    <>
      <Helmet>
        <title>{name} — Case Study | Tejasvi Raj</title>
        <meta
          name="description"
          content={`Case study for ${name} — ${description.slice(0, 150)}`}
        />
        <meta property="og:title" content={`${name} — Case Study | Tejasvi Raj`} />
        <meta
          property="og:description"
          content={`Case study for ${name} — ${description.slice(0, 150)}`}
        />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="w-full h-full overflow-y-auto content-container">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-s1 hover:text-white transition-all mb-6"
          >
            <RiArrowLeftSLine size={20} /> back to projects
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className="font-semibold text-s3 text-lg">{projectNo}</span>
            <img
              src={category}
              alt={`${name} category`}
              className="w-6 h-6"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl text-white mb-6">{name}</h1>

          {imageReadyToView.length > 0 && (
            <div className="rounded-2xl border border-p4 overflow-hidden mb-8">
              <ReactImageGallery items={imageReadyToView} showNav={true} />
            </div>
          )}

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-s3 mb-3">
              Problem Statement
            </h2>
            <p className="text-s1 leading-relaxed">{description}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-s3 mb-3">
              Technical Decisions
            </h2>
            <div className="flex flex-wrap gap-2">
              {technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 bg-p3 border border-p4 rounded-lg px-3 py-1 text-sm"
                >
                  <RxDotFilled /> {tech}
                </span>
              ))}
            </div>
          </section>

          {features && features.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-s3 mb-3">
                Key Features & Results
              </h2>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-s1">
                    <RiCheckFill className="text-a2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="flex gap-3 mt-8 pb-10">
            {liveLink && liveLink !== "/" && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1C2B3A] hover:bg-[#263B50] text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
              >
                <MdViewInAr size={22} /> live demo
              </a>
            )}
            {codeLink && codeLink !== "/" && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1C2B3A] hover:bg-[#263B50] text-white px-4 py-2 rounded-lg transition-all flex items-center gap-2"
              >
                <RiCodeSSlashFill size={22} /> view source
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCaseStudy;
