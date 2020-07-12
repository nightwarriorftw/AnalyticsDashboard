import React, { Component } from "react";
import Navbar from "../Navigations/navbar";
import DetailsSection from "./DetailsSection";
import DetailsDonut from "./DetailsDonut";
import DetailsCharts from "./DetailsChart";
import Footer from "./Footer";
import Loader from "react-loader-spinner";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          isLoading: false,
        }),
      3000
    );
  }
  render() {
    const { isLoading } = this.state;
    console.log(isLoading);
    return isLoading === true ? (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          direction: "center",
          alignItems: "center",
        }}
      >
        <Loader type="Grid" color="#00BFFF" height={80} width={80} />
      </div>
    ) : (
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>

        <DetailsSection />
        <DetailsDonut />
        <DetailsCharts />
        <Footer />
      </div>
    );
  }
}
