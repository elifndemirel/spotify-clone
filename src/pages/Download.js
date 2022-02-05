import React, { Component } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "reactstrap";
import DownloadImg from "../assets/download.jpg";
import "./Download.css";

export default class Download extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container fluid>
          <Row
            className="d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "#19e68c",
              paddingTop: "8em",
              paddingBottom: "8em",
            }}
          >
            <img src={DownloadImg} style={{ width: "150px" }} />
            <h1
              className="d-flex justify-content-center align-items-center mt-5"
              style={{ fontWeight: "bolder" }}
            >
              Spotify'ı İndir
            </h1>
            <p className="d-flex justify-content-center align-items-center mb-5 mt-4">
              Cihazında milyonlarca şarkı ve podcast çal.
            </p>
            <div className="btnWrapper d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="p-3"
                style={{
                  fontSize: "0.9em",
                  fontWeight: "bold",
                  backgroundColor: "#fff",
                  width: "80px",
                  color: "#000",
                  borderRadius: "30px",
                  border: "none",
                }}
              >
                İndir
              </button>
            </div>
          </Row>
          <Row
            style={{
              paddingTop: "4em",
              paddingBottom: "4em",
              backgroundColor: "fff",
            }}
          >
            <h3
              className="d-flex justify-content-center align-items-center"
              style={{ fontWeight: "bold" }}
            >
              Müziğini cep telefonuna ve tablete de taşı.
            </h3>
            <p className="d-flex justify-content-center align-items-center">
              Telefonunda veya tabletinde dinlemek ücretsiz, kolay ve
              eğlencelidir.
            </p>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ display: "inline-flex", flexDirection: "row" }}
            >
              <a href="#">
                <img
                  src="https://www-growth.scdn.co/static/badges/apple/tr.png"
                  className="me-4"
                  style={{ height: "40px" }}
                />
              </a>
              <a href="#">
                <img
                  src="https://www-growth.scdn.co/static/badges/google/tr.png"
                  className="me-4"
                  style={{ height: "40px" }}
                />
              </a>
              <a href="#">
                <img
                  src="https://www-growth.scdn.co/static/badges/microsoft-windows/tr.png"
                  style={{ height: "40px" }}
                />
              </a>
            </div>
          </Row>
          <Row
            className="d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "#262626",
              paddingTop: "4em",
              paddingBottom: "4em",
            }}
          >
            <img
              src="https://www-growth.scdn.co/static/download/all-devices.svg"
              style={{ width: "450px" }}
            />
            <h2
              className="d-flex justify-content-center align-items-center mt-4"
              style={{ color: "#fff" }}
            >
              Tek hesapla her yerde dinle.
            </h2>
            <ul
              className="accountList d-flex justify-content-center align-items-center mt-5"
              style={{ color: "#fff", listStyle: "none" }}
            >
              <li className="me-3">CEP TELEFONU</li>
              <li className="me-3">BİLGİSAYAR</li>
              <li className="me-3">TABLET</li>
              <li className="me-3">ARAÇ</li>
              <li className="me-3">PLAYSTATİON®</li>
              <li className="me-3">XBOX</li>
              <li className="me-3">TV</li>
              <li className="me-3">HOPARLÖR</li>
              <li>WEB PLAYER</li>
            </ul>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
