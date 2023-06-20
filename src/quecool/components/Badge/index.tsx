const Badge = ({ children }: any) => {
  const style = {
    padding: "8px 12px",
    outline: "1px solid #eee",
    background: "#f9f9ff",
    borderRadius: "8px",
  };

  return <div style={style}>{children}</div>;
};

export default Badge;
