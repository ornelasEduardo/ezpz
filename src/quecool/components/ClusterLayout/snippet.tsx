import { generateId } from "../../functions";

type propTypes = {
  subItems: [];
};

export const generateClusterSnippet = ({
  subItems = [],
  ...props
}: propTypes) => {
  return {
    id: generateId(),
    type: "ROW",
    props: {
      ...props,
    },
    subItems,
  };
};
