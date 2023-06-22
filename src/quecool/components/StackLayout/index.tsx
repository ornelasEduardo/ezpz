const StackLayout = ({ children, alignItems, gap, style }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: alignItems || "center",
        justifyContent: "center",
        gap: gap || "0px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default StackLayout;
