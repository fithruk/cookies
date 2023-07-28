import "./navigation.scss";
import MainContainer from "../MuiLib/Container/MainContainer";

const Navigation = () => {
  return (
    <div className="navigation">
      <MainContainer>
        {" "}
        <nav className="nav">
          <ol className="nav__list">
            <li className="nav__item active">home</li>
            <li className="nav__item">about us</li>
            <li className="nav__item">contacts us</li>
            <li className="nav__item">checkout</li>
            <li className="nav__item">account</li>
          </ol>
        </nav>
      </MainContainer>
    </div>
  );
};

export default Navigation;
