import React from "react";
import about from '../../assets/about.png'
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.png'


const About = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto p-14 container bg-[#FBFBFB]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

          <div className="flex flex-col gap-8">
            <img
              src={about}
              alt="Architecture 1"
              className="w-full object-cover"
            />
            <img
              src={about1}
              alt="Architecture 2"
              className="w-full object-cover"
            />
          </div>

          <div>
            <img
              src={about2}
              alt="Architecture 3"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-6xl font-light text-gray-300 mb-6">
              About
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <button className="inline-flex items-center gap-3 border border-gray-300 px-8 py-4 text-sm tracking-widest text-gray-700 hover:bg-gray-100 transition w-fit">
              READ MORE
              <span className="text-lg">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
