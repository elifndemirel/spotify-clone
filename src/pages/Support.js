import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Support.css";
import { Container, Row, Col, Input } from "reactstrap";

export default class Support extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container fluid className="contentBg">
          <Row className="d-flex justify-content-center align-items-center pt-5">
            <Col xs="12" sm="12" md="6" lg="6">
              <h1
                className="d-flex justify-content-center align-items-center"
                style={{ fontWeight: "bold", color: "#fff" }}
              >
                Sana nasıl yardımcı olabiliriz?
              </h1>
              <Input className="mt-5" type="search" placeholder="Arama" />
            </Col>
          </Row>
          <Row className="justify-content-center pb-5 pt-5">
            <div className="col-lg-2 col-md-4 col-12 mt-4 pt-2">
              <p style={{ color: "#d9d9d9", fontSize: "14px" }}>
                KULLANILABİLİR PLANLAR
              </p>
              <ul className="list-unstyled mt-4">
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      textDecoration: "none",
                    }}
                  >
                    Aile planı başlat veya plana katıl
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-12 mt-4 pt-2">
              <p style={{ color: "#d9d9d9", fontSize: "14px" }}>OTURUM AÇMA</p>
              <ul className="list-unstyled mt-4">
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      textDecoration: "none",
                    }}
                  >
                    Oturum açma bilgilerini hatırlamıyorum
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-12 mt-4 pt-2">
              <p style={{ color: "#d9d9d9", fontSize: "14px" }}>OTURUM AÇMA</p>
              <ul className="list-unstyled mt-4">
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      textDecoration: "none",
                    }}
                  >
                    Parolayı sıfırlayamıyorum
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-12 mt-4 pt-2">
              <p style={{ color: "#d9d9d9", fontSize: "14px" }}>GÜVENLİK</p>
              <ul className="list-unstyled mt-4">
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#fff",
                      fontSize: "18px",
                      textDecoration: "none",
                    }}
                  >
                    Bu Spotify e-postası gerçek mi?
                  </a>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
        <Container fluid style={{ backgroundColor: "#dedede" }}>
          <Row className="justify-content-center">
            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <h4 style={{ color: "#000" }}>Hesap Yardimi</h4>
              <ul className="list-unstyled mt-4">
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Oturum açma
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Profil yardımı
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Hesap ayarları yardımı
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Güvenlik
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <h4 style={{ color: "#000" }}>Ödeme yardimi</h4>
              <ul className="list-unstyled mt-4">
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Ödemeleri yönetme
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Ödeme yöntemleri
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Ödeme alma yardımı
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <h4 style={{ color: "#000" }}>Uygulama yardimi</h4>
              <ul className="list-unstyled mt-4">
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Kullanılabilir planlar
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Plan ayarları yardımı
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Aile için Premium ve Kids
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Öğrenci için Premium
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Premium Duo
                  </a>
                </li>
              </ul>
            </div>
          </Row>
          <Row className="justify-content-center">
            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <h4 style={{ color: "#000" }}>Uygulama yardimi</h4>
              <ul className="list-unstyled mt-4">
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Başlarken
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Uygulama ayarları
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Sorun giderme
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Çalma Listeleri
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Özellikler
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Sosyal medya özellikleri
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Sesli asistanlar
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <h4 style={{ color: "#000" }}>Cihaz yardimi</h4>
              <ul className="list-unstyled mt-4">
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Hoparlörler
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Akıllı saatler
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    TV'ler
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Oyunlar
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Arabalar
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
              <h4 style={{ color: "#000" }}>Veri ve gizlilik yardimi</h4>
              <ul className="list-unstyled mt-4">
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Dinleme gizliliği
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    style={{
                      color: "#117a37",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Veri ve gizlilik bilgileri
                  </a>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
        <Container>
          <Row className="d-flex justify-content-center align-items-center pt-5 pb-5">
            <Col xs="12" sm="12" md="6" lg="6">
              <h1
                style={{ fontWeight: "bold", color: "#000" }}
                className="d-flex justify-content-center align-items-center"
              >
                Topluluğu Ziyaret Et
              </h1>
              <p
                style={{ fontSize: "18px" }}
                className="d-flex justify-content-center align-items-center mt-5"
              >
                Soruların mı var? Dünya çapında uzman hayranlardan oluşan
                Topluluğumuzda sorularının yanıtlarını bul!
              </p>
              <div className="btnWrapper d-flex justify-content-center align-items-center mt-5">
                <button
                  type="button"
                  className="p-3"
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    backgroundColor: "#1ed760",
                    color: "#000",
                    borderRadius: "30px",
                    width: "150px",
                    border: "none",
                  }}
                >
                  Yanıtları bul
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
