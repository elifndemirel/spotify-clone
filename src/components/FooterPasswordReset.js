import React, { Component } from "react";
import { BiWorld } from "react-icons/bi";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <footer className="footer pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <ul className="list-unstyled">
                  <li className="list-inline-item">
                    <a href="#" className="me-3 textInfo">
                      Yasal
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="me-3 textInfo">
                      Cookies
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="textInfo">
                      Reklamlar Hakkında{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 pt-2">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="textInfo">
                      <BiWorld /> Türkiye
                    </a>
                  </li>
                  <li>
                    <span className="textSpan">&copy; 2022 Spotify AB </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
