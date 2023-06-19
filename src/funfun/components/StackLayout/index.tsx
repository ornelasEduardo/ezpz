const StackLayout = ({ children, alignItems }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: alignItems || "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default StackLayout;
