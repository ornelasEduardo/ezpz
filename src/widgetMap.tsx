import Button from "./quecool/components/Button";
import ClusterLayout from "./quecool/components/ClusterLayout";
import StackLayout from "./quecool/components/StackLayout";
import Input from "./quecool/components/Input";
import Header from "./quecool/components/Header";
import Text from "./quecool/components/Text";
import Badge from "./quecool/components/Badge";

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

  HEADER: {
    component: Header,
  },

  TEXT: {
    component: Text,
  },

  BADGE: {
    component: Badge,
  },
};
