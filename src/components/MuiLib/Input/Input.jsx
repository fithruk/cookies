import "./input.scss";
import { useDispatch } from "react-redux";
import { setForsedUpdate } from "../../Store/CalcReducer/calcActions";
import { useEffect } from "react";

const InputRange = ({
  name,
  addClass,
  maxValue,
  generalSum,
  value,
  onHandleInput,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (generalSum > maxValue) dispatch(setForsedUpdate({ name }));
  }, [value]);

  return (
    <input
      step={1}
      value={value}
      max={100}
      className={`input ${addClass}`}
      type="range"
      name={name}
      onChange={onHandleInput}
    />
  );
};

export default InputRange;
