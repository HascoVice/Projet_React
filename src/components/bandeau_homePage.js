import React from "react";
import "./bandeau_homePage.css";
import categorie from "../components/menu-filter";
import Card from "../components/card";

class Cardrate extends React.Component {
  state = {
    search: "",
    image: [],
    compenent: true,
    image1: [],
    image2: [],
  };

  constructor(props) {
    super(props);
    this.click_Buy = this.click_Buy.bind(this);
    this.click_heart = this.click_heart.bind(this);
    this.Click_Buy_Stockage = this.Click_Buy_Stockage.bind(this);
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

  searchBar() {
    this.setState(() => {
      return {
        search: this.props.bar,
      };
    });
  }

  componentDidMount() {
    this.fetch();
    this.fetch_deux();
    this.fetch_trois();
  }
  fetch() {
    fetch(
      "https://otakod.es/hetic/ecommerce-api/products?limit=4&rating_min=5&stock_min=6&discount=0"
    )
      .then((response) => response.json())
      .then((dataa) => {
        this.setState(() => {
          return {
            image: dataa.products,
            /*             search: this.props.bar,
            compenent: false, */
          };
        });
      });
    console.log(categorie);
  }
  fetch_deux() {
    fetch(
      "https://otakod.es/hetic/ecommerce-api/products?limit=4&stock_min=1&stock_max=5"
    )
      .then((response) => response.json())
      .then((dataa) => {
        this.setState(() => {
          return {
            image1: dataa.products,
            /*             search: this.props.bar,
            compenent: false, */
          };
        });
      });
    console.log(categorie);
  }
  fetch_trois() {
    fetch(
      "https://otakod.es/hetic/ecommerce-api/products?limit=4&discount=1&stock_min=6"
    )
      .then((response) => response.json())
      .then((dataa) => {
        this.setState(() => {
          return {
            image2: dataa.products,
            /*             search: this.props.bar,
            compenent: false, */
          };
        });
      });
    console.log(categorie);
  }

  render() {
    return (
      <>
        <h2 className="h2">Les Mieux Notés</h2>
        <div className="flex-wrap d-flex justify-content-center p-3 ">
          {this.state.image.map((anime, index) => {
            return (
              <div key={index} className=" d-flex">
                <Card data={anime} />
              </div>
            );
          })}
        </div>
        <h2 className="h2">Les dernieres chances</h2>
        <div className="flex-wrap d-flex justify-content-center p-3 ">
          {this.state.image1.map((anime, index) => {
            return (
              <div key={index} className=" d-flex">
                <Card data={anime} />
              </div>
            );
          })}
        </div>
        <h2 className="h2">Les bons plans</h2>
        <div className="flex-wrap d-flex justify-content-center p-3 ">
          {this.state.image2.map((anime, index) => {
            return (
              <div key={index} className=" d-flex">
                <Card data={anime} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Cardrate;
