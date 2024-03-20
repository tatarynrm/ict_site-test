import React from "react";
import "./Hero.scss";
import Header from "../../components/header/Header";
import heroImg from "../../assets/images/hero.jpg";
import SocialBar from "../../components/social-bar/SocialBar";
import { motion } from "framer-motion";
const Hero = () => {
  const handleClick = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="hero  hero__section container">
      <div className="noise-overlay"></div>

      <div className="hero__inner container">
        <div className="hero__info">
          <h1>ІСТ-ЗАХІД</h1>
          <p data-aos="fade-up" 
          data-aos-once="false"
          data-aos-delay="50"
          data-aos-duration="2000"
          >Ми не шукаємо шляхів - ми їх прокладаємо!</p>
        </div>
        <SocialBar />

        <div className="hero__about">
          <div className="hero__about-left">
            <p>
              Дізнайтесь вартість та термін доставки вантажу відповівши на
              декілька запитань
            </p>
            <a href="#free__consultation-section">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
              >
                ДІЗНАТИСЬ
              </motion.button>
            </a>
          </div>
          <div className="hero__about-right">
            <span>Листайте вниз</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
