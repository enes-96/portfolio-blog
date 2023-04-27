import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const TITLES = [
  "Front End Developer",
  "Javascript Developer",
  "Website Designer",
];

const HeroHeader = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((titleIndex) => (titleIndex + 1) % TITLES.length);
    }, 3000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrolled(window.scrollY > 200);
  };

  return (
    <section id="about" className="relative ">
      <div
        id="link-icon-wrapper-right"
        className="text-5xl absolute flex gap-6 text-slate-200"
      >
        <BsGithub className="" id="hero-git-logo" />
        <BsLinkedin className="" id="hero-lkin-logo" />
        <svg
          id="link-icon-shape"
          width="320"
          height="30"
          viewBox="0 0 195 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 11C38.6841 3.33354 101.365 -4.68152 193 10.9998"
            stroke="url(#paint0_linear_2489_814)"
            stroke-width="2"
            stroke-linecap="round"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_2489_814"
              x1="193"
              y1="70.14296"
              x2="2"
              y2="7.14296"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.116017"
                stop-color="#0073E5"
                stop-opacity="0"
              ></stop>
              <stop offset="1" stop-color="#0073E5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <a
        href="google.com"
        id="email-link"
        className="absolute text-2xl left-40 "
      >
        seyitoffice@gmail.com
      </a>
      <svg
        id="email-shape"
        width="320"
        height="30"
        viewBox="0 0 195 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 11C38.6841 3.33354 101.365 -4.68152 193 10.9998"
          stroke="url(#paint0_linear_2489_814)"
          stroke-width="2 "
          stroke-linecap="round"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_2489_814"
            x1="193"
            y1="70.14296"
            x2="2"
            y2="7.14296"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.116017"
              stop-color="#0073E5"
              stop-opacity="0"
            ></stop>
            <stop offset="1" stop-color="#0073E5"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className="w-full flex justify-center text-3xl mb-4 font-medium">
        <h2 className="">
          <Typewriter
            options={{
              strings: [TITLES[titleIndex]],
              autoStart: true,
              delay: 50,
              onTypingDone: () => {},
            }}
          />
        </h2>
      </div>
      <h1 className="text-8xl text-center mb-4">ENES EREN</h1>
      <h3 className="text-center mb-8  text-xl text-zinc-500">
        Based in Vienna
      </h3>
      <div className="grid place-items-center mb-6 ">
        <div
          id="img-potrait"
          className={`overflow-hidden  rounded-t-full relative`}
        >
          <img
            src="https://images.unsplash.com/photo-1637140945341-f28ada987326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
            className={`transition-all duration-1000 absolute ${
              scrolled ? " opacity-0" : ""
            }`}
          />
          <img
            src="https://images.unsplash.com/photo-1634848860108-6d8368f5a0b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt=""
            className={`transition-all duration-1000  absolute ${
              scrolled ? "" : "opacity-0"
            }`}
          />
        </div>
      </div>
      <div>
        <h5 className="text-4xl w-3/4 m-auto mb-10 leading-loose">
          At 19 years old, I'm a self-taught front-end developer with a passion
          for Web Development. I approach every project with a desire to learn
          and grow, and I'm always exploring new technologies to enhance my
          skills.
        </h5>
      </div>
    </section>
  );
};

export default HeroHeader;
