import { generateId } from "../../functions";

type propTypes = {
  children?: React.ReactNode;
};

export const generateHeadingSnippet = ({
  children = "My heading",
  ...props
}: propTypes) => {
  return {
    id: generateId(),
    type: "HEADING",
    props: {
      children,
      ...props,
    },
  };
};
