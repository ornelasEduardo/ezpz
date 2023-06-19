import "./App.css";
import RenderLayout from "./quecool/widgets/RenderLayout";
import { widgetMap } from "./widgetMap";
import { config } from "./config";
import StackLayout from "./quecool/components/StackLayout";

function App() {
  return (
    <>
      <h1>🐙 ezpz personalization!</h1>

      <StackLayout alignItems="flex-start">
        <h4>🚧 Rendering from config 🚧</h4>
        <RenderLayout layout={config} widgetMap={widgetMap} />
      </StackLayout>
    </>
  );
}

export default App;
