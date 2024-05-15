import tailwind from "../../../../assets/images/skills/Tailwind CSS.png";
import bootstrap from "../../../../assets/images/skills/bootstrap.png";
import css from "../../../../assets/images/skills/css-3.png";
import html from "../../../../assets/images/skills/html-5.png";
import js from "../../../../assets/images/skills/js.png";
import react from "../../../../assets/images/skills/physics.png";
import typescript from "../../../../assets/images/skills/typescript.png"
import Nextjs from "../../../../../public/techs/filled/nextjs.svg"

const FrontEnd = () => {
  return (
    <div className="md:px-10 w-full">
      <p className="mb-3 lg:hidden block">
        <span className="text-white">//professional-info</span> / skills
      </p>
      <>
        <h2 className="text-2xl mb-5  flex items-center">
          {`//_front-end skills`}
        </h2>
        <div className="flex justify-between  items-center flex-wrap">
          <figure className="text-center">
            <img src={html} alt="html5" />
            <p>HTML</p>
          </figure>
          <figure className="text-center">
            <img src={css} alt="css3" />
            <p>CSS</p>
          </figure>
          <figure>
            <img src={bootstrap} alt="bootstrap" />
            <p>Bootstrap</p>
          </figure>
          <figure>
            <img src={tailwind} alt="tailwind" className="w-16" />
            <p>Tailwind</p>
          </figure>
        </div>
      </>

      <>
        <h2 className="text-2xl text-s1 mb-5 mt-10  flex items-center">
          {`//_language & libraries`}
        </h2>
        <div className="flex gap-5 items-center">
          <figure>
            <img src={js} alt="javascript" />
            <p>JavaScript</p>
          </figure>
          <figure>
            <img src={typescript} alt="javascript" />
            <p>TypeScript</p>
          </figure>
          <figure className="text-center">
            <img src={react} alt="react" />
            <p>React.js</p>
          </figure>
          <figure className="text-center">
            <img src={Nextjs} alt="nextjs" className="w-20" />
            <p>Next.js</p>
          </figure>
        </div>
      </>
    </div>
  );
};

export default FrontEnd;
