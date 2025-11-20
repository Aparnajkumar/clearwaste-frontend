import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-sky-50" style={{ backgroundImage: "url('')" }}>

        <h1 className='p-4 text-center font-bold text-2xl text-indigo-900'>About Us </h1>

        <div className="m-5 p-5 text-xl  text-indigo-950 "> <p>
          We believe that solid waste management is not merely a technical challenge—it is a social one. Our work across more than 50 cities and with over 20,000 individuals shows that behavior change and community engagement are critical.

          Our key focus areas include:

          City sanitation planning
          Capacity building and public awareness
          Decentralized wet waste management using composting and other nature-based solutions
          Centralized dry waste aggregation and recovery
          While high-tech systems such as waste-to-energy plants have often failed to meet expectations, decentralized and community-led models have proven effective in the tropical, developing world context. Achieving Zero Waste requires sustained segregation at source and strong citizen participation.


        </p></div>
        <div className=" md:grid grid-cols-3 justify-center items-center gap-4 md:m-10 m-2 font-semibold " >
          <div className="text-center p-3 border-2 border-white bg-indigo-200 shadow-2xl w-95 ">
            <h1 className='font-semibold'>VISION</h1>
            <p>Working as a global enterprise in the world  environment management through sustainable growth</p>
          </div>
          <div className="text-center p-3 border-2 border-white bg-indigo-200 shadow-2xl w-95 h-30">
            <h1 className='font-semibold'>MISSION</h1>
            <p>Starting from every home. To ensure the globe to be clean.</p>
          </div>
          <div className="text-center p-3 border-2 border-white bg-indigo-200 shadow-2xl w-95 h-30">
            <h1 className='font-semibold'>VALUES</h1>
            <p>Customer Satisfaction
              Safety, Health, & Environment
              Social Commitment</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
