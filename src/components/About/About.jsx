import "./about.scss";
import Container from "../MuiLib/Container/MainContainer";
import Cookie from "../../assets/img_cookie.png";
import Typography from "../MuiLib/Typography/Typography";
import Calculator from "../Calculator/Calculator";

const heading = "about cracker";
const parahraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.";

const About = () => {
  return (
    <main className="about">
      <Container>
        <div className="about__inner">
          <div className="about__img">
            <img className="" src={Cookie} alt="Cookie" />
          </div>
          <div className="about__content">
            <Typography tag={"h2"}>{heading}</Typography>
            <Typography tag={"p"} additionalClass={"darcColor"}>
              {parahraph}
            </Typography>
            <span className="about__signature">Cracker</span>
            <div className="about__zone"></div>
          </div>
        </div>
        <Calculator />
      </Container>
    </main>
  );
};

export default About;
