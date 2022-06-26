import React from "react";
import Card_Panier from "../components/card_panier";
import "./panier.css";

export default class Panier extends React.Component {
  state = {
    local: JSON.parse(localStorage.getItem("Product : ")) || [],
    count: [],
    etat: true,
    Total: 0,
    new_count: 0,
    Promo: null,
  };

  constructor() {
    super();
    this.Calc = this.Calc.bind(this);
    this.CalcMoins = this.CalcMoins.bind(this);

    this.Total_Price = this.Total_Price.bind(this);
    this.Delete = this.Delete.bind(this);
    this.Count = this.Count.bind(this);
    this.Promo = this.Promo.bind(this);
  }
  componentDidUpdate() {}

  componentDidMount() {
    this.Total_Price();
    this.Count();
  }

  Calc(data) {
    let tab = [];

    let count = 0;
    if (JSON.parse(localStorage.getItem("Product : ")) !== null) {
      let New_data = JSON.parse(localStorage.getItem("Product : "));
      New_data.map((dataa, index) => {
        let name = JSON.stringify(New_data[index].name);
        count += dataa.count;
        if (New_data[index].name == data) {
          New_data[index].count += 1;
        }
        tab.push(dataa.count);
      });
      localStorage.setItem("Product : ", JSON.stringify(New_data));
      this.setState(() => {
        return {
          count: tab,
          local: New_data || [],
          new_count: count,
        };
      });
    }

    if (JSON.parse(localStorage.getItem("Product : ")) === null) {
      localStorage.setItem("Product : ", JSON.stringify(tab));
    }
  }

  CalcMoins(data) {
    let tab = [];

    let count = null;

    if (JSON.parse(localStorage.getItem("Product : ")) !== null) {
      let New_data = JSON.parse(localStorage.getItem("Product : "));

      New_data.map((dataa, index) => {
        let name = JSON.stringify(New_data[index].name);
        if (New_data[index].name == data) {
          New_data[index].count -= 1;
          count = dataa.count;
          if (New_data[index].count <= 0) {
            New_data.splice(index, 1);
          }
        }
        tab.push(dataa.count);
      });
      localStorage.setItem("Product : ", JSON.stringify(New_data));
      this.setState(() => {
        return {
          count: tab,
          local: New_data || [],
        };
      });
    }
  }

  Total_Price() {
    let total = 0;
    if (JSON.parse(localStorage.getItem("Product : ")) == null) {
      return;
    }
    JSON.parse(localStorage.getItem("Product : ")).map((count, index) => {
      let Replace = count.price.replace("€", "");
      let Nuumber = Number(Replace);
      total += count.count * Nuumber;
    });
    console.log(total);
    if (this.state.Promo != null && this.state.Promo === "Tatakae") {
      console.log("hi");
      total = total / 1.35;
    }
    return total.toFixed(2);
  }

  Delete(data) {
    let New_data = JSON.parse(localStorage.getItem("Product : "));

    New_data.map((dataa, index) => {
      let name = JSON.stringify(New_data[index].name);
      console.log("data" + data);
      if (dataa.name == data) {
        console.log("condition");
        New_data.splice(index, 1);
      }
    });
    localStorage.setItem("Product : ", JSON.stringify(New_data));
    this.setState(() => {
      return {
        local: New_data || [],
      };
    });
  }

  Count() {
    let count = 0;
    this.state.local.map((data) => {
      count += data.count;
    });
    return count;
  }

  Promo(event) {
    this.setState(() => {
      return {
        Promo: event.target.value,
      };
    });
    this.Total_Price();
    console.log(event.target.value);
  }

  render() {
    return (
      <section
        className="h-100 h-custom bg-white"
        style={{ backgroundColor: "#d2c9ff" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: 15 }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="mb-0 text-muted">
                            {this.Count()} items
                          </h6>
                        </div>
                        <div>
                          {this.state.local.map((data, index) => {
                            return (
                              <div key={index}>
                                <Card_Panier
                                  Delete={this.Delete}
                                  Count_init={this.Count_init}
                                  CalcMoins={this.CalcMoins}
                                  Calc={this.Calc}
                                  iindex={data.count}
                                  list={data}
                                />
                              </div>
                            );
                          })}
                        </div>
                        <div className="pt-5">
                          <h6 className="mb-0">
                            <a href="#!" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2" />
                              Back to shop
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">
                            items {this.state.local.length}
                          </h5>
                        </div>

                        <h5 className="text-uppercase mb-3">Give code</h5>
                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                              onChange={this.Promo}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Examplea2"
                            >
                              Enter your code
                            </label>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>{this.Total_Price()} €</h5>
                        </div>
                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
