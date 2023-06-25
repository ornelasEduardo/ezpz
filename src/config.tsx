import { generateId, minifyFunctionToString } from "./quecool/functions";

import { generateBadgeSnippet } from "./quecool/components/Badge/snippet";
import { generateButtonSnippet } from "./quecool/components/Button/snippet";

export const config = {
  ROW: {
    id: generateId(),
    type: "ROW",
    props: {
      justifyContent: "flex-start",
    },
    subItems: [
      {
        COLUMN: {
          id: generateId(),
          type: "COLUMN",
          props: {
            alignItems: "stretch",
            justifyContent: "flex-start",
            gap: "12px",
          },
          subItems: [
            {
              ROW: {
                id: generateId(),
                type: "ROW",
                props: {
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  gap: "16px",
                },
                subItems: [
                  {
                    HEADING: {
                      id: generateId(),
                      type: "HEADING",
                      props: {
                        level: 2,
                        children: "🚧 Rendering from config 🚧",
                        style: { textAlign: "left", marginBottom: "0px" },
                      },
                    },
                  },
                  {
                    BADGE: generateBadgeSnippet({ children: "My badge" }),
                  },
                ],
              },
            },
            {
              TEXT: {
                id: generateId(),
                type: "TEXT",
                props: {
                  children: "Pretty cool huh?",
                  style: {
                    textAlign: "left",
                    fontWeight: "bold",
                  },
                },
              },
            },
            {
              ROW: {
                id: generateId(),
                type: "ROW",
                props: {
                  gap: "16px",
                  justifyContent: "space-between",
                },
                subItems: [
                  {
                    INPUT: {
                      id: generateId(),
                      type: "INPUT",
                      props: {
                        placeholder: "Type some text",
                        style: { flexGrow: 1 },
                      },
                    },
                  },
                  {
                    BUTTON: generateButtonSnippet({
                      children: "Log value",
                      onClick: minifyFunctionToString((event: any) => {
                        const parent = event.target.parentNode;
                        const inputElement = parent.querySelector("input");

                        console.log(inputElement.value);
                      }),
                    }),
                  },
                ],
              },
            },
            {
              BUTTON: generateButtonSnippet({
                children: "Column Button",
                onClick: minifyFunctionToString(() =>
                  console.log("You just clicked the column button")
                ),
              }),
            },
          ],
        },
      },
    ],
  },
};
