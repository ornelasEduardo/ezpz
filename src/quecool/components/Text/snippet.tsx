import { generateId } from "../../functions";

type propTypes = {
  children?: React.ReactNode;
};

export const generateTextSnippet = ({
  children = "My text",
  ...props
}: propTypes) => {
  return {
    id: generateId(),
    type: "TEXT",
    props: {
      children,
      ...props,
    },
  };
};
