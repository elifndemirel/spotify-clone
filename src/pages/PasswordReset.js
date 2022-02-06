import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import NavBarPasswordReset from "../components/NavBarPasswordReset";
import FooterPasswordReset from "../components/FooterPasswordReset";

export default function PasswordReset() {
  const handleOnChange = (value) => {
    console.log("Captcha value:", value);
  };
  return (
    <div>
      <NavBarPasswordReset />
      <Container>
        <Row className="d-flex justify-content-center align-items-center mt-5">
          <Col xs="12" sm="12" md="6" lg="6">
            <h1
              className="d-flex justify-content-center align-items-center"
              style={{ fontWeight: "bold" }}
            >
              Parola Sıfırlama
            </h1>
            <p>
              Kaydolmak için kullandığın <b>Spotify kullanıcı adını</b> veya{" "}
              <b>e-posta adresini</b> gir. Kullanıcı adını ve parolanı
              sıfırlamak için kullanacağın bağlantıyı içeren bir e-posta
              göndereceğiz.
            </p>
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
                <ReCAPTCHA
                  sitekey="6Lc0-14eAAAAAHj_m9GfAWkDHTJHT-OVXkNhseMz"
                  onChange={handleOnChange}
                />
              </FormGroup>
              <Button
                className="p-3 mt-5 mb-2 d-flex mx-auto justify-content-center align-items-center"
                style={{
                  fontSize: "0.9em",
                  fontWeight: "bold",
                  backgroundColor: "#1aa34a",
                  color: "#fff",
                  width: "150px",
                  borderRadius: "30px",
                  border: "none",
                }}
              >
                GÖNDER
              </Button>
              <p className="mb-5 d-flex justify-content-center align-items-center">
                Başka konularda yardım istersen Spotify Destek ile iletişime
                geç.
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
      <FooterPasswordReset />
    </div>
  );
}
