import "./index.css";
import { widgetMap } from "./widgetMap";
import { config } from "./config";
import StackLayout from "./quecool/components/StackLayout";
import ClusterLayout from "./quecool/components/ClusterLayout";
import Tag from "./quecool/components/Tag";
import EzpzEditor from "./quecool/components/EzpzEditor";
import Heading from "./quecool/components/Heading";
import { toSentenceCase } from "./quecool/functions";
import { useRef, useState } from "react";
import Toast from "./quecool/components/Toast";
import { ClipboardIcon } from "@heroicons/react/20/solid";

function App() {
  const [showToast, setShowToast] = useState("");
  const timeoutRef = useRef(0);

  const generateSnippet = (
    widgetType: string,
    snippetGenerator: (props?: any) => object
  ): string => {
    const snippet = snippetGenerator({});

    const configSnippet = {
      [widgetType]: {
        ...snippet,
      },
    };

    return JSON.stringify(configSnippet, null, 2) + ",";
  };

  const handleTagClick = (widgetType: string) => {
    setShowToast(toSentenceCase(widgetType));

    if (timeoutRef) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowToast("");
    }, 2000);
  };

  return (
    <>
      <div style={{ paddingLeft: "24px", paddingRight: "24px" }}>
        <ClusterLayout justifyContent="space-between">
          <Heading level={2}>🐙 ezpz</Heading>
          <a
            href="https://github.com/ornelasEduardo/ezpz"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
        </ClusterLayout>
      </div>

      <ClusterLayout gap="10vw" style={{ height: "80%" }}>
        <ClusterLayout alignItems="flex-start" gap="16px">
          <StackLayout
            alignItems="flex-start"
            justifyContent="flex-start"
            gap="16px"
            wrap="wrap"
          >
            {Object.keys(widgetMap).map((widgetType) => (
              <Tag
                copyable={generateSnippet(
                  widgetType,
                  widgetMap[widgetType].snippetGenerator
                )}
                onClick={() => handleTagClick(widgetType)}
                key={widgetType}
              >
                {toSentenceCase(widgetType)}
              </Tag>
            ))}
          </StackLayout>

          <div style={{ width: "50vw" }}>
            <EzpzEditor initialValue={JSON.stringify(config, null, 2)} />
          </div>
        </ClusterLayout>
      </ClusterLayout>

      {showToast !== "" && (
        <Toast
          onCloseRequest={() => setShowToast("")}
          prependIcon={
            <ClipboardIcon height="20px" width="20px" fill="white" />
          }
        >
          Successfully copied {showToast}
        </Toast>
      )}
    </>
  );
}

export default App;
