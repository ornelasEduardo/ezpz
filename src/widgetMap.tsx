import Button from "./quecool/components/Button";
import { generateButtonSnippet } from "./quecool/components/Button/snippet";

import ClusterLayout from "./quecool/components/ClusterLayout";
import { generateClusterSnippet } from "./quecool/components/ClusterLayout/snippet";

import StackLayout from "./quecool/components/StackLayout";
import { generateStackSnippet } from "./quecool/components/StackLayout/snippet";

import Input from "./quecool/components/Input";
import { generateInputSnippet } from "./quecool/components/Input/snippet";

import Heading from "./quecool/components/Heading";
import { generateHeadingSnippet } from "./quecool/components/Heading/snippet";

import Text from "./quecool/components/Text";
import { generateTextSnippet } from "./quecool/components/Text/snippet";

import Badge from "./quecool/components/Badge";
import { generateBadgeSnippet } from "./quecool/components/Badge/snippet";

type WidgetMap = {
  [key: string]: {
    component: (props: any) => JSX.Element;
    snippetGenerator: (props: any) => object;
  };
};

export const widgetMap: WidgetMap = {
  ROW: {
    component: ClusterLayout,
    snippetGenerator: generateClusterSnippet,
  },

  COLUMN: {
    component: StackLayout,
    snippetGenerator: generateStackSnippet,
  },

  INPUT: {
    component: Input,
    snippetGenerator: generateInputSnippet,
  },

  BUTTON: {
    component: Button,
    snippetGenerator: generateButtonSnippet,
  },

  HEADING: {
    component: Heading,
    snippetGenerator: generateHeadingSnippet,
  },

  TEXT: {
    component: Text,
    snippetGenerator: generateTextSnippet,
  },

  BADGE: {
    component: Badge,
    snippetGenerator: generateBadgeSnippet,
  },
};
