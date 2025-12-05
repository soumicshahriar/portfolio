import React from "react";

const WorkExperience = () => {
  const items = [
    { icon: "layers", title: "CIB on the Mobile" },
    { icon: "bubble_chart", title: "CIB on the Mobile" },
    { icon: "gesture", title: "CIB on the Mobile" },
    { icon: "polyline", title: "CIB on the Mobile" },
  ];

  return (
    <section className="mt-32 w-full flex justify-center px-4">
      <div className="max-w-6xl w-full">
        <h3 className="text-2xl font-bold text-white mb-10">Work Experience</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="experience-card glass-custom p-8 rounded-xl border border-purple-500/10
                         hover:border-purple-400/20 transition-all flex flex-col items-start space-y-4
                         min-h-[220px]"
            >
              <div className="w-12 h-12 bg-purple-900/40 rounded-lg flex items-center justify-center">
                <span className="material-icons-outlined text-purple-400 text-2xl">
                  {item.icon}
                </span>
              </div>

              <h4 className="text-xl font-semibold text-white">{item.title}</h4>

              <p className="text-sm text-gray-400 grow">
                Corporate & Investment Banking on the go.
              </p>

              <a
                className="text-sm font-medium text-white border border-white/20 px-5 py-2
                           rounded-full hover:bg-white/10 transition-colors"
                href="#"
              >
                LEARN MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
