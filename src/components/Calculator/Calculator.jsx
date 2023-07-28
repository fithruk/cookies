import "./calculator.scss";

import { useSelector, useDispatch } from "react-redux";
import { calculateNewValues } from "../Store/CalcReducer/calcActions";
import Typography from "../MuiLib/Typography/Typography";
import Button from "../MuiLib/Button/Button";
import Select from "../MuiLib/Select/Select";
import Container from "../MuiLib/Container/MainContainer";
import InputRange from "../MuiLib/Input/Input";
import img1 from "../../assets/img_1.png";
import img2 from "../../assets/img_2.png";
import img3 from "../../assets/img_3.png";
import img4 from "../../assets/img_4.png";
import img5 from "../../assets/img_5.png";

const count = 143;

const Calculator = () => {
  const { first, second, third, fourth, maxValue, generalSum } = useSelector(
    (store) => store.calculator
  );
  const dispatch = useDispatch();

  const onHandleInput = (e) => {
    const { name, value } = e.target;
    dispatch(calculateNewValues(name, value));
  };

  return (
    <div className="calculator">
      <Container>
        <Typography tag={"h2"}>cracker constructor</Typography>
        <Typography tag={"h3"}>Current Value: {count}€</Typography>
        <div className="calc__table">
          <div className="calc__item">
            <img src={img1} alt="icon" />
          </div>
          <div className="calc__item">
            <InputRange
              addClass={"green"}
              name={first.name}
              value={first.value}
              maxValue={maxValue}
              generalSum={generalSum}
              onHandleInput={onHandleInput}
            />
          </div>
          <div className="calc__item">{first.value}%</div>
          <div className="calc__item">
            <img src={img2} alt="icon" />
          </div>
          <div className="calc__item">
            <InputRange
              addClass={"darkGreen"}
              name={second.name}
              value={second.value}
              maxValue={maxValue}
              generalSum={generalSum}
              onHandleInput={onHandleInput}
            />
          </div>
          <div className="calc__item">{second.value}%</div>
          <div className="calc__item">
            <img src={img3} alt="icon" />
          </div>
          <div className="calc__item">
            <InputRange
              addClass={"gold"}
              name={third.name}
              value={third.value}
              maxValue={maxValue}
              generalSum={generalSum}
              onHandleInput={onHandleInput}
            />
          </div>
          <div className="calc__item">{third.value}%</div>
          <div className="calc__item">
            <img src={img4} alt="icon" />
          </div>
          <div className="calc__item">
            <InputRange
              addClass={"grey"}
              name={fourth.name}
              value={fourth.value}
              maxValue={maxValue}
              generalSum={generalSum}
              onHandleInput={onHandleInput}
            />
          </div>
          <div className="calc__item">{fourth.value}%</div>
        </div>
        <div className="result">
          <div className="result__item">
            <img src={img5} alt="icon" />
          </div>
          <div className="resultc__item">
            <Select />
          </div>
          <div className="result__item">
            <Button addClass={"rounded"}>add to card +</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Calculator;
