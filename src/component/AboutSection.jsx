import React from "react";

export default function AboutSection({ bgImage = "/bg-campus.jpg" }) {
  return (
    <section
      className="relative bg-contain h-[fit] bg-center bg-no-repeat backdrop-blur-3xl text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">

        {/* About Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#d7b56d]">
          About
        </h2>
        <div className="w-16 h-1 bg-[#d7b56d] mx-auto mt-3 mb-10"></div>

        {/* About Text */}
        <p className="max-w-4xl mx-auto text-lg leading-relaxed font-medium">
          NMIMS CDOE is the distance and online education centre of NMIMS University.
          NMIMS CDOE began its ODL & OL journey in 2013 with a state of the art learning
          management system to provide interactive learning on connected platforms 24/7.
        </p>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed font-medium mt-6">
          NMIMS CDOE is changing the dynamics of higher education delivery in India while
          empowering students across India and enabling them to fulfil their dreams and aspirations.
        </p>

        {/* Forte Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-[#d7b56d] mt-16">
          NMIMS CDOE Forte
        </h3>
        <div className="w-16 h-1 bg-[#d7b56d] mx-auto mt-3"></div>

        {/* Forte Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">

          {/* Card 1 */}
          <div className="bg-[#38183A] rounded-sm p-10 text-left shadow-lg flex flex-col justify-between">
            <div className="text-4xl font-bold">1,56,000+</div>
            <div className="text-sm mt-2 font-medium opacity-90">Active Students</div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#D0B06E] text-black rounded-sm p-10 text-left shadow-lg flex flex-col justify-between">
            <div className="text-4xl font-bold">27,000+</div>
            <div className="text-sm mt-2 font-medium opacity-90">Alumni</div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#38183A] rounded-sm p-10 text-left shadow-lg flex flex-col justify-between">
            <div className="text-4xl font-bold">600+</div>
            <div className="text-sm mt-2 font-medium opacity-90">Students from Locations across India</div>
          </div>
        </div>
      </div>
    </section>
  );
}
