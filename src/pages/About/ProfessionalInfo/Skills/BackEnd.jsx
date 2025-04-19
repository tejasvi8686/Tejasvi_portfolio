import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const backendSkills = [
  {
    id: 1,
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
    borderColor: "border-green-500/20",
    hoverColor: "hover:border-green-500/40 hover:bg-green-500/5"
  },
  {
    id: 2,
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-300",
    borderColor: "border-gray-300/20",
    hoverColor: "hover:border-gray-300/40 hover:bg-gray-300/5"
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
      <p className="mt-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{skill.name}</p>
    </div>
  );
};

const BackEnd = () => {
  return (
    <div className="md:px-5 w-full">
      <p className="mb-3 lg:hidden block">
        <span className="text-white">//professional-info</span> / skills
      </p>
      <h2 className="text-xl mb-5 flex items-center">
        {`//_back-end skills`}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {backendSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default BackEnd;
