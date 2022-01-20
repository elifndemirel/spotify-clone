import React, { Component } from "react";
import SpotifyLogo from "../assets/Spotify_Logo_CMYK_White.png";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <footer className="footer pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-12 mb-md-4 pb-md-2">
                <a href="/" className="mt-xs-4">
                  <img src={SpotifyLogo} style={{ width: "130px" }} />
                </a>
              </div>

              <div className="col-lg-2 col-md-4 col-12 mt-4 pt-2">
                <h4 className="textTitle footerHead">ŞİRKET</h4>
                <ul className="list-unstyled footerList mt-4">
                  <li className="pb-2">
                    <a href="#" className="textFoot">
                      Hakkında
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="#" className="textFoot">
                      Kariyer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="textFoot">
                      For the Record
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-4 col-12 mt-4 pt-2">
                <h4 className="textTitle footerHead">TOPLULUKLAR</h4>
                <ul className="list-unstyled footerList mt-4">
                  <li className="pb-2">
                    <a href="#" className="textFoot">
                      Sanatçılar İçin
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="#" className="textFoot">
                      Geliştiriciler
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="#" className="textFoot">
                      Reklam
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="#" className="textFoot">
                      Yatırımcılar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="textFoot">
                      Satıcılar
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-4 col-12 mt-4 pt-2">
                <h4 className="textTitle footerHead">YARARLI BAĞLANTILAR</h4>
                <ul className="list-unstyled footerList mt-4">
                  <li className="pb-2">
                    <a href="#" className="textFoot">
                      Destek
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="#" className="textFoot">
                      Web Çalar
                    </a>
                  </li>
                  <li className="pb-3">
                    <a href="#" className="textFoot">
                      Ücretsiz Mobil Uygulama
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-4 col-12 mt-4">
                <ul className="list-unstyled footerList">
                  <li className="list-inline-item">
                    <a href="#" className="me-3 textFoot">
                      <AiOutlineInstagram size={40} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="me-3 textFoot">
                      <AiOutlineTwitter size={40} />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="textFoot">
                      <ImFacebook size={30} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer pt-md-5 pb-5">
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
                      Gizlilik Merkezi
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="me-3 textInfo">
                      Gizlilik Politikası{" "}
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="me-3 textInfo">
                      Tanımlama Bilgileri{" "}
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
