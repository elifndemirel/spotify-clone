import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";
import SpotifyLogo from "../assets/Spotify_Logo_CMYK_Black.png";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const handleOnChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <div>
      <ReCAPTCHA
        sitekey="6Lc0-14eAAAAAHj_m9GfAWkDHTJHT-OVXkNhseMz"
        size="invisible"
        onChange={handleOnChange}
      />
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
              <img src={SpotifyLogo} style={{ width: "125px" }} />
            </div>
            <h3
              className="d-flex justify-content-center align-items-center"
              style={{ fontWeight: "bold" }}
            >
              Dinlemeye başlamak için ücretsiz kaydol.
            </h3>
            <div className="btnWrapper d-flex justify-content-center align-items-center mt-3">
              <button
                type="button"
                className="p-2"
                style={{
                  fontSize: "0.9em",
                  fontWeight: "bold",
                  backgroundColor: "#1877F2",
                  color: "#fff",
                  borderRadius: "30px",
                  width: "210px",
                  border: "none",
                }}
              >
                Facebook ile kaydol
              </button>
            </div>
            <div className="btnWrapper d-flex justify-content-center align-items-center mt-3 mb-3">
              <button
                type="button"
                className="p-2"
                style={{
                  fontSize: "0.9em",
                  fontWeight: "bold",
                  backgroundColor: "#fff",
                  borderColor: "#535353",
                  borderWidth: "2px",
                  color: "#535353",
                  borderRadius: "30px",
                  width: "210px",
                }}
              >
                <FcGoogle size={25} /> Google ile kaydol
              </button>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center mb-3">
          <Col sm="12" xs="12" md="6" lg="6">
            <div class="hrdivider">
              {" "}
              <hr />{" "}
              <span
                style={{
                  color: "gray",
                  fontSize: "16px",
                  fontWeight: "lighter",
                }}
              >
                veya
              </span>{" "}
            </div>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center mb-5">
          <div className="col-md-7 col-lg-5 col-xl-5">
            <h5 className="d-flex justify-content-center align-items-center">
              E-posta adresinle kaydol
            </h5>
            <Form>
              <FormGroup>
                <Label
                  for="email"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  E-posta adresin nedir?
                </Label>
                <Input
                  id="email"
                  className="formInput"
                  name="email"
                  placeholder="E-posta adresini gir."
                  type="email"
                  required
                  style={{ borderColor: "black", padding: "10px" }}
                />
              </FormGroup>
              <FormGroup>
                <Label
                  for="email"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  E-posta adresini onayla
                </Label>
                <Input
                  id="email"
                  className="formInput"
                  name="email"
                  placeholder="E-posta adresini yeniden gir."
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
                  Parola oluştur
                </Label>
                <Input
                  id="password"
                  className="formInput"
                  name="password"
                  placeholder="Parola oluştur."
                  type="password"
                  required
                  minLength={4}
                  style={{ borderColor: "black", padding: "10px" }}
                />
              </FormGroup>
              <FormGroup>
                <Label
                  for="text"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Sana hangi isimle hitap etmeliyiz?
                </Label>
                <Input
                  id="text"
                  className="formInput"
                  name="text"
                  placeholder="Profil adı gir."
                  type="text"
                  required
                  style={{ borderColor: "black", padding: "10px" }}
                />
              </FormGroup>
              <Label style={{ fontSize: "14px", fontWeight: "bold" }}>
                Doğum tarihin nedir?
              </Label>
              <FormGroup className="col-4">
                <Label
                  for="day"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Gün
                </Label>
                <Input
                  type="text"
                  className="formInput"
                  aria-invalid="true"
                  id="day"
                  inputmode="numeric"
                  maxlength="2"
                  name="day"
                  pattern="((0?[1-9])|([12][0-9])|(3[01]))"
                  placeholder="GG"
                  required
                  style={{ borderColor: "black", padding: "10px" }}
                />
              </FormGroup>
              <FormGroup className="col-4">
                <Label
                  for="month"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Ay
                </Label>
                <Input
                  type="select"
                  id="month"
                  name="month"
                  required=""
                  aria-invalid="true"
                  style={{ borderColor: "black", padding: "10px" }}
                >
                  <option selected="" disabled="" value="">
                    Ay
                  </option>
                  <option value="01">Ocak</option>
                  <option value="02">Şubat</option>
                  <option value="03">Mart</option>
                  <option value="04">Nisan</option>
                  <option value="05">Mayıs</option>
                  <option value="06">Haziran</option>
                  <option value="07">Temmuz</option>
                  <option value="08">Ağustos</option>
                  <option value="09">Eylül</option>
                  <option value="10">Ekim</option>
                  <option value="11">Kasım</option>
                  <option value="12">Aralık</option>
                </Input>
              </FormGroup>
              <FormGroup className="col-4">
                <Label
                  for="year"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Yıl
                </Label>
                <Input
                  type="text"
                  className="formInput"
                  aria-invalid="true"
                  id="year"
                  inputmode="numeric"
                  maxlength="4"
                  name="year"
                  pattern="(19[0-9]{2})|(200)[0-9]"
                  placeholder="YYYY"
                  required
                  style={{ borderColor: "black", padding: "10px" }}
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend style={{ fontSize: "14px", fontWeight: "bold" }}>
                  Cinsiyetin nedir?
                </legend>
                <FormGroup check>
                  <Label check style={{ fontSize: "15px" }}>
                    <input
                      name="radio1"
                      type="radio"
                      style={{ accentColor: "#169b45", marginLeft: "-22px" }}
                    />{" "}
                    Erkek
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check style={{ fontSize: "15px" }}>
                    <input
                      name="radio1"
                      type="radio"
                      style={{ accentColor: "#169b45", marginLeft: "-22px" }}
                    />{" "}
                    Kadın
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check style={{ fontSize: "15px" }}>
                    <input
                      name="radio1"
                      type="radio"
                      style={{ accentColor: "#169b45", marginLeft: "-22px" }}
                    />{" "}
                    Diğer
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Label check style={{ fontSize: "15px" }}>
                  <input
                    type="checkbox"
                    style={{ accentColor: "#169b45", marginLeft: "-22px" }}
                  />{" "}
                  Spotify'ın gönderdiği pazarlama mesajlarını almak istemiyorum
                </Label>
              </FormGroup>
              <FormGroup check>
                {" "}
                <Label check style={{ fontSize: "15px" }}>
                  <input
                    type="checkbox"
                    style={{ accentColor: "#169b45", marginLeft: "-22px" }}
                  />{" "}
                  Kayıt verilerimi pazarlama amaçlarıyla Spotify'ın içerik
                  sağlayıcılarıyla paylaşın. Verilerinin gizlilik politikamızda
                  belirtildiği gibi AEA dışındaki bir ülkeye aktarılabileceğini
                  unutma.
                </Label>
              </FormGroup>
              <FormGroup>
                <ReCAPTCHA
                  sitekey="6Lc0-14eAAAAAHj_m9GfAWkDHTJHT-OVXkNhseMz"
                  onChange={handleOnChange}
                />
              </FormGroup>
              <p style={{ fontSize: "12px" }}>
                Kaydol seçeneğine tıklayarak Spotify'ın Kullanım Hüküm ve
                Koşulları'nı kabul etmiş olursun.
              </p>
              <p style={{ fontSize: "12px" }}>
                Spotify'ın kişisel verilerini nasıl topladığı, kullandığı,
                paylaştığı ve koruduğu hakkında daha fazla bilgi edinmek için
                lütfen Spotify Gizlilik Politikası'nı oku.
              </p>
              <div className="btnWrapper d-flex justify-content-center align-items-center mb-3">
                <button
                  type="button"
                  className="p-3"
                  style={{
                    fontSize: "0.9em",
                    fontWeight: "bold",
                    backgroundColor: "#1ed760",
                    color: "black",
                    borderRadius: "30px",
                    width: "100px",
                    border: "none",
                  }}
                >
                  Kaydol
                </button>
              </div>
              <h6 className="btnWrapper d-flex justify-content-center align-items-center">
                Hesabın var mı? <a href="/login">Oturum aç.</a>
              </h6>
            </Form>
          </div>
        </Row>
      </Container>
    </div>
  );
}
