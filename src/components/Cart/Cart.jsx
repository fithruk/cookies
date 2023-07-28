import "./cart.scss";
import ing1 from "../../assets/ing_1.png";
import ing2 from "../../assets/ing_2.png";
import ing3 from "../../assets/ing_3.png";
import ing4 from "../../assets/ing_4.png";
import seed from "../../assets/seed_black.svg";

const products = [
  {
    ingr1: "4%",
    ingr2: "15%",
    ingr3: "61%",
    ingr4: "20%",
    weight: "1.50kg",
    subTotal: "81.50€",
  },
  {
    ingr1: "14%",
    ingr2: "19%",
    ingr3: "51%",
    ingr4: "16%",
    weight: "0.50kg",
    subTotal: "28.50€",
  },
  {
    ingr1: "5%",
    ingr2: "14%",
    ingr3: "65%",
    ingr4: "16%",
    weight: "0.66kg",
    subTotal: "33.00€",
  },
];

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>
                <img src={ing1} alt="ingridient" />
              </th>
              <th>
                <img src={ing2} alt="ingridient" />
              </th>
              <th>
                <img src={ing3} alt="ingridient" />
              </th>
              <th>
                <img src={ing4} alt="ingridient" />
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, ind) => (
              <tr key={ind}>
                <td>
                  <img src={seed} alt="seed" />
                </td>
                <td className="cart__ingridient">{product.ingr1}</td>
                <td className="cart__ingridient">{product.ingr2}</td>
                <td className="cart__ingridient">{product.ingr3}</td>
                <td className="cart__ingridient">{product.ingr4}</td>
                <td className="cart__params">{product.weight}</td>
                <td className="cart__params">{product.subTotal}</td>
                <td className="cart__params">
                  <div className="cart__button">x</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
