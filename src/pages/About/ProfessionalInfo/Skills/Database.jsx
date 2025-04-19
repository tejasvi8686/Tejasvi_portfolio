import { RiDatabase2Fill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const databaseSkills = [
  {
    id: 1,
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
    borderColor: "border-green-500/20",
    hoverColor: "hover:border-green-500/40 hover:bg-green-500/5"
  },
  {
    id: 2,
    name: "MySQL",
    icon: SiMysql,
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
      <p className="mt-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{skill.name}</p>
    </div>
  );
};

const Database = () => {
  return (
    <div className="md:px-5 w-full">
      <p className="mb-3 lg:hidden block">
        <span className="text-white">//professional-info</span> / skills
      </p>
      <h2 className="text-xl mb-5 flex items-center gap-2">
        <RiDatabase2Fill className="text-gray-400" />
        {`//_database`}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {databaseSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Database;
