import { generateId } from "../../functions";

type propTypes = {
  subItems: [];
};

export const generateStackSnippet = ({
  subItems = [],
  ...props
}: propTypes) => {
  return {
    id: generateId(),
    type: "COLUMN",
    props: {
      ...props,
    },
    subItems,
  };
};
