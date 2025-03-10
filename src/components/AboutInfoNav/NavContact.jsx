import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiMailFill,
  RiPhoneFill,
} from "react-icons/ri";

const NavContact = () => {
  const [showInfo, setShowInfo] = useState(false);
  const recipientEmail = "tejasviraj8686@gmail.com";
  const subject = "Hello from me";

  const composeEmail = () => {
    const gmailURL = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      recipientEmail
    )}&su=${encodeURIComponent(subject)}`;
    window.open(gmailURL, "_blank");
  };
  return (
    <>
      <div>
        <div
          data-aos="fade-down"
          onClick={() => setShowInfo(!showInfo)}
          className={`${
            showInfo ? "text-white" : "md:text-s1"
          } border-y border-x md:border-x-0 mt-1 mb-2  border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer lg:bg-transparent bg-p4 text-white `}
        >
          {showInfo ? (
            <RiArrowDownSFill size={24} />
          ) : (
            <RiArrowRightSFill size={24} />
          )}{" "}
          contacts
        </div>

        {showInfo ? (
          <div
            data-aos="zoom-in"
            className={`px-3 pt-4 md:pb-0 pb-2 space-y-4 `}
          >
            <p className="flex items-center gap-2 ">
              <RiMailFill size={20} />{" "}
              <span
                className="hover:text-white hover:underline "
                onClick={composeEmail}
              >
                send email
              </span>
            </p>
            <span className="text-sm">tejasviraj8686@gmail.com</span>
            <p className="flex items-center gap-2 ">
              <RiPhoneFill size={20} />{" "}
              <span className="hover:text-white hover:underline ">
                +91 6387247869
              </span>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavContact;
