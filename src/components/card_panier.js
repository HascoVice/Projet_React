import React from "react";
import "./card_panier.css";

export default class Panier extends React.Component {
  state = {
    count: this.props.iindex,
    price: null,
    name: this.props.list.name,
    input: "",
    tab: [],
  };

  constructor(props) {
    super(props);
    this.Calc = this.Calc.bind(this);
    this.Moins = this.Moins.bind(this);
    this.Plus = this.Plus.bind(this);
    this.Delete = this.Delete.bind(this);
  }

  componentDidUpdate() {}

  componentDidMount() {
    /*       this.props.Calc(this.state.name)
     */ this.setState(() => {
      return {
        name: this.props.list.name,
      };
    });
  }

  Calc() {
    let price = this.props.list.price;
    console.log(price);
    this.setState(() => {
      return {
        input: price,
      };
    });
    console.log(this.props.list.price);
  }

  Moins() {
    this.setState((state) => {
      return {
        count: state.count - 1,
      };
    });
    this.Calc();
    this.props.CalcMoins(this.state.name);
  }

  Plus() {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
    this.Calc();
    this.props.Calc(this.state.name);
  }

  Delete() {
    this.props.Delete(this.state.name);
    console.log("delete");
  }

  render() {
    return (
      <>
        <hr className="my-4" />
        <div className="row mb-4 d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={this.props.list.image}
              className="img-fluid rounded-3"
              alt="Cotton T-shirt"
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6 className="text-muted">Shirt</h6>
            <h6 className="text-black mb-0">{this.props.list.name}</h6>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button
              type="button"
              onClick={this.Moins}
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <i className="fas fa-minus" />
            </button>
            <input
              id="form1"
              min={0}
              name="quantity"
              Value={this.state.count}
              type="number"
              className="form-control form-control-sm"
            />
            <button
              onClick={this.Plus}
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            >
              <i className="fas fa-plus" />
            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 className="mb-0">{this.props.list.price}</h6>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <a onClick={this.Delete} href="#!" className="text-muted">
              <i className="fas fa-times" />
            </a>
          </div>
        </div>
      </>
    );
  }
}
