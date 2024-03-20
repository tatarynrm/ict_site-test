import React from "react";
import "./AboutUsPage.scss";
import AboutUs from "../../sections/about/AboutUs";

import Values from "../../sections/values/Values";
import OurAdvantages from "../../sections/advantages/OurAdvantages";

const AboutUsPage = () => {
  const data = [
    { data: "20+", title: "Років досвіду" },
    { data: "3000+", title: "Перевезень в місяць" },
    { data: "400+", title: "Задоволених клієнтів" },
    { data: "300k", title: "Перевезень в рік" },
  ];
  return (
    <>
      <div className="about__us-page page">
        <AboutUs />
        <div className="about__us-page-inner container">
          <div className="statistic__panel">
            <div data-aos="zoom-in" className="statistic__panel-inner">
              {data.map((item, idx) => {
                return (
                  <div key={idx} className="service__item">
                    <span className="header__text">{item.data}</span>
                    <span className="title__text">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Values />
      </div>

      <OurAdvantages />
    </>
  );
};

export default AboutUsPage;
