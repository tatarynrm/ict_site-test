import React from "react";
import "./AboutUs.scss";
import { motion } from "framer-motion";
import aboutUsImg from "../../assets/images/abut-us.jpg";
const AboutUs = () => {
  return (
    <section className="section about__us">
      <div className="about__us-inner container">
        <div className="about__us-top">
          <h3 className="section-title">ПРО НАС</h3>
          <div className="about__us-p">
            <p>
              «ІСТ-Захід» – міжнародна транспортно-експедиторська компанія, яка
              працює на логістичному ринку України з 2000 року і на сьогодні є
              одним з лідерів у цій галузі. Послугами нашої компанії
              користується багато українських та міжнародних виробників. 
            </p>
            <p>
              Наш багатолітній досвід дозволив нам стати важливою частиною
              логістичного світу, наші рішення дозволять задовільнити всі
              потреби в логістиці. Ми рішуче та професійно зустрічаємо кожен
              новий виклик в світі національних та міжнародних  перевезень і з
              гідністю доводимо справу до кінця.
            </p>
          </div>
        </div>
        <div className="about__us-bottom">
          <div className="about__us-bottom-left">
            <h4>
              Звертаючись до нас - будьте впевнені - ми довеземо вантаж в пункт
              призначення
            </h4>
            <p>
              Для термінових і важливих вантажів ми розробили спеціальний сервіс
              – експрес-доставка по Україні впродовж 24 годин!
            </p>
            <a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
              >
                ДІЗНАТИСЬ
              </motion.button>
            </a>
          </div>
          <div className="about__us-bottom-right">
            <img src={aboutUsImg} alt="about_us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
