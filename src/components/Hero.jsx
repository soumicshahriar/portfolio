import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink, FiCode } from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  // Define your profile URLs and Tooltip Text
  const githubUrl = "https://github.com/soumicshahriar";
  const linkedinUrl = "https://www.linkedin.com/in/soumic-shahriar/";

  const containerRef = useRef(null);
  const pRef = useRef(null);
  const h1Ref = useRef(null);
  const cardRef = useRef(null);
  const infoCardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate main card
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate paragraph text
    if (pRef.current) {
      gsap.fromTo(
        pRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }

    // Animate heading text
    if (h1Ref.current) {
      gsap.fromTo(
        h1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.4 }
      );
    }

    // Animate info cards
    infoCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, rotateX: -20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.6 + index * 0.15,
          }
        );
      }
    });
  }, []);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4 sm:px-6 md:px-8 mt-10"
    >
      {/* Animated background globs */}
      <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 md:w-48 md:h-48 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-24 h-24 md:w-36 md:h-36 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Main Glassy Card */}
        <div
          ref={cardRef}
          className="relative rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 backdrop-blur-xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent shadow-2xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 via-transparent to-blue-500/5 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-700"></div>

          {/* Content wrapper */}
          <div className="relative z-10">
            {/* Avatar section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-8">
              <div className="shrink-0">
                <div className="relative">
                  <img
                    alt="Avatar of a person with a laptop"
                    className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-purple-400/30 shadow-xl object-cover"
                    src="https://i.ibb.co.com/bM3PKcVW/img.jpg"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Text section */}
              <div className="flex-1 text-center md:text-left">
                <p
                  ref={pRef}
                  className="text-sm sm:text-base text-gray-400 font-medium tracking-wide uppercase mb-2"
                >
                  Welcome to my portfolio
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3">
                  Hello! I am{" "}
                  <span className="text-transparent bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text font-bold">
                    Soumic Shahriar
                  </span>
                </p>

                <h1
                  ref={h1Ref}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
                >
                  <span className="text-white">A </span>
                  <br />
                  <span className="text-transparent bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text">
                    MERN Stack Developer
                  </span>
                </h1>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                  Passionate about building scalable, efficient, and beautiful
                  web applications. I craft digital experiences using modern
                  technologies and best practices.
                </p>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-8">
              {/* Education Card */}
              <div
                ref={(el) => (infoCardsRef.current[0] = el)}
                className="relative rounded-2xl p-4 sm:p-5 backdrop-blur-md border border-white/10 bg-linear-to-br from-white/5 to-transparent hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 group/card cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-lg group-hover/card:from-purple-500/40 group-hover/card:to-blue-500/40 transition-all">
                    <MdOutlineSchool className="text-purple-400 text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white mb-1">
                      Education
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      Independent University Bangladesh
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      📍 Dhaka • 2020-2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Development Card */}
              <div
                ref={(el) => (infoCardsRef.current[1] = el)}
                className="relative rounded-2xl p-4 sm:p-5 backdrop-blur-md border border-white/10 bg-linear-to-br from-white/5 to-transparent hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 group/card cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-linear-to-br from-blue-500/20 to-indigo-500/20 rounded-lg group-hover/card:from-blue-500/40 group-hover/card:to-indigo-500/40 transition-all">
                    <FiCode className="text-blue-400 text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white mb-1">
                      Expertise
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      MERN-Stack Development
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      React • Node.js • Express.js • MongoDB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links and CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start flex-wrap">
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="group/social relative p-3 rounded-full bg-linear-to-br from-purple-500/20 to-blue-500/20 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/30 transition-all duration-300 hover:scale-110"
                >
                  <FaGithub className="text-white text-lg group-hover/social:text-purple-400 transition-colors" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 text-xs text-white bg-gray-800 rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    GitHub
                  </span>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="group/social relative p-3 rounded-full bg-linear-to-br from-blue-500/20 to-indigo-500/20 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin className="text-white text-lg group-hover/social:text-blue-400 transition-colors" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 text-xs text-white bg-gray-800 rounded-lg opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    LinkedIn
                  </span>
                </a>
              </div>

              {/* CTA Button */}
              <motion.a
                ref={(el) => (infoCardsRef.current[2] = el)}
                href="#projects"
                className="px-6 sm:px-8 py-3 rounded-full font-semibold text-white bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group/btn"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Explore My Work
                <FiExternalLink className="text-lg group-hover/btn:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
