import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#F0FDF4] py-10 px-6">
        {/* Title */}
        <h1 className="text-center text-3xl font-bold text-[#1E293B] mb-6">
          About Us
        </h1>

                {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 p-4">
          <div className="bg-white shadow-lg p-6 rounded-xl border-t-4 border-[#06D6A0] hover:scale-105 transition">
            <h2 className="text-xl font-bold text-[#064E3B] mb-2">VISION</h2>
            <p className="text-slate-700">
              To be a global leader in environmental management through
              sustainable growth.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl border-t-4 border-[#06D6A0] hover:scale-105 transition">
            <h2 className="text-xl font-bold text-[#064E3B] mb-2">MISSION</h2>
            <p className="text-slate-700">
              To initiate transformation starting from every home to ensure a
              clean and healthy planet.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl border-t-4 border-[#06D6A0] hover:scale-105 transition">
            <h2 className="text-xl font-bold text-[#064E3B] mb-2">VALUES</h2>
            <p className="text-slate-700">
              Customer Satisfaction <br />
              Safety, Health & Environment <br />
              Social Commitment
            </p>
          </div>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed">
          <p>
            We believe that solid waste management is not merely a technical
            challenge—it is a social one. Our work across more than 50 cities
            and with over 20,000 individuals shows that behavior change and
            community engagement are critical.
          </p>
          <br />
          <p>
            Our key focus areas include:
            <ul className="list-disc ml-5 mt-2">
              <li>City sanitation planning</li>
              <li>Capacity building and public awareness</li>
              <li>Decentralized wet waste management using composting</li>
              <li>Centralized dry waste aggregation and recovery</li>
            </ul>
          </p>
          <br />
          <p>
            While high-tech systems such as waste-to-energy plants often fail to
            meet expectations, decentralized and community-led models have
            proven effective. Achieving Zero Waste requires continuous waste
            segregation at source and active citizen participation.
          </p>
        </div>


      </div>

      <Footer />
    </>
  );
}

export default About;
