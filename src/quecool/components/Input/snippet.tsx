import { generateId } from "../../functions";

type propTypes = {
  placeholder?: string;
  value?: string;
  onChange: () => void;
};

export const generateInputSnippet = ({
  placeholder = "Type here",
  value,
  onChange,
  ...props
}: propTypes) => {
  return {
    id: generateId(),
    type: "INPUT",
    props: {
      placeholder,
      value,
      onChange,
      ...props,
    },
  };
};
