import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { addmessageAPI } from "../services/allapi";

function Contact() {

  const [message, setMessage] = useState({
    name: "", email: "", text: "", phone: ""
  })

  const handlesubmit = async () => {
    const { name, email, text, phone } = message
    console.log(name, email, text, phone);

   try {const result = await addmessageAPI(message)
    console.log(result);
    setMessage({
      name: "",
      email: "",
      phone: "",
      text: ""
    }
    )}
    catch(error){
      console.log(error);
      
      alert("Failed to sent message")
    }
  }
  return (
    <>
      <Header />

      <div className="min-h-screen  py-10 px-4 md:px-10">
        {/* Title */}
        <h1 className="text-center text-3xl font-bold text-[#1E293B] mb-6">
          CONTACT US
        </h1>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 max-w-6xl mx-auto items-center">
          {/* Left Image */}
          <div className="flex justify-center ">
            <img
              src="https://media.istockphoto.com/id/1311955670/vector/overflowing-yellow-garbage-bin-with-household-waste-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=b-R3acl0IbC6CB_2Z_C9pRxKm2tHYll0OwQTwkGaeE4="
              alt="Contact Illustration"
              className="w-80 rounded-xl "
            />
          </div>

          {/* Right Form */}
          <div className="bg-sky-50 shadow-lg rounded-2xl p-8 border-t-4 border-[#06D6A0]">
            <p className="text-center text-xl font-semibold text-slate-700 mb-6">
              Type your Message here
            </p>

            <form>
              <input
                type="text" value={message.name} onChange={(e) => setMessage({ ...message, name: e.target.value })}
                placeholder="Name"
                className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
              />
              <input
                type="text" value={message.phone} onChange={(e) => setMessage({ ...message, phone: e.target.value })}
                placeholder="Phone"
                className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
              />
              <input
                type="email" value={message.email} onChange={(e) => setMessage({ ...message, email: e.target.value })}
                placeholder="E-mail Id"
                className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
              />
              <textarea value={message.text} onChange={(e) => setMessage({ ...message, text: e.target.value })}
                placeholder="Type your Message"
                className="w-full border p-2 rounded mb-4 h-28 focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
              ></textarea>

              <div className="flex justify-center">
                <button onClick={handlesubmit}
                  type="button"
                  className="px-6 py-2 bg-[#06D6A0] text-white rounded-lg font-medium hover:bg-[#059a75] transition-all shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
