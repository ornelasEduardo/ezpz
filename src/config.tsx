import { generateId } from "./quecool/functions";

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
              HEADER: {
                id: generateId(),
                type: "HEADER",
                props: {
                  children: "🐙 ezpz huh!",
                  style: { textAlign: "left", marginBottom: "0px" },
                },
              },
            },
            {
              TEXT: {
                id: generateId(),
                type: "TEXT",
                props: {
                  children: "🚧 Rendering from config 🚧",
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
                    BUTTON: {
                      id: generateId(),
                      type: "BUTTON",
                      props: {
                        children: "Log value",
                        onClick: ((e: any) =>
                          console.log(
                            e.target.parentNode.querySelector("input").value
                          )).toString(),
                      },
                    },
                  },
                ],
              },
            },
            {
              BUTTON: {
                id: generateId(),
                type: "BUTTON",
                props: {
                  children: "Column Button",
                  onClick: () =>
                    console.log("You just clicked the column button"),
                },
              },
            },
          ],
        },
      },
    ],
  },
};
