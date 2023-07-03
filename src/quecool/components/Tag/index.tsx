import { ClipboardIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import ClusterLayout from "../ClusterLayout";
import Text from "../Text";

type propTypes = {
  copyable: boolean | string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Tag = ({ copyable, children, onClick }: propTypes) => {
  const [hovering, setHovering] = useState(false);

  const style = {
    background: hovering ? "#eee" : "#f9f9ff",
    outline: "1px solid #eee",
    borderRadius: "8px",
    padding: "8px 12px",
    fontSize: "13px",
    cursor: copyable ? "copy" : undefined,
  };

  const handleOnClick = () => {
    if (copyable) {
      if (typeof copyable === "string") {
        navigator.clipboard.writeText(copyable);
      } else {
        navigator.clipboard.writeText(children as string);
      }
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      onClick={handleOnClick}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      style={style}
    >
      <ClusterLayout justifyContent="flex-start" gap="8px">
        <Text style={{ margin: 0 }}>{children}</Text>
        {copyable && (
          <ClipboardIcon
            height="16px"
            width="16px"
            style={{ fill: hovering ? "#2e2e2e" : "#ccc" }}
          />
        )}
      </ClusterLayout>
    </div>
  );
};

export default Tag;
