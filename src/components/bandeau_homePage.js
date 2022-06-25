import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./bandeau_homePage.css";
import { data } from "autoprefixer";

class HomePageCard extends React.Component {
  state = {
    hasClicked: false,
    hasClickedBuy: false,
    hasClickedBuyNum: 0,
    image: null,
    tableau: [],
  };

  constructor(props) {
    super(props);
    this.click_Buy = this.click_Buy.bind(this);
    this.click_heart = this.click_heart.bind(this);
    this.Click_Buy_Stockage = this.Click_Buy_Stockage.bind(this);
    console.log(props.hey)
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
      return {
        hasClicked: true,
      };
    });
  }
  Click_Buy_Stockage() {
    let tab = [];
    console.log(tab);
    let obj = {
      id: this.props.data.id,
      name: this.props.data.title,
      price: this.props.data.price,
      image: this.props.data.images.photos[0],
      count: 1,
    };

    tab.push(obj);

    if (JSON.parse(localStorage.getItem("Product : ")) !== null) {
      let New_data = JSON.parse(localStorage.getItem("Product : "));
      New_data.push(obj);
      localStorage.setItem("Product : ", JSON.stringify(New_data));
      console.log(New_data);
    }

    if (JSON.parse(localStorage.getItem("Product : ")) === null) {
      localStorage.setItem("Product : ", JSON.stringify(tab));
    }
  }

  render() {
    let heart = "heart is-active";
    let buy = "bottoom clicked";
    // let PriceRaye;
    if (this.state.hasClicked === false) {
      heart = "heart";
    }

    if (this.state.hasClickedBuyNum % 2 === 0) {
      buy = "bottoom";
    } else if (this.state.hasClickedBuyNum % 2 === 1) {
      buy = "bottoom clicked";
    }
    // if (this.props.data.price > this.props.data.priceDiscount) {
    //   PriceRaye = "PriceRaye";
    // }

    return (
      <>
        <div className="wrapper__card">
          <div className="container_new">
            <div className="top_new">
              {" "}
              <Link to={"/productPage"}>
                <img
                  className="img"
                  src={"this.props.data.images.thumbs[0]"}
                  alt=""
                />{" "}
              </Link>
            </div>
            <div className={buy}>
              <div className="left">
                <Link to={"/productPage"}>
                  <div className="details">
                    <h1>{/* this.props.hey.title */}</h1>
                    {/* <div className={allPrice}>
                      <p className={PriceRaye}>{this.props.data.price}</p>
                      <p className={priceDiscount}>
                        {"this.props.data.priceDiscount"}
                      </p>
                    </div>  */}
                  </div>
                </Link>
                <div
                  onClick={() => {
                    this.click_Buy();
                    this.Click_Buy_Stockage();
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
                  <h1>Chair</h1>
                  <p>Added to your cart</p>
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
      </>
    );
  }
}

class Cards extends React.Component {

  state={
    toto: null
  }

  constructor(){
    super()
    this.fetch = this.fetch.bind(this)
  }

  componentDidMount(){
    this.fetch()

  }

  fetch(){
    fetch('https://otakod.es/hetic/ecommerce-api/products?rating_min=5')
        .then((response) => response.json())
        .then((dataa) => {
          console.log(dataa)
            this.setState(() => {
                return{
                    toto : dataa.products

                }
                
            })
            console.log(this.state.toto)
        })
        
}

  render(){
    if(this.state.toto == null){
      return
    }
      return (
    <>
      {" "}
      <h2 className="bandeau__title">Les meilleurs ventes</h2>
      <div className="bandeau_cards">
        {
          this.state.toto.map((data,index) => {
              if(index >= 4){
                return
              }
            return (
              <>
              <HomePageCard hey={data} />
              </>
            )
          })
        }
        
      </div>
    </>
  );
}
  }


function BandeauHomePageCard() {
  return (
    <div className="bandeau_cards">
      <HomePageCard />
      <HomePageCard />
      <HomePageCard />
      <HomePageCard />
    </div>
  );
}

function BandeauHomePageCards() {
  return (
    <>
      {" "}
      <div className="bandeau_cards">
        <h2 className="bandeau__title">Les nouveautés</h2>
        <BandeauHomePageCard />
        <h2 className="bandeau__title">Les meilleurs ventes</h2>
        <BandeauHomePageCard />
        <h2 className="bandeau__title">Les mieux notés</h2>
        <BandeauHomePageCard />
      </div>
    </>
  );
}

export default BandeauHomePageCards;
