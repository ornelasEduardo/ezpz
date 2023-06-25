import { generateId } from "../../functions";

type propTypes = {
  children: React.ReactNode;
  onClick: string;
};

export const generateButtonSnippet = ({
  children = "My button",
  ...theRest
}: propTypes) => {
  return {
    id: generateId(),
    type: "BUTTON",
    props: {
      children: children,
      ...theRest,
    },
  };
};
