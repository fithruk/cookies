import "./header.scss";
import Menu from "../Menu/Menu";
import Container from "../MuiLib/Container/MainContainer";
import Typography from "../MuiLib/Typography/Typography";
import Button from "../MuiLib/Button/Button";

const qoute =
  "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
const heading = "mostly tastes with freshes";

const Header = () => {
  return (
    <header className="header">
      <Menu />
      <Container>
        <div className="header__inner">
          <div className="header__quote">
            <Typography tag={"p"}>{qoute}</Typography>
            <div className="header__zone"></div>
          </div>
          <div className="header__heading">
            <Typography tag={"h1"}>{heading}</Typography>
            <Button>taste it</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
