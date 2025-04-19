import { FaGitAlt } from "react-icons/fa";
import { RiGithubFill, RiToolsFill } from "react-icons/ri";
import { SiReactrouter, SiAxios, SiReactquery, SiFigma, SiFirebase, SiSupabase, SiPrisma, SiAmazonaws, SiDocker, SiVercel } from "react-icons/si";

const gitSkills = [
  {
    id: 1,
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
    borderColor: "border-orange-500/20",
    hoverColor: "hover:border-orange-500/40 hover:bg-orange-500/5"
  },
  {
    id: 2,
    name: "GitHub",
    icon: RiGithubFill,
    color: "text-gray-300",
    borderColor: "border-gray-300/20",
    hoverColor: "hover:border-gray-300/40 hover:bg-gray-300/5"
  }
];

const toolSkills = [
  {
    id: 1,
    name: "React Router",
    icon: SiReactrouter,
    color: "text-red-500",
    borderColor: "border-red-500/20",
    hoverColor: "hover:border-red-500/40 hover:bg-red-500/5"
  },
  {
    id: 2,
    name: "Axios",
    icon: SiAxios,
    color: "text-blue-500",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-500/40 hover:bg-blue-500/5"
  },
  {
    id: 3,
    name: "React Query",
    icon: SiReactquery,
    color: "text-yellow-500",
    borderColor: "border-yellow-500/20",
    hoverColor: "hover:border-yellow-500/40 hover:bg-yellow-500/5"
  },
  {
    id: 4,
    name: "Figma",
    icon: SiFigma,
    color: "text-purple-500",
    borderColor: "border-purple-500/20",
    hoverColor: "hover:border-purple-500/40 hover:bg-purple-500/5"
  },
  {
    id: 5,
    name: "Firebase",
    icon: SiFirebase,
    color: "text-orange-400",
    borderColor: "border-orange-400/20",
    hoverColor: "hover:border-orange-400/40 hover:bg-orange-400/5"
  },
  {
    id: 6,
    name: "Supabase",
    icon: SiSupabase,
    color: "text-green-400",
    borderColor: "border-green-400/20",
    hoverColor: "hover:border-green-400/40 hover:bg-green-400/5"
  },
  {
    id: 7,
    name: "Prisma",
    icon: SiPrisma,
    color: "text-blue-400",
    borderColor: "border-blue-400/20",
    hoverColor: "hover:border-blue-400/40 hover:bg-blue-400/5"
  },
  {
    id: 8,
    name: "AWS",
    icon: SiAmazonaws,
    color: "text-yellow-400",
    borderColor: "border-yellow-400/20",
    hoverColor: "hover:border-yellow-400/40 hover:bg-yellow-400/5"
  },
  {
    id: 9,
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-500",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-500/40 hover:bg-blue-500/5"
  },
  {
    id: 10,
    name: "Vercel",
    icon: SiVercel,
    color: "text-gray-300",
    borderColor: "border-gray-300/20",
    hoverColor: "hover:border-gray-300/40 hover:bg-gray-300/5"
  }
];

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className={`group flex flex-col  items-center p-5 rounded-lg border ${skill.borderColor} ${skill.hoverColor} transition-all duration-300`}>
      <div className="relative">
        <Icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
        <div className={`absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${skill.color.replace('text', 'bg')}`}></div>
      </div>
      <p className="mt-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{skill.name}</p>
    </div>
  );
};

const OtherSkills = () => {
  return (
    <div className="md:px-5 w-full overflow-y-auto h-[calc(100vh-10rem)]">
      <p className="mb-3 lg:hidden block">
        <span className="text-white">//professional-info</span> / skills
      </p>

      {/* Git and GitHub Section */}
      <h2 className="text-xl mb-5 flex items-center gap-2">
        <FaGitAlt className="text-gray-400" />
        {`//_git`}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gitSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      {/* Tools Section */}
      <h2 className="text-xl mb-5 mt-10 flex items-center gap-2">
        <RiToolsFill className="text-gray-400" />
        {`//_tools`}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {toolSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default OtherSkills;
