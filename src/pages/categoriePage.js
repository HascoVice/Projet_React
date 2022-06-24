import React from "react";
import Card from "../components/card";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

class CategoriePage extends React.Component {
  state = {
    search: "",
    image: [],
    compenent: true,
  };

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.searchBar = this.searchBar.bind(this);
  }

  searchBar() {
    this.setState(() => {
      return {
        search: this.props.bar,
      };
    });
  }

  componentDidMount() {}

  componentDidUpdate() {
    /*     console.log(this.props);
    console.log(this.state.search);

    if(this.state.search === ""){
      this.searchBar()
      if(this.state.search !== ""){
        return
      }
    }


    if(this.state.compenent === true){
        this.fetch();
        if(this.state.compenent === false){
          return
        }

    } */

    if (this.state.compenent === true) {
      this.fetch();
    }

    if (this.state.compenent === false) {
      if (this.props.bar !== this.state.search) {
        this.fetch();
      }
      return;
    }
  }

  fetch() {
    fetch(
      "https://otakod.es/hetic/ecommerce-api/products?search=" + this.props.bar
    )
      .then((response) => response.json())
      .then((dataa) => {
        this.setState(() => {
          return {
            image: dataa.products,
            search: this.props.bar,
            compenent: false,
          };
        });
      });
  }

  render() {
    return (
      <div className="flex-wrap d-flex justify-content-center p-5">
        {this.state.image.map((anime, index) => {
          return (
            <div key={index} className=" d-flex">
              <Card func={this.localStorage} data={anime} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CategoriePage;
