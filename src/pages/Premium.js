import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  Badge,
} from "reactstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./Premium.css";

const Premium = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row className="pt-5 pb-5" style={{ backgroundColor: "#1d75de" }}>
          <h1 style={{ fontWeight: "bolder", color: "#fff" }}>
            Premium'u 1 ay boyunca ücretsiz kullan
          </h1>
          <h4 className="mt-5" style={{ color: "#fff" }}>
            Sonra sadece 17,99 TL/ay. İstediğin zaman iptal et.
          </h4>
          <div className="btnWrapper mt-5">
            <button
              type="button"
              onClick={navigateToLogin}
              className="pt-3 pb-3 me-2"
              style={{
                fontSize: "0.9em",
                fontWeight: "bold",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "30px",
                borderColor: "#000",
                borderWidth: "2px",
                width: "250px",
              }}
            >
              KULLANMAYA BAŞLA
            </button>
            <button
              type="button"
              className=" pt-3 pb-3 mt-3"
              style={{
                fontSize: "0.9em",
                fontWeight: "bold",
                backgroundColor: "#1d75de",
                color: "#fff",
                borderRadius: "30px",
                borderColor: "#fff",
                borderWidth: "2px",
                width: "250px",
              }}
            >
              PLANLARI GÖRÜNTÜLE
            </button>
          </div>
          <p
            className="mt-5"
            style={{ fontSize: "12px", fontWeight: "bold", color: "#fff" }}
          >
            Hüküm ve koşullar geçerlidir. Premium'u daha önce denemiş olan
            kullanıcılar 1 aylık ücretsiz tekliften yararlanamaz.
          </p>
        </Row>
      </Container>
      <Container>
        <Row className="pt-5 pb-5">
          <h1
            className="d-flex justify-content-center align-items-center pb-5"
            style={{ fontWeight: "bold" }}
          >
            Neden Premium'a Geçmelisin?
          </h1>
          <Col xs="12" sm="3" md="3" lg="3">
            <img
              src="https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f"
              style={{ width: "150px" }}
            />
            <h5 style={{ fontWeight: "bold" }}>Müzik indir.</h5>
            <h6>İstediğin yerde dinle.</h6>
          </Col>
          <Col xs="12" sm="3" md="3" lg="3">
            <img
              src="https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137"
              style={{ width: "150px" }}
            />
            <h5 style={{ fontWeight: "bold" }}>
              Reklamlarla bölünmeden dinle.
            </h5>
            <h6>Kesintisiz müziğin keyfini çıkar.</h6>
          </Col>
          <Col xs="12" sm="3" md="3" lg="3">
            <img
              src="https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67"
              style={{ width: "150px" }}
            />
            <h5 style={{ fontWeight: "bold" }}>İstediğin şarkıyı çal.</h5>
            <h6>Mobil cihazında bile.</h6>
          </Col>
          <Col xs="12" sm="3" md="3" lg="3">
            <img
              src="https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012"
              style={{ width: "150px" }}
            />
            <h5 style={{ fontWeight: "bold" }}>Sınırsız şarkı atlama hakkı.</h5>
            <h6>Sonraki düğmesine basman yeterli.</h6>
          </Col>
        </Row>
      </Container>
      <Container fluid className="pb-5" style={{ backgroundColor: "#efefef" }}>
        <Row>
          <h1
            className="d-flex justify-content-center align-items-center pb-2 pt-5"
            style={{ fontWeight: "bold" }}
          >
            Premium'unu seç
          </h1>
          <h6 className="d-flex justify-content-center align-items-center pb-5">
            Telefonunda, hoparlöründe ve diğer cihazlarında sınırsız dinle.
          </h6>
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="3"
            className="d-flex align-items-stretch"
          >
            <Card body>
              <CardTitle tag="h5">
                <div>
                  <Badge color="primary">1 ay ücretsiz</Badge>
                  <Badge color="primary">1 defalık ödeme yapılabilir</Badge>
                </div>
              </CardTitle>
              <CardText>
                <h4 style={{ fontWeight: "bold" }}>Bireysel</h4>
                <h6>Teklif döneminden sonra ayda 17,99 TL</h6>
                <h6>1 hesap</h6>
                <hr />
                <ul>
                  <li>Müziklerini reklamsız dinle</li>
                  <li>Her yerde çal, hatta çevrimdışı dinle</li>
                  <li>İstediğin zaman çal</li>
                </ul>
              </CardText>
              <div className="btnWrapper">
                <Button
                  className="mb-2 p-3"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "30px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  1 AY ÜCRETSİZ KULLAN
                </Button>
              </div>
              <a
                href="#"
                className="mt-3"
                style={{
                  color: "#000",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                DİĞER ÖDEME SEÇENEKLERİ
              </a>
              <p className="mt-3" style={{ fontSize: "12px" }}>
                Hüküm ve koşullar geçerlidir. Premium'u daha önce denemiş olan
                kullanıcılar 1 aylık ücretsiz tekliften yararlanamaz.
              </p>
            </Card>
          </Col>
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="3"
            className="d-flex align-items-stretch"
          >
            <Card body>
              <CardTitle tag="h5">
                <div>
                  <Badge color="primary">1 ay ücretsiz</Badge>
                </div>
              </CardTitle>
              <CardText>
                <h4 style={{ fontWeight: "bold" }}>Duo</h4>
                <h6>Teklif döneminden sonra ayda 23,99 TL</h6>
                <h6>2 hesap</h6>
                <hr />
                <ul>
                  <li>
                    Aynı çatı altında yaşayan çiftler için 2 Premium hesabı
                  </li>
                  <li>
                    Duo Mix: İki kişi için bir çalma listesi, ikinizin tadını
                    çıkaracağı müziklerle düzenli olarak güncellenir
                  </li>
                  <li>
                    Kesintisiz müzik dinle, çevrimdışı çal, istediğin zaman çal
                  </li>
                </ul>
              </CardText>
              <div className="btnWrapper">
                <Button
                  className="mb-2 p-3"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "30px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  1 AY ÜCRETSİZ KULLAN
                </Button>
              </div>
              <a
                href="#"
                className="mt-3"
                style={{
                  color: "#000",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                DİĞER ÖDEME SEÇENEKLERİ
              </a>
              <p className="mt-3" style={{ fontSize: "12px" }}>
                Hüküm ve koşullar geçerlidir. Premium'u daha önce denemiş olan
                kullanıcılar 1 aylık ücretsiz tekliften yararlanamaz.
              </p>
            </Card>
          </Col>
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="3"
            className="d-flex align-items-stretch"
          >
            <Card body>
              <CardTitle tag="h5">
                <div>
                  <Badge color="primary">1 ay ücretsiz</Badge>
                </div>
              </CardTitle>
              <CardText>
                <h4 style={{ fontWeight: "bold" }}>Aile</h4>
                <h6>Teklif döneminden sonra ayda 29,99 TL</h6>
                <h6>6 hesap</h6>
                <hr />
                <ul>
                  <li>
                    Aynı çatı altında yaşayan aile üyeleri için 6 ayrı Premium
                    hesabı
                  </li>
                  <li>
                    Aile Mix'i: Ailen için bir çalma listesi, hepinizin tadını
                    çıkaracağı müziklerle düzenli olarak güncellenir
                  </li>
                  <li>Sansürsüz müziği engelle</li>
                  <li>
                    Kesintisiz müzik dinle, çevrimdışı çal, istediğin zaman çal
                  </li>
                </ul>
              </CardText>
              <div className="btnWrapper">
                <Button
                  className="mb-2 p-3"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "30px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  1 AY ÜCRETSİZ KULLAN
                </Button>
              </div>
              <p className="mt-3" style={{ fontSize: "12px" }}>
                Hüküm ve koşullar geçerlidir. Premium'u daha önce denemiş olan
                kullanıcılar 1 aylık ücretsiz tekliften yararlanamaz.
              </p>
            </Card>
          </Col>
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="3"
            className="d-flex align-items-stretch"
          >
            <Card body>
              <CardTitle tag="h5">
                <div>
                  <Badge color="primary">1 ay ücretsiz</Badge>
                </div>
              </CardTitle>
              <CardText>
                <h4 style={{ fontWeight: "bold" }}>Öğrenci</h4>
                <h6>Teklif döneminden sonra ayda 8,99 TL</h6>
                <h6>1 hesap</h6>
                <hr />
                <ul>
                  <li>
                    Yararlanabilecek üniversite öğrencilerine özel indirim
                  </li>
                  <li>Müziklerini reklamsız dinle</li>
                  <li>Her yerde çal, hatta çevrimdışı dinle</li>
                  <li>İstediğin zaman çal</li>
                </ul>
              </CardText>
              <div className="btnWrapper">
                <Button
                  className="mb-2 p-3"
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "30px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  1 AY ÜCRETSİZ KULLAN
                </Button>
              </div>
              <p className="mt-3" style={{ fontSize: "12px" }}>
                Teklif, yalnızca akredite olan yüksek öğrenim kurumlarındaki
                öğrenciler için geçerlidir. Premium'u daha önce denemiş olan
                kullanıcılar 1 aylık ücretsiz tekliften yararlanamaz. Spotify
                Öğrenci İndirimi Teklifi Hüküm ve koşullar geçerlidir.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default Premium;
