import React from "react";

type ClusterLayoutProps = {
  children: React.JSX.Element;
  alignItems?: string;
  justifyContent?: string;
  gap: string;
};

const ClusterLayout = ({
  children,
  alignItems,
  justifyContent,
  gap,
}: ClusterLayoutProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: alignItems || "center",
        justifyContent: justifyContent || "center",
        gap: gap || "0px",
      }}
    >
      {children}
    </div>
  );
};

export default ClusterLayout;
