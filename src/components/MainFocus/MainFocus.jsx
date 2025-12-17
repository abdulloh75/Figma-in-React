import React from "react";

const MainFocus = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-light text-gray-300 mb-16">
          Main Focus/Mission Statement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          <div className="flex gap-8 items-start">
            <span className="text-8xl font-bold text-[#F2F2F2] leading-none">
              1
            </span>
            <p className="text-black leading-relaxed max-w-56">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat.
            </p>
          </div>

          <div className="flex gap-8 items-start">
            <span className="text-8xl font-bold text-[#F2F2F2] leading-none">
              2
            </span>
            <p className="text-black leading-relaxed max-w-74">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur, lectus et facilisis placerat, magna mauris porttitor
              tortor, a auctor est felis ut nisl.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainFocus;
