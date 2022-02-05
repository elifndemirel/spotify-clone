import React from "react";
import { useNavigate } from "react-router-dom";
import NavBarNotFound from "../components/NavBarNotFound";
import FooterNotFound from "../components/FooterNotFound";
import Record from "../assets/record.png";

const NotFound = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <NavBarNotFound />
      <div
        style={{
          backgroundColor: "#FFCDD2",
        }}
      >
        <div className="container">
          <div
            className="row"
            style={{
              paddingTop: "100px",
              paddingBottom: "150px",
            }}
          >
            <div className="col-md-6 justify-content-center align-self-center">
              <h4 className="mb-3" style={{ fontWeight: "bold" }}>
                Bu sayfa artık yok.
              </h4>
              <h6 className="mb-5">
                Aradığın sayfayı bulamadık. Belki SSS veya Topluluk yardımcı
                olabilir?
              </h6>
              <button
                onClick={navigateToHome}
                className="mb-5"
                type="button"
                style={{
                  border: "none",
                  backgroundColor: "#FFCDD2",
                  fontWeight: "bold",
                  marginLeft: "-6px",
                }}
              >
                GERİ GİT
              </button>
            </div>
            <div className="col-md-6" style={{ position: "relative" }}>
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  height: "auto",
                  position: "relative",
                }}
                src={Record}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <FooterNotFound />
    </div>
  );
};

export default NotFound;
