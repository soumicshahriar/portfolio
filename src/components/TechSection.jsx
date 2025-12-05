import React, { useEffect, useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiGit,
  SiFigma,
  SiReactquery,
  SiReacthookform,
  SiExpress,
  SiGithub,
} from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const techList = [
  { icon: <SiReact />, label: "React" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <SiGit />, label: "Git" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiFigma />, label: "Figma" },

  // Newly added
  { icon: <SiReactquery />, label: "TanStack Query" },
  { icon: <SiReacthookform />, label: "React Hook Form" },
  { icon: <SiExpress />, label: "Express.js" },
];

const TechSection = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const techContainerRef = useRef(null);
  const techItemsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate paragraph
    if (paragraphRef.current) {
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate tech icons with stagger
    if (techItemsRef.current.length > 0) {
      gsap.fromTo(
        techItemsRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: techContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="tech"
      className="w-full mt-24 md:mt-32 px-4 flex flex-col items-center text-center "
    >
      {/* Glowing Center Orb */}
      <div className="relative mt-10  mb-24 flex justify-center">
        <div className="glow-orb"></div>

        <div className="orbit-ring orbit-1"></div>
        <div className="orbit-ring orbit-2"></div>
        <div className="orbit-ring orbit-3"></div>
      </div>

      <h2
        ref={headingRef}
        className="text-xl md:text-2xl font-medium text-white md:mt-20"
      >
        I'm a{" "}
        <span className="text-blue-400 font-semibold">
          Full‑Stack / MERN‑stack Developer
        </span>{" "}
        passionate about building scalable digital experiences
      </h2>

      <p ref={paragraphRef} className="text-gray-400 text-sm mt-2 max-w-2xl">
        I build full‑stack web applications using MongoDB, Express.js, React,
        and Node.js — supported by Next.js, Tailwind CSS, Firebase, TanStack
        Query, React Hook Form, Git. I enjoy designing intuitive interfaces and
        secure, performant backend systems.
      </p>

      {/* Tech Icons */}
      <div
        ref={techContainerRef}
        className="flex flex-wrap justify-center gap-6 mt-10"
      >
        {techList.map((item, index) => (
          <div
            key={index}
            ref={(el) => (techItemsRef.current[index] = el)}
            className="group relative flex flex-col items-center cursor-pointer"
          >
            {/* Vertical glowing line */}
            <div
              className="w-0.5 h-0 bg-blue-400 opacity-50 rounded-full 
              group-hover:h-10 group-hover:opacity-100 
              transition-all duration-700 ease-out 
              shadow-[0_0_10px_rgba(140,90,250,0.6)]"
            ></div>

            {/* Tooltip */}
            <div
              className="absolute bottom-14 left-1/2 -translate-x-1/2
                opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-110
                transition-all duration-700 ease-out transform
                translate-y-2 group-hover:-translate-y-4
                text-xs text-white px-3 py-1 rounded-md tooltip-glass"
            >
              {item.label}
            </div>

            {/* Icon */}
            <span className="text-3xl text-white mt-2">{item.icon}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSection;
