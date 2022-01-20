import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./Landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="contentStyle">
          <div className="container">
            <div className="row">
              <div className="col-12 mt-xs-4">
                <h1
                  style={{
                    fontSize: "9em",
                    fontWeight: "bold",
                    color: "#1ed760",
                  }}
                >
                  Dinlemek
                  <br />
                  her şeydir
                </h1>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12">
                <p
                  style={{
                    fontSize: "1.1em",
                    color: "#1ed760",
                  }}
                >
                  Milyonlarca şarkı ve podcast. Kredi kartına gerek yok.
                </p>
              </div>
            </div>
            <div className="row mt-5 btnWrapper">
              <div className="col-12">
                <button
                  type="button"
                  className="p-3"
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    backgroundColor: "#1ed760",
                    color: "#2941ab",
                    borderRadius: "30px",
                    width: "210px",
                    border: "none",
                  }}
                >
                  SPOTIFY FREE'Yİ EDİN
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
