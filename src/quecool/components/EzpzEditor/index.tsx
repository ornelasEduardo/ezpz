import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
} from "@codesandbox/sandpack-react";
import { dracula } from "@codesandbox/sandpack-themes";
import Preview from "./Preview";
import ClusterLayout from "../ClusterLayout";
import StackLayout from "../StackLayout";
import { json } from "@codemirror/lang-json";

type EzpzEditor = {
  initialValue: string;
};

const EzpzEditor = ({ initialValue }: EzpzEditor) => {
  return (
    <SandpackProvider
      files={{
        "config.json": {
          code: initialValue,
          active: true,
        },
      }}
      theme={dracula}
    >
      <ClusterLayout justifyContent="space-between">
        <SandpackLayout style={{ flexGrow: 1, maxWidth: "48%" }}>
          <SandpackCodeEditor
            showLineNumbers
            showInlineErrors
            additionalLanguages={[
              {
                name: "json",
                extensions: ["json"],
                language: json(),
              },
            ]}
            style={{ height: "80ch" }}
          />
        </SandpackLayout>

        <StackLayout
          style={{
            alignSelf: "stretch",
            padding: "72px",
            outline: "1px solid #ccc",
            borderRadius: "8px",
            width: "50%",
          }}
        >
          <Preview />
        </StackLayout>
      </ClusterLayout>
    </SandpackProvider>
  );
};

export default EzpzEditor;
