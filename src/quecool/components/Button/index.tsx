import { safeFunctionParse } from "../../functions";

const Button = ({ children, onClick, ...props }: any) => {
  const handleClick = (e: Event) => {
    const clickFunction = safeFunctionParse(onClick);
    clickFunction(e);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
