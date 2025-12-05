import React, { useEffect, useRef } from "react";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const emailRef = useRef(null);
  const linksRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    if (headingRef.current) {
      timeline.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0
      );
    }

    if (descriptionRef.current) {
      timeline.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.2
      );
    }

    if (emailRef.current) {
      timeline.fromTo(
        emailRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out" },
        0.4
      );
    }

    if (linksRef.current) {
      timeline.fromTo(
        linksRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.6
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section
      ref={containerRef}
      id="contact"
      className="mt-16 sm:mt-24 md:mt-32 mx-auto text-center w-full  p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden group"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 via-blue-600/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-500"></div>
      {/* Backdrop blur */}
      <div className="absolute inset-0 backdrop-blur-sm rounded-2xl"></div>
      {/* Animated glow orbs - responsive sizes */}
      <div className="absolute -top-20 -right-20 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-700"></div>
      <div className="absolute -bottom-20 -left-20 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-700"></div>{" "}
      {/* Content wrapper */}
      <div className="relative z-10">
        <h3
          ref={headingRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 sm:mb-6 drop-shadow-lg"
        >
          Get in Touch
        </h3>
        <p
          ref={descriptionRef}
          className="mt-2 text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          I’m a Full-Stack MERN Developer passionate about building scalable and
          efficient web applications. I’m open to freelance projects,
          collaborative opportunities, or full-time roles. Let’s connect to
          discuss how I can contribute to your project or team.
        </p>
        <div
          ref={emailRef}
          className="mt-6 sm:mt-8 inline-block px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-linear-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href="mailto:soumicshahriar603@gmail.com"
            className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-transparent bg-linear-to-r from-purple-300 to-blue-300 bg-clip-text hover:from-purple-200 hover:to-blue-200 transition-all block truncate"
          >
            📧 soumicshahriar603@gmail.com
          </a>
        </div>{" "}
        {/* Social Links and Contact */}
        <div
          ref={linksRef}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-8 flex-wrap"
        >
          <a
            href="https://github.com/soumicshahriar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 text-gray-300 hover:text-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:scale-105 font-medium text-xs sm:text-sm w-full sm:w-auto"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/soumic-shahriar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-blue-400/50 text-gray-300 hover:text-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105 font-medium text-xs sm:text-sm w-full sm:w-auto"
          >
            LinkedIn
          </a>

          <div className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-green-400/50 text-gray-300 hover:text-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 font-medium text-xs sm:text-sm w-full sm:w-auto">
            <FaPhone className="text-base sm:text-lg" />
            <span className="truncate">01704442185</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
