import { useState } from "react";
import { RiArrowDownSFill, RiArrowRightSFill } from "react-icons/ri";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


const FindMe = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div
        data-aos="fade-right"
        onClick={() => setShowInfo(!showInfo)}
        className={`${
          showInfo ? "text-white" : "lg:text-s1"
        } pl-4 border-y border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer bg-p4  text-white md:bg-transparent`}
      >
        {showInfo ? (
          <RiArrowDownSFill size={24} />
        ) : (
          <RiArrowRightSFill size={24} />
        )}
        find-me-also-in
      </div>

      {showInfo ? (
        <div
          data-aos="zoom-in"
          className={`px-3 mt-4 space-y-2 transition-all duration-500 lg:border-b-0 border-b border-p4 lg:pb-0 pb-5 `}
        >
         <Link
          to={"https://github.com/tejasvi8686"}
          target="_blank"
          className="flex gap-1 cursor-pointer"
        >
          <RiLinkedinFill size={22} />{" "}
          <span className={"hover:text-white transition-all"}>
            Linkedln Profile
          </span>
        </Link>
        <Link
          to={"https://twitter.com/Tejasvi94987859"}
          target="_blank"
          className="flex gap-1 cursor-pointer"
        >
          <FaXTwitter size={22} />{" "}
          <span className="hover:text-white transition-all">
            Twitter Profile
          </span>
        </Link>

        <Link
          to={"https://github.com/tejasvi8686"}
          target="_blank"
          className="flex gap-1 hover:text-white cursor-pointer"
        >
          <RiGithubFill size={22} />{" "}
          <span className="hover:text-white transition-all">
            Github Profile
          </span>
        </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FindMe;
