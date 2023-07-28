import "./select.scss";
import { useState } from "react";
import Shevron from "../../../assets/chevron-up.svg";

const options = [
  { value: "small pack", label: "small pack " },
  { value: "medium pack", label: "medium pack" },
  { value: "large pack", label: "large pack" },
];

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [choosenValue, setChoosenValue] = useState(null);

  const arrowClasses = isOpen
    ? "select__button-arrow select-active"
    : "select__button-arrow";

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    setChoosenValue(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="select" onClick={handleSelectClick}>
      <div className="select__header">
        <button className="select__button">
          {choosenValue ? choosenValue : "choose your pack".toUpperCase()}{" "}
          <img src={Shevron} alt="arrow" className={arrowClasses} />
        </button>
      </div>
      <div className="select__body">
        {isOpen && (
          <ol className="select__options">
            {options.map((option) => (
              <li
                key={option.value}
                className="select__option"
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default Select;
