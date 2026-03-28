import emailjs from "@emailjs/browser";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { FaHandPeace } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ContactNumber from "./ContactNumber";
import FindMe from "./FindMe";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const successTimerRef = useRef(null);

  const dismissSuccess = useCallback(() => {
    setSuccess(false);
  }, []);

  useEffect(() => {
    if (success) {
      successTimerRef.current = setTimeout(dismissSuccess, 5000);
    }
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }
    };
  }, [success, dismissSuccess]);

  const sendEmail = (e) => {
    if (email && message) {
      e.preventDefault();
      setSending(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((response) => {
          if (response.status === 200) {
            setSuccess(true);
          }
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        })
        .finally(() => {
          setSending(false);
        });
    }
  };

  const customTheme = {
    background: "transparent",
    fontSize: "16px",
  };
  return (
    <>
      <Helmet>
        <title>Contact | Tejasvi Raj</title>
        <meta name="description" content="Get in touch with Tejasvi Raj. Send a message for collaboration, job opportunities, or project inquiries." />
        <meta property="og:title" content="Contact | Tejasvi Raj" />
        <meta property="og:description" content="Reach out to Tejasvi Raj for collaboration or job opportunities." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="md:grid md:grid-cols-12 lg:min-h-[calc(100vh-6.5rem)]">
        <div className="col-span-7  md:border-r border-p4 h-full md:flex justify-start text-s1">
          <div className="lg:min-w-[36%] h-full border-r border-p4  space-y-1 -z-50">
            <ContactNumber />
            {/* find me compo */}
            <FindMe />
          </div>
          <div className="text-s1 w-full">
            <div className={`border-b  border-p4 w-full h-10`}>
              <span className="border-r border-p4 h-full w-fit flex gap-1 items-center px-3 cursor-pointer ">
                contacts
                <RiCloseFill size={20} />
              </span>
            </div>
            <div className="flex justify-center items-center h-full w-full lg:mt-0 mt-20">
              {success ? (
                <div className="text-center" data-aos="zoom-out">
                  <h2 className="text-3xl text-white flex justify-center items-center">
                    Thank You! <FaHandPeace color="#F9BF2F" />
                  </h2>
                  <p>
                    Your message has been accepted. <br /> You will receive
                    answer really soon!
                  </p>
                  <p className="text-sm text-s1 mt-2">
                    This message will close in a few seconds...
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 py-3 px-6 rounded-lg text-white bg-[#1C2B3A] hover:bg-[#263B50] transition-all"
                  >
                    send-new-message
                  </button>
                </div>
              ) : (
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="contact-form space-y-6"
                >
                  <div>
                    <label htmlFor="contact-name">_name</label>
                    <br />
                    <input
                      type="text"
                      id="contact-name"
                      placeholder="Tejasvi Raj"
                      name="user_name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email">_email</label>
                    <br />
                    <input
                      type="email"
                      id="contact-email"
                      name="user_email"
                      placeholder="tejasviraj8686@gmail.com"
                      required
                      aria-required="true"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message">_message</label>
                    <br />
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tejasvi, we are offering you a job"
                      required
                      aria-required="true"
                      onChange={(e) => setMessage(e.target.value)}
                      className="md:w-[23rem] w-[20rem] h-28 bg-p3 rounded-lg px-3 py-4 outline-none border border-p4 mt-2"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className=" py-3 px-6 rounded-lg text-white bg-[#1C2B3A] hover:bg-[#263B50] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {sending && (
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    submit-message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:grid lg:col-span-5">
          <div className={`border-b  border-p4 w-full h-10`}></div>
          <div className="w-full h-full lg:pr-6 ">
            <div className=" md:flex w-full lg:h-[calc(100%-40px)] h-full  justify-center items-center lg:border-r border-p4 lg:pb-0 pb-20">
              <SyntaxHighlighter
                language="javascript"
                showLineNumbers
                customStyle={customTheme}
                style={gradientDark}
              >
                {`const button = document.querySelector('#sendBtn');

const message = {
	name: ${name ? name : '""'},
	email: ${email ? email : '""'},
	message: ${message ? message : '""'},
	date: ${new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date())}
}

button.addEventListener('click', () => {
	form.send(message);
})`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
