import Button from "./quecool/components/Button";
import ClusterLayout from "./quecool/components/ClusterLayout";
import StackLayout from "./quecool/components/StackLayout";
import Input from "./quecool/components/Input";

export const widgetMap = {
  ROW: {
    component: ClusterLayout,
  },

  COLUMN: {
    component: StackLayout,
  },

  INPUT: {
    component: Input,
  },

  BUTTON: {
    component: Button,
  },
};
