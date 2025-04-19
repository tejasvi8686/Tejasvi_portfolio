import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiMui, SiReact } from "react-icons/si";


const frontendSkills = [
  {
    id: 1,
    name: "HTML",
    icon: FaHtml5,
    color: "text-orange-500",
    borderColor: "border-orange-500/20",
    hoverColor: "hover:border-orange-500/40 hover:bg-orange-500/5"
  },
  {
    id: 2,
    name: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-500",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-500/40 hover:bg-blue-500/5"
  },
  {
    id: 3,
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "text-purple-500",
    borderColor: "border-purple-500/20",
    hoverColor: "hover:border-purple-500/40 hover:bg-purple-500/5"
  },
  {
    id: 4,
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "text-cyan-400",
    borderColor: "border-cyan-400/20",
    hoverColor: "hover:border-cyan-400/40 hover:bg-cyan-400/5"
  },
  {
    id: 6,
    name: "MUI",
    icon: SiMui,
    color: "text-blue-400",
    borderColor: "border-blue-400/20",
    hoverColor: "hover:border-blue-400/40 hover:bg-blue-400/5"
  }
];

const languageSkills = [
  {
    id: 1,
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-500",
    borderColor: "border-yellow-500/20",
    hoverColor: "hover:border-yellow-500/40 hover:bg-yellow-500/5"
  },
  {
    id: 2,
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-500/40 hover:bg-blue-500/5"
  },
  {
    id: 3,
    name: "React.js",
    icon: FaReact,
    color: "text-blue-400",
    borderColor: "border-blue-400/20",
    hoverColor: "hover:border-blue-400/40 hover:bg-blue-400/5"
  },
  {
    id: 4,
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-gray-300",
    borderColor: "border-gray-300/20",
    hoverColor: "hover:border-gray-300/40 hover:bg-gray-300/5"
  },
  {
    id: 5,
    name: "React Native",
    icon: SiReact,
    color: "text-blue-500",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-500/40 hover:bg-blue-500/5"
  }
];

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className={`group flex flex-col items-center p-5 rounded-lg border ${skill.borderColor} ${skill.hoverColor} transition-all duration-300`}>
      <div className="relative">
        <Icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
        <div className={`absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${skill.color.replace('text', 'bg')}`}></div>
      </div>
      <p className="mt-3 text-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{skill.name}</p>
    </div>
  );
};

const FrontEnd = () => {
  return (
    <div className="md:px-5 w-full overflow-y-auto h-[calc(100vh-10rem)]">
      <p className="mb-3 lg:hidden block">
        <span className="text-white">//professional-info</span> / skills
      </p>
      <>
        <h2 className="text-xl mb-5 flex items-center">
          {`//_front-end skills`}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {frontendSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </>

      <>
        <h2 className="text-xl text-s1 mb-5 mt-10 flex items-center">
          {`//_language & libraries`}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {languageSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </>
    </div>
  );
};

export default FrontEnd;
