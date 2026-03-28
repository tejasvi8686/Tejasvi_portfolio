import {  RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-12 border-y bg-p2 border-p4 px-6 flex lg:justify-between items-center text-s1 z-40">
      <nav aria-label="Social media" className="border-r border-p4 h-full flex justify-start items-center transition-all">
        find me in:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/tejasviraj/"
          aria-label="LinkedIn profile"
          className="ml-5 w-14 hover:text-white border-x h-full border-p4 flex justify-center items-center"
        >
          <RiLinkedinFill size={24} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/Tejasvi94987859"
          aria-label="Twitter profile"
          className="w-14  h-full hover:text-white border-p4 flex justify-center items-center"
        >
          <FaXTwitter size={24} />
        </a>
      </nav>
      <div
        className="min-w-2/12 lg:border-l lg:border-r-0 lg:pr-0 pl-5 h-full flex justify-end items-center border-p4 border-r pr-5"
      >
       <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tejasvi8686"
          aria-label="GitHub profile"
          className="flex justify-end items-center gap-2 transition-all"
        >
          <span className="hover:text-s3 hidden lg:block">
            @tejasvi_8686
          </span>
          <RiGithubFill size={24} className="hover:text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
