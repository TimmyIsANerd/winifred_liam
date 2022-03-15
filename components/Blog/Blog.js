import React from "react";
import Card from "./Card";
import BlogApi from "./BlogApi";

const Blog = () => {
  return (
    <>
      <section className="Portfolio Blog" id="blog">
        <div className="container top">
          <div className="col-12">
            <div className="heading text-center">
              <h4>VISIT MY BLOG AND SHARE A FEEDBACK</h4>
              <h1>My Blog</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            {BlogApi.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  date={value.date}
                  title_one={value.title_one}
                  title_two={value.title_two}
                  title_three={value.title_three}
                  desc_one={value.desc_one}
                  desc_two={value.desc_two}
                  desc_three={value.desc_three}
                  url={value.url}
                  color={value.color}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
