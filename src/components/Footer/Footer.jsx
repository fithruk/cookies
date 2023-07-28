import "./footer.scss";
import Container from "../MuiLib/Container/MainContainer";
import Phone from "../../assets/phone.svg";
import Adress from "../../assets/map-pin.svg";
import Share from "../../assets/share.svg";
import Pinterest from "../../assets/pinterest.svg";
import Facebook from "../../assets/fb.svg";
import Instagram from "../../assets/inst.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <ul className="footer__list">
            <p className="footer__list-title">
              <img className="footer__icon" src={Phone} alt="Phone" /> phone
            </p>
            <li className="footer__list-item">+48 (987) 345 - 6789</li>
          </ul>
          <ul className="footer__list">
            <p className="footer__list-title">
              <img className="footer__icon" src={Adress} alt="Adress" /> Address
            </p>
            <li className="footer__list-item">
              Cracker Inc. <br />
              10 Cloverfield Lane <br /> Berlin IL 10928, Germany
            </li>
          </ul>
          <ul className="footer__list">
            <p className="footer__list-title">
              <img className="footer__icon" src={Share} alt="Share" /> share
            </p>
            <li className="footer__list-item">
              <span className="icon-border">
                <img src={Pinterest} alt="Pinterest" />
              </span>
              pinterest.com
            </li>
            <li className="footer__list-item">
              <span className="icon-border">
                <img src={Facebook} alt="Facebook" />
              </span>
              facebook.com
            </li>
            <li className="footer__list-item">
              <span className="icon-border">
                <img src={Instagram} alt="Instagram" />
              </span>
              instagram.com
            </li>{" "}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
