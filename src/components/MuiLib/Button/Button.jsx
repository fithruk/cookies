import "./button.scss";

const Button = ({ children, addClass }) => {
  return <button className={`button ${addClass}`}>{children}</button>;
};

export default Button;
