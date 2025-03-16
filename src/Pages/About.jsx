import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <Helmet>
        <title>About - Maria Yasmeen</title>
        <meta
          name="description"
          content="Crafting code to bring my ideas to life as a Developer and designer from Islamabad."
        />
      </Helmet>

      <div className="about-container">
        {/* Profile Image with Animated Border */}
        <motion.div
          className="profile-image-wrapper"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="border-effect"
            animate={{
              borderRadius: [
                "50%",
                "40% 60% 50% 50%",
                "60% 40% 50% 50%",
                "50% 40% 90% 70%",
                "80% 40% 50% 40%",
              ],
              scale: [1, 1.05, 1],
              boxShadow: [
                "0px 0px 20px rgba(255, 255, 255, 0.3)",
                "0px 0px 40px rgba(255, 255, 255, 0.5)",
                "0px 0px 20px rgba(255, 255, 255, 0.3)",
              ],
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="./photo.png" alt="Profile" className="profile-img" />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="about-text"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p>
            Frontend Developer from Islamabad, I transform my ideas into code,
            making dynamic, responsive, and interactive web designs. I am
            confident that Web Designing and Development can be more
            different and impactful through observations and experiments.
          </p>
        </motion.div>
      </div>

      {/* CSS Styles */}
      <style>
        {`
          .about-container {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            min-height: 50vh; 
            text-align: right;
            gap: 20px;
          }

          .profile-image-wrapper {
            width: 250px;
            height: 250px;
            margin-right: 50px;
          }

          .border-effect {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 5px solid white;
            padding: 10px;
          }

          .profile-img {
            width: 100%;
            height: 100%;
            border-radius: 80%;
            object-fit: cover;
          }

          .about-text {
            max-width: 600px;
            margin-right: 50px;
          }

          @media (max-width: 768px) {
            .about-container {
              align-items: center;
              text-align: center;
              padding: 20px;
            }

            .profile-image-wrapper,
            .about-text {
              margin-right: 0;
            }

            .profile-image-wrapper {
              width: 200px;
              height: 200px;
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

export default About;
