import RenderLayout from "../../widgets/RenderLayout";
import { widgetMap } from "../../../widgetMap";
import { useActiveCode } from "@codesandbox/sandpack-react";

let workingCode = "";

const Preview = () => {
  const { code } = useActiveCode();

  if (!code) {
    return;
  }

  try {
    JSON.parse(code);

    workingCode = JSON.parse(code);
    // eslint-disable-next-line no-empty
  } catch {}

  return <RenderLayout layout={workingCode} widgetMap={widgetMap} />;
};

export default Preview;
