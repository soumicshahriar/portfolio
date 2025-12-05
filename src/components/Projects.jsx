import React, { useState, useEffect, useRef } from "react";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectsInfo = [
  {
    id: 1,
    title: "MovieMaster Pro",
    subtitle: "Featured Project",
    description: `Browse & manage your favorite movies with ease.
Advanced filtering, watchlists & personal collections.
Beautiful Dark/Light theme with smooth UI.`,
    liveLink: "https://movie-master-d67e4.web.app/",
    reversed: false,
  },
  {
    id: 2,
    title: "GameHub - React Gaming Platform",
    subtitle: "Featured Project",
    description: `Browse all games, recommended & trending.
Sorting, filtering & query-based searching.
Smooth Framer Motion animations.`,
    liveLink: "https://game-hub-6788b.web.app/",
    reversed: true,
  },
  {
    id: 3,
    title: "Delivery Management System - Zap-shift",
    subtitle: "Featured Project",
    description: `Complete parcel delivery platform.
Admin, Rider, User dashboards + real-time tracking.
Built with React, Tailwind, Firebase, MongoDB, RQ, RHF.`,
    liveLink: "https://zap-shift-93fef.web.app/",
    reversed: false,
  },
];

const Projects = () => {
  const [scrollDir, setScrollDir] = useState("down");
  const projectCardsRef = useRef([]);
  const sectionRef = useRef(null);

  // Detect scroll direction for bounce arrow
  useEffect(() => {
    let lastScrollTop = window.pageYOffset;

    const handleScroll = () => {
      const st = window.pageYOffset;
      setScrollDir(st > lastScrollTop ? "down" : "up");
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations for project cards
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    projectCardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full mt-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-1 bg-linear-to-b from-purple-600 to-blue-500 rounded-full"
          style={{ top: 0, bottom: 0 }}
        ></div>

        {/* Bounce arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 text-purple-400 text-2xl animate-bounce top-0">
          {scrollDir === "down" ? <FiChevronDown /> : <FiChevronUp />}
        </div>

        {/* Projects */}
        <div className="space-y-24 sm:space-y-32 mt-20">
          {projectsInfo.map((project, projectIndex) => (
            <div
              key={project.id}
              ref={(el) => (projectCardsRef.current[projectIndex] = el)}
              className={`relative flex flex-col items-center gap-6 
              md:gap-12 md:flex-row 
              ${project.reversed ? "md:flex-row-reverse" : ""}`}
            >
              {/* Modern UIverse-inspired Card */}
              <div className="relative w-full md:w-1/2 group">
                <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 via-blue-500 to-indigo-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-700 animate-pulse"></div>
                <div className="relative rounded-2xl p-4 flex justify-center items-center border border-white/20 backdrop-blur-xl bg-linear-to-br from-slate-900/80 via-purple-900/50 to-slate-900/80 min-h-[50px] md:min-h-[100px] shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 transform group-hover:scale-105">
                  <p className="text-white text-xs md:text-2xl font-bold text-center drop-shadow-lg">
                    {project.title}
                  </p>
                </div>
              </div>

              {/* Modern Text Box with enhanced styling */}
              <div className={`w-full sm:w-4/5 md:w-1/2 lg:w-[45%]`}>
                <div className="group relative rounded-2xl border border-white/10 overflow-hidden bg-linear-to-br from-white/5 via-white/3 to-transparent backdrop-blur-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-blue-500/30 group-hover:to-purple-500/20 transition-all duration-500"></div>

                  <div className="relative p-5 sm:p-7 lg:p-8">
                    <p className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-widest drop-shadow-md">
                      {project.subtitle}
                    </p>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-3 drop-shadow-lg">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm sm:text-base mt-4 whitespace-pre-line leading-relaxed">
                      {project.description}
                    </p>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex gap-3 mt-6 items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group/link"
                      >
                        <FiExternalLink className="group-hover/link:translate-x-1 transition-transform" />
                        <span>View Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced Dot on Timeline */}
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-linear-to-br from-purple-500 to-blue-500 border-3 border-white rounded-full shadow-lg shadow-purple-500/50 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
