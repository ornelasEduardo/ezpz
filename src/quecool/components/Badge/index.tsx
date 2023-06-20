const Badge = ({ children }: any) => {
  const style = {
    padding: "4px 6px",
    outline: "1px solid #ccc",
    background: "#eee",
    borderRadius: "8px",
    fontSize: "14px",
  };

  return <div style={style}>{children}</div>;
};

export default Badge;
