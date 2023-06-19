const Input = ({ ...props }) => {
  const style = {
    padding: "0.6em 1.2em",
    borderRadius: "8px",
    outline: "1px solid #eee",
    background: "#f9f9f9",
    height: "1.2em",
    textAlign: "start",
    borderStyle: "none",
  };

  return <input {...props} style={{ ...style, ...props.style }} />;
};

export default Input;
