import React from "react";
import ReactDOM from "react-dom/client";
import "./bandeau_homePage.css";

function Card() {
  return (
    <>
      <div className="wrapper__card">
        <div className="container">
          <div className="top" />
          <div className="bottom">
            <div className="left">
              <div className="details">
                <h1>Chair</h1>
              </div>
              <div className="buy">
                <i className="material-icons">add_shopping_cart</i>
              </div>
            </div>
            <div className="right">
              <div className="done">
                <i className="material-icons">done</i>
              </div>
              <div className="details">
                <h1>Chair</h1>
                <p>Added to your cart</p>
              </div>
              <div className="remove"></div>
            </div>
          </div>
        </div>
        <div className="inside">
          <div className="icon">
            <i className="material-icons">info_outline</i>
          </div>
          <div className="contents">
            <table>
              <tbody>
                <tr>
                  <th>Width</th>
                  <th>Height</th>
                </tr>
                <tr>
                  <td>3000mm</td>
                  <td>4000mm</td>
                </tr>
                <tr>
                  <th>Something</th>
                  <th>Something</th>
                </tr>
                <tr>
                  <td>200mm</td>
                  <td>200mm</td>
                </tr>
                <tr>
                  <th>Something</th>
                  <th>Something</th>
                </tr>
                <tr>
                  <td>200mm</td>
                  <td>200mm</td>
                </tr>
                <tr>
                  <th>Something</th>
                  <th>Something</th>
                </tr>
                <tr>
                  <td>200mm</td>
                  <td>200mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

function Cards() {
  return (
    <>
      {" "}
      <h2 className="bandeau__title">Les nouveautés</h2>
      <div className="bandeau_cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Cards;
