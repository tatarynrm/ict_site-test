import React from "react";
import "./BlogSection.scss";
import { Link } from "react-router-dom";
import BlogItem from "../../components/blog/BlogItem";
const BlogSection = () => {
  return (
    <section className="blog__section section">
      <div className="blog__section-inner container">
        <div className="blog__section-header">
          <h2 className="section__title">БЛОГ</h2>

          <Link className="blog__button" to={"/blog"}>
            ПЕРЕЙТИ У БЛОГ
          </Link>
        </div>
        <div className="blog__section-items">
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
