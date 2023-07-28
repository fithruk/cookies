import { useState } from "react";
import "./menu.scss";
import Seed from "../../assets/seed.svg";
import Shevron from "../../assets/chevron-down.svg";
import Navigation from "../Navigation/Navigation";
import MainContainer from "../MuiLib/Container/MainContainer";
import Cart from "../Cart/Cart";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onMenuHandler = () => {
    setShowMenu((showMenu) => (showMenu = !showMenu));
  };

  const arrowClasses = showMenu ? "details__arrow-rotated " : "details__arrow";

  const total = 143;
  return (
    <>
      <div className="menu">
        <MainContainer>
          <div className="menu__sup-section">
            <a href="/" className="menu__logo">
              Cracker
            </a>
            <div className="details">
              <span className="details__counter">
                <img src={Seed} alt="icon" />
                <span className="details__view">3</span>
              </span>
              <span className="details__item">total: {total}€</span>
              <span className="details__item" onClick={onMenuHandler}>
                details{" "}
                <img className={arrowClasses} src={Shevron} alt="icon" />
                {showMenu && <Cart />}
              </span>
            </div>
          </div>
        </MainContainer>
      </div>
      <Navigation />
    </>
  );
};

export default Menu;
