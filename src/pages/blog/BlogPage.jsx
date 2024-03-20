import React, { useEffect } from "react";
import "./BlogPage.scss";
import { Helmet } from "react-helmet";
import BlogItem from "../../components/blog/BlogItem";
import { useLocation } from "react-router-dom";
const BlogPage = () => {

  return (
    <div className="blog page">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <title>{header_menu.find((val) => item.link === val.link).title}</title>
        <meta name="description" content={item.desc} /> */}

        {/* <meta
          property="og:title"
          content={header_menu.find((val) => item.link === val.link).title}
        />
        <meta property="og:description" content={item.desc} />
        <meta
          property="og:image"
          content="https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/8b/4f/cf/8b4fcfc3-5839-e63d-02db-c0865b11cf94/logo_photos_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x630wa.png"
        />
        <meta property="og:url" content="http://localhost:3000/adr-cargo" /> */}
      </Helmet>
      <div className="blog__inner container">
        <h1 className="page__title">БЛОГ</h1>

        <div className="blog__items">
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
