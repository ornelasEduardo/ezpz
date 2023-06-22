import "./index.css";
import { widgetMap } from "./widgetMap";
import { config } from "./config";
import StackLayout from "./quecool/components/StackLayout";
import ClusterLayout from "./quecool/components/ClusterLayout";
import Badge from "./quecool/components/Badge";
import EzpzEditor from "./quecool/components/EzpzEditor";
import Heading from "./quecool/components/Heading";

function App() {
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
        <StackLayout alignItems="flex-start" gap="16px">
          <StackLayout alignItems="flex-start">
            <h4>Available widgets</h4>
            <ClusterLayout
              justifyContent="flex-start"
              gap="16px"
              wrap="wrap"
              style={{ maxWidth: "80ch" }}
            >
              {Object.keys(widgetMap).map((widgetType) => (
                <Badge key={widgetType}>{widgetType}</Badge>
              ))}
            </ClusterLayout>
          </StackLayout>

          <div style={{ width: "50vw" }}>
            <EzpzEditor initialValue={JSON.stringify(config, null, 2)} />
          </div>
        </StackLayout>
      </ClusterLayout>
    </>
  );
}

export default App;
