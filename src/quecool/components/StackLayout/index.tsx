const StackLayout = ({ children, alignItems, gap }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: alignItems || "center",
        justifyContent: "center",
        gap: gap || "0px",
      }}
    >
      {children}
    </div>
  );
};

export default StackLayout;
