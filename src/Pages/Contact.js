import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Maria Yasmeen</title>
        <meta name="description" content="Reach out for collaborations or inquiries." />
      </Helmet>

       <div className="about-container ">
           
           {/* Text Section */}
           <motion.div
             className="about-text  justify-center align-items-center "
             initial={{ x: 20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
           >
           <section className="min-h-screen contact-form flex justify-center align-items-center  py-12 px-4" >
        <div className="  rounded-xl shadow-lg p-8 w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Me</h2>
          <form action="contact.php" method="post" id="ajax_contact" className="space-y-4">
            <div>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Your Name"
                required
                className="w-full p-3 m-1 border   rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
                className="w-full p-3  m-1  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 m-1 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="5"
                placeholder="Message"
                required
                className="w-full p-3 m-1 border   rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              id="submit"
              className="w-full   m-1  hover:bg-blue-700   font-semibold py-3 px-4 rounded-md transition duration-300"
            >
              Send Message
            </button>
            <div id="form-messages" className="alert" role="alert"></div>
          </form>
        </div>
      </section>
            </motion.div>
         </div>
   
         {/* CSS Styles */}
         <style>
           {`
             .about-container {
               display: flex;
               flex-direction: column;
                  align-items: center;
                 text-align: center;              
                  min-height: 50vh; 
                gap: 20px;
             }
   
   
         
             @media (max-width: 768px) {
               .about-container {
                 align-items: center;
                 text-align: center;
                 padding: 20px;
               }
   
               .about-text {
                 width: 90%;
               }
             }
           `}
         </style>

    
    </>
  );
}

export default Contact;
