const Badge = ({ children, onClick }: any) => {
  const style = {
    padding: "4px 6px",
    outline: "1px solid #ccc",
    background: "#eee",
    borderRadius: "8px",
    fontSize: "14px",
  };

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div onClick={handleOnClick} style={style}>
      {children}
    </div>
  );
};

export default Badge;
