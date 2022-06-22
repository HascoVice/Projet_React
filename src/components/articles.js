import React from "react";
import "./articles.css";

function Article() {
  return (
    <div className="blogbox">
      <div className="blogimg">
        <img src="https://placewaifu.com/image/200" alt="phto article" />
      </div>
      <div className="blogtext">
        <span>08 juin/Web Design</span>
        <a href="#" className="blogtitle">
          Je suis pas beau mais gentil Je suis pas beau mais gentil heh?
        </a>
        <p>
          Sa ressemble a du html mais c'est n'est pas du html Sa ressemble a du
          html mais c'est n'est pas du html
        </p>
        <a href="#"> Read More</a>
      </div>
    </div>
  );
}

function Articles() {
  return (
    <>
      <section id="blog">
        <div className="bloghaut">
          <h3>News</h3>
        </div>
        <div className="blogcontenu">
          {Article()}
          {Article()}
          {Article()}
        </div>
      </section>
    </>
  );
}

export default Articles;
