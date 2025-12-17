import React from "react";
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'

const OurProjects = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-light text-gray-300 mb-16">
          Our Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

          <div className="relative">
            <img
              src={project1}
              alt="Sample Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-10">
              <h3 className="text-white text-4xl font-semibold mb-4">
                Sample <br /> Project
              </h3>
              <button className="flex items-center gap-3 text-sm tracking-widest text-white border border-white px-6 py-3 w-fit hover:bg-white hover:text-black transition">
                VIEW MORE <span>→</span>
              </button>
            </div>
          </div>

          <img
            src={project2}
            alt="Project"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <img
            src={project3}
            alt="Project"
            className="w-full h-full object-cover"
          />
          <img
            src={project4}
            alt="Project"
            className="w-full h-full object-cover"
          />
          <img
            src={project5}
            alt="Project"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-3 bg-gray-800 text-white text-sm tracking-widest px-8 py-4 hover:bg-gray-700 transition">
            ALL PROJECTS <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurProjects;
