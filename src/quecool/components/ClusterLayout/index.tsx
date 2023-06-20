import React from "react";

type ClusterLayoutProps = {
  children: React.ReactNode;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  style?: object;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
};

const ClusterLayout = ({
  children,
  alignItems,
  justifyContent,
  gap,
  wrap = "nowrap",
  style,
}: ClusterLayoutProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: alignItems || "center",
        justifyContent: justifyContent || "center",
        gap: gap || "0px",
        flexWrap: wrap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ClusterLayout;
