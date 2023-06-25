import { generateId } from "../../functions";

type propTypes = {
  children?: React.ReactNode;
};

export const generateBadgeSnippet = ({
  children = "My badge",
  ...props
}: propTypes) => {
  return {
    id: generateId(),
    type: "BADGE",
    props: {
      children,
      ...props,
    },
  };
};
