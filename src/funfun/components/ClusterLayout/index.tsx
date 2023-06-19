import React from "react";

type ClusterLayoutProps = {
  children: React.JSX.Element;
  alignItems?: string;
  justifyContent?: string;
};

const ClusterLayout = ({
  children,
  alignItems,
  justifyContent,
}: ClusterLayoutProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: alignItems || "center",
        justifyContent: justifyContent || "center",
      }}
    >
      {children}
    </div>
  );
};

export default ClusterLayout;
