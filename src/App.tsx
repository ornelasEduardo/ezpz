import "./App.css";
import RenderLayout from "./quecool/widgets/RenderLayout";
import { widgetMap } from "./widgetMap";
import { config } from "./config";
import StackLayout from "./quecool/components/StackLayout";
import ClusterLayout from "./quecool/components/ClusterLayout";
import { ChangeEvent, useState } from "react";
import Badge from "./quecool/components/Badge";
import { generateId } from "./quecool/functions";

function App() {
  const [editableConfig, setEditableConfig] = useState({
    id: generateId(),
    layout: config,
  });

  const [layout, setLayout] = useState(config);

  const handleEditableConfigChange = (e: ChangeEvent) => {
    let parsedAsJson: any;

    try {
      const element = e.target as HTMLTextAreaElement;
      const value = element.value;

      parsedAsJson = JSON.parse(value);

      setLayout(parsedAsJson);
    } catch (e) {
      console.warn(e);
    } finally {
      setEditableConfig(() => {
        return { id: generateId(), layout: parsedAsJson };
      });
    }
  };

  const handleKeydown = (event: any) => {
    //turns tab keydown events to tab indents
    if (event.key == "Tab") {
      event.preventDefault();
      const start = event.target.selectionStart;
      const end = event.target.selectionEnd;
      event.target.value =
        event.target.value.substring(0, start) +
        "\t" +
        event.target.value.substring(end);
      event.target.selectionStart = event.target.selectionEnd = start + 1;
    }
  };

  return (
    <>
      <ClusterLayout gap="10vw">
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
          <div>
            <textarea
              onChange={handleEditableConfigChange}
              onKeyDown={handleKeydown}
              value={JSON.stringify(editableConfig.layout, null, 2)}
              style={{
                fontSize: "12px",
                padding: "16px",
                textAlign: "left",
                background: "#f9f9f9",
                borderRadius: "8px",
                height: "50vh",
                width: "80ch",
                overflowY: "scroll",
                resize: "none",
                fontFamily:
                  "Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif",
              }}
            />
          </div>
        </StackLayout>

        <div>
          <StackLayout alignItems="flex-start">
            <RenderLayout
              key={editableConfig.id}
              layout={layout}
              widgetMap={widgetMap}
            />
          </StackLayout>
        </div>
      </ClusterLayout>
    </>
  );
}

export default App;
