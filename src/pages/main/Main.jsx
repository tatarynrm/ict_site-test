import React from "react";
import "./Main.scss";
import Hero from "../../sections/hero/Hero";
import AboutUs from "../../sections/about/AboutUs";
import Services from "../../sections/services/Services";
import OurAdvantages from "../../sections/advantages/OurAdvantages";
import Stages from "../../sections/stages/Stages";
import Values from "../../sections/values/Values";
import Cabinet from "../../sections/cabinet/Cabinet";
import OurClients from "../../sections/our-clients/OurClients";
import FreeConsultation from "../../components/free-consultation/FreeConsultation";
import BlogSection from "../../sections/blog/BlogSection";
import Carousel from "../../components/carousel/Carousel";
import { Helmet } from "react-helmet";
import Rating from "../../sections/rating/Rating";
import Testimonials from "../../components/testimonials/Testimonials";
const Main = () => {
  return (
    <div className="main">
            <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>ІСТ-Захід Логістична компанія</title>
        <meta name="description" content='Логістична компанія ІСТ-Захід надає повний спектр послуг з вантажни перевезень.' />


        {/* <meta property="og:title" content={header_menu.find(val => item.link === val.link).title}/>
        <meta property="og:description" content={item.desc}/>
        <meta property="og:image" content="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/8b/4f/cf/8b4fcfc3-5839-e63d-02db-c0865b11cf94/logo_photos_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x630wa.png"/>
        <meta property="og:url" content="http://localhost:3000/adr-cargo"/> */}
      </Helmet>
      {/* <Rating/> */}
      <Hero />
      <AboutUs />
      <Services />
      <OurAdvantages />
      <Stages />
      <Values />
      <Cabinet />
      <OurClients />
      <BlogSection />
      <FreeConsultation background={"black"} />
      <Testimonials/>
      {/* <Carousel/> */}
    </div>
  );
};

export default Main;
