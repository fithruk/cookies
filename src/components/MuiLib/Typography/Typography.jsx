import "./typography.scss";

const Typography = ({ tag, children, additionalClass, ...rest }) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className="heading" {...rest}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className="sub_heading" {...rest}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className="sub_heading-h3" {...rest}>
          {children}
        </h3>
      );
    case "p":
      return (
        <p className={`paragraph ${additionalClass}`} {...rest}>
          {children}
        </p>
      );
    default:
      break;
  }
  return <div>Typography</div>;
};

export default Typography;
