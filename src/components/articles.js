import React from "react";
import "./articles.css";
import Img1 from "../assets/news/article 1.jpg";
import Img2 from "../assets/news/article 2.jpg";
import Img3 from "../assets/news/article 3.jpg";


function Articles() {
  return (
    <>
      <section id="blog">
        <h3 className="newsh3">News</h3>
        <div className="wrapper__articles">
          <div className="bloghaut"></div>
          <div className="blogcontenu">
            <div className="blogbox">
              <div className="blogimg">
                <img src={Img1} alt="photo article 1" />
              </div>
              <div className="blogtext">
                <span>10-01-2022</span>
                <a href="http://localhost:3000/News" className="blogtitle">
                  L’émergence en France de nouveaux artistes
                </a>
                <p>
                  La popularité des mangas a suscité l’émergence en France de
                  nouveaux artistes qui en imitent le style et qui produisent ce
                  qu’on appelle des « manfras ». Frédéric Boilet, dans son
                  Manifeste de la Nouvelle Manga, propose (...)
                </p>
                <a href="http://localhost:3000/News"> Read More</a>
              </div>
            </div>
          </div>
          <div className="blogcontenu">
            <div className="blogbox">
              <div className="blogimg">
                <img src={Img2} alt="photo article 1" />
              </div>
              <div className="blogtext">
                <span>21-02-2022</span>
                <a href="http://localhost:3000/News" className="blogtitle">
                  Manfra et prépublication : équation impossible ?
                </a>
                <p>
                  Alors que la BD se consomme essentiellement sous la forme de
                  recueil, plusieurs éditeurs de manga français ont tenté de
                  reproduire les magazines de prépublication permettent aux
                  éditeurs japonais de recruter et tester (...)
                </p>
                <a href="http://localhost:3000/News"> Read More</a>
              </div>
            </div>
          </div>
          <div className="blogcontenu">
            <div className="blogbox">
              <div className="blogimg">
                <img src={Img3} alt="photo article 1" />
              </div>
              <div className="blogtext">
                <span>17-04-2022</span>
                <a href="http://localhost:3000/News" className="blogtitle">
                  Le Manfra…C’est plus fort que TOI !
                </a>
                <p>
                  Après l’expansion de l’humanité sur de multiples planètes, une
                  guerre totale pour l’obtention du pouvoir suprême s’est
                  déclarée. Cette lutte s’est révélée sanglante et sans merci à
                  cause de l’utilisation d’une redoutable (...)
                </p>
                <a href="http://localhost:3000/News"> Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Articles;
