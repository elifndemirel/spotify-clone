import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";
import SpotifyLogo from "../assets/Spotify_Logo_CMYK_Black.png";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

export default class Login extends Component {
  handleOnChange(value) {
    console.log("Captcha value:", value);
  }
  render() {
    return (
      <div>
        <ReCAPTCHA
          sitekey="6Lc0-14eAAAAAHj_m9GfAWkDHTJHT-OVXkNhseMz"
          size="invisible"
          onChange={this.handleOnChange}
        />
        <Container>
          <Row className="mt-3 mb-3">
            <Col
              xs="12"
              className="d-flex justify-content-center align-items-center"
            >
              <img src={SpotifyLogo} style={{ width: "180px" }} />
            </Col>
          </Row>
          <hr />
          <Row className="mt-5">
            <Col
              xs="12"
              className="d-flex justify-content-center align-items-center"
            >
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                Devam etmek için Spotify'da oturum aç.
              </p>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col
              xs="12"
              className="d-flex justify-content-center align-items-center"
            >
              <button
                className="p-2"
                style={{
                  backgroundColor: "#3b5998",
                  color: "#f8f8f8",
                  borderColor: "gray",
                  borderWidth: "1px",
                  borderRadius: "25px",
                  width: "450px",
                  fontWeight: "bold",
                }}
              >
                <AiFillFacebook className="mb-1" /> FACEBOOK İLE DEVAM ET
              </button>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col
              xs="12"
              className="d-flex justify-content-center align-items-center"
            >
              <button
                className="p-2"
                style={{
                  backgroundColor: "#000000",
                  color: "#f8f8f8",
                  borderColor: "gray",
                  borderWidth: "1px",
                  borderRadius: "25px",
                  width: "450px",
                  fontWeight: "bold",
                }}
              >
                <AiFillApple className="mb-1" /> APPLE İLE DEVAM ET
              </button>
            </Col>
          </Row>
          <Row>
            <Col
              xs="12"
              className="d-flex justify-content-center align-items-center"
            >
              <button
                className="p-2"
                style={{
                  backgroundColor: "#fff",
                  color: "#6a6a6a",
                  borderColor: "gray",
                  borderWidth: "1px",
                  borderRadius: "25px",
                  width: "450px",
                  fontWeight: "bold",
                }}
              >
                <FcGoogle className="mb-1" /> GOOGLE İLE DEVAM ET
              </button>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm="12" xs="12" md="6" lg="6">
              <div class="hrdivider">
                {" "}
                <hr /> <span>VEYA</span>{" "}
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <div className="col-md-7 col-lg-5 col-xl-5">
              <Form>
                <FormGroup>
                  <Label
                    for="email"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    E-posta adresi veya kullanıcı adı
                  </Label>
                  <Input
                    id="email"
                    className="formInput"
                    name="email"
                    placeholder="E-posta adresi veya kullanıcı adı"
                    type="email"
                    required
                    style={{ borderColor: "black", padding: "10px" }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label
                    for="password"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Parola
                  </Label>
                  <Input
                    id="password"
                    className="formInput"
                    name="password"
                    placeholder="Parola"
                    type="password"
                    required
                    minLength={4}
                    style={{ borderColor: "black", padding: "10px" }}
                  />
                </FormGroup>
                <div className="mb-3">
                  <a href="/password-reset" style={{ color: "black" }}>
                    Parolanı mı unuttun?
                  </a>
                </div>
                <div style={{ float: "left", marginLeft: "-22px" }}>
                  <Form>
                    <FormGroup check inline>
                      <input
                        type="checkbox"
                        className="me-2"
                        style={{ accentColor: "#169b45" }}
                      />
                      <Label check style={{ fontSize: "14px" }}>
                        Beni hatırla
                      </Label>
                    </FormGroup>
                  </Form>
                </div>
                <div className="btnWrapper d-flex justify-content-end align-items-end">
                  <button
                    type="button"
                    className="p-2"
                    style={{
                      fontSize: "0.9em",
                      fontWeight: "bold",
                      backgroundColor: "#1ed760",
                      color: "black",
                      borderRadius: "30px",
                      width: "150px",
                      border: "none",
                    }}
                  >
                    OTURUM AÇ
                  </button>
                </div>
              </Form>
            </div>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm="12" xs="12" md="6" lg="6">
              <hr />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col
              xs="12"
              className="d-flex justify-content-center align-items-center"
            >
              <h5 style={{ fontWeight: "bold" }}>Hesabın yok mu?</h5>
            </Col>
          </Row>
          <Row className="mb-2 mt-3">
            <Col
              xs="12"
              className="d-flex justify-content-center align-items-center"
            >
              <button
                className="p-2"
                style={{
                  backgroundColor: "#fff",
                  color: "#6a6a6a",
                  borderColor: "gray",
                  borderWidth: "1px",
                  borderRadius: "25px",
                  width: "450px",
                  fontWeight: "bold",
                }}
              >
                SPOTİFY İÇİN KAYDOL
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
