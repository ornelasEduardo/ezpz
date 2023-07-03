import { CSSProperties } from "react";
import { createPortal } from "react-dom";
import ClusterLayout from "../ClusterLayout";
import XMarkIcon from "@heroicons/react/20/solid/XMarkIcon";

type Toast = {
  type?: "success" | "error" | "warning" | "default";
  children: React.ReactNode;
  onCloseRequest?: () => void;
  prependIcon: React.ReactNode;
};

type ToastImplementation = {
  children: React.ReactNode;
};

const toastStyle: CSSProperties = {
  position: "absolute",
  left: "50vw",
  bottom: "5vh",
  padding: "16px",
  borderRadius: "8px",
  outline: "2px solid black",
  boxShadow: "4px 4px 0px 0px black",
  background: "#39375B",
  color: "white",
  width: "fit-content",
  minWidth: "25ch",
};

const SuccessToast = ({ children }: ToastImplementation) => {
  return <div style={{ ...toastStyle }}>{children}</div>;
};
const ErrorToast = ({ children }: ToastImplementation) => {
  return <div style={{ ...toastStyle }}>{children}</div>;
};
const WarningToast = ({ children }: ToastImplementation) => {
  return <div style={{ ...toastStyle }}>{children}</div>;
};
const DefaultToast = ({ children }: ToastImplementation) => {
  return <div style={{ ...toastStyle }}>{children}</div>;
};

const toastMap = {
  success: SuccessToast,
  error: ErrorToast,
  warning: WarningToast,
  default: DefaultToast,
};

const Toast = ({
  type = "default",
  children,
  onCloseRequest,
  prependIcon = <></>,
}: Toast) => {
  const SelectedToast = toastMap[type];

  return createPortal(
    <SelectedToast>
      <ClusterLayout justifyContent="space-between" gap="8px">
        <ClusterLayout
          justifyContent="flex-start"
          gap="8px"
          style={{ color: "white" }}
        >
          {prependIcon}
          {children}
        </ClusterLayout>
        <XMarkIcon
          onClick={onCloseRequest}
          fill="white"
          height="20px"
          width="20px"
        />
      </ClusterLayout>
    </SelectedToast>,
    document.body
  );
};

export default Toast;
