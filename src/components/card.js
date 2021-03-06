import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default class Card extends React.Component {
  state = {
    hasClicked: false,
    hasClickedBuy: false,
    hasClickedBuyNum: 0,
    image: null,
    tableau: [],
    new: this.props.data,
  };

  constructor(props) {
    super(props);
    this.click_Buy = this.click_Buy.bind(this);
    this.click_heart = this.click_heart.bind(this);
    this.Click_Buy_Stockage = this.Click_Buy_Stockage.bind(this);
    console.log(this.state.new.id);
    console.log(this.state.new);
  }

  click_Buy() {
    this.setState((state) => {
      return {
        hasClickedBuyNum: state.hasClickedBuyNum + 1,
      };
    });
  }

  click_heart() {
    this.setState(() => {
      if (this.state.hasClicked === false) {
        return {
          hasClicked: true,
      }} else {
        return {
          hasClicked: false
        }
      }
        
      });
   
  }

  Click_Buy_Stockage() {
    let tab = [];
    let obj = {
      id: this.props.data.id,
      name: this.props.data.title,
      price: this.props.data.price,
      image: this.props.data.images.photos[0],
      count: 1,
    };

    tab.push(obj);
    let init = false;
    if (JSON.parse(localStorage.getItem("Product : ")) !== null) {
      let New_data = JSON.parse(localStorage.getItem("Product : "));
      New_data.map((dataa, index) => {
        let name = JSON.stringify(New_data[index].name);

        if (New_data[index].name == this.props.data.title) {
          init = true;
          New_data[index].count += 1;
        }
      });
      if (init === false) {
        New_data.push(obj);
      }
      localStorage.setItem("Product : ", JSON.stringify(New_data));
    }

    if (JSON.parse(localStorage.getItem("Product : ")) === null) {
      localStorage.setItem("Product : ", JSON.stringify(tab));
    }
  }

  render() {
    let heart = "heart is-active";
    let buy = "bottoom clicked";

    let PriceRaye;
    let Promo = "tag-saleDisable";
    let Stock = "tag-stockDisable";

    if (this.state.hasClicked === false) {
      heart = "heart";
    }

    if (this.state.hasClickedBuyNum % 2 === 0) {
      buy = "bottoom";
    } else if (this.state.hasClickedBuyNum % 2 === 1) {
      buy = "bottoom clicked";
    }
    if (
      parseFloat(this.props.data.price) >
      parseFloat(this.props.data.priceDiscount)
    ) {
      PriceRaye = "PriceRaye";
      Promo = "tag-sale__card";
    }
    if (this.props.data.stock < 5) {
      Stock = "tag-stock";
      console.log("stock", Stock);
    }
    let img = this.props.data.images.thumbs[0];
    console.log(img);
    console.log("RAYAAAAANE");
    if (this.props.data.images.thumbs[0] == undefined) {
      img = this.props.data.images.photos[0];
    }

    return (
      <div className="wrapper__card">
        <div class={Promo}></div>
        <div class={Stock}></div>
        <div className="container_new">
          <div className="top_new">
            <Link
              to={`productPage/${this.state.new.id}`}
              id={this.state.new.id}
            >
              <img className="img" src={img} alt="" />
            </Link>
          </div>

          <div className={buy}>
            <div className="left">
              <Link
                to={`productPage/${this.state.new.id}`}
                id={this.state.new.id}
              >
                <div className="details">
                  <h1>{this.props.data.title}</h1>

                  <div className="allPrice">
                    <p className={PriceRaye}>{this.props.data.price}</p>
                    <p className="priceDiscount__card">
                      {this.props.data.priceDiscount}
                    </p>
                  </div>
                </div>
              </Link>
              <div
                onClick={() => {
                  this.Click_Buy_Stockage();
                  this.click_Buy();
                }}
                className="buy"
              >
                <i className="material-icons">add_shopping_cart</i>
              </div>
            </div>
            <div className="right">
              <div className="done">
                <i className="material-icons">done</i>
              </div>
              <div className="details">
                <p className="Add_to_cart">Ajouter au panier</p>
              </div>
              <div onClick={this.click_Buy} className="remove">
                <i className="material-icons">clear</i>
              </div>
            </div>
          </div>
        </div>
        <div onClick={this.click_heart} className="placement">
          <div className={heart}></div>
        </div>
      </div>
    );
  }
}
