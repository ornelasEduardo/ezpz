export const config = {
  ROW: {
    id: Math.random(),
    type: "ROW",
    props: {
      justifyContent: "flex-start",
    },
    subItems: [
      {
        COLUMN: {
          id: Math.random(),
          type: "COLUMN",
          props: {
            alignItems: "stretch",
            gap: "16px",
          },
          subItems: [
            {
              ROW: {
                id: Math.random(),
                type: "ROW",
                props: {
                  gap: "16px",
                },
                subItems: [
                  {
                    INPUT: {
                      id: Math.random(),
                      type: "INPUT",
                      props: {
                        placeholder: "Type some text",
                      },
                    },
                  },
                  {
                    BUTTON: {
                      id: Math.random(),
                      type: "BUTTON",
                      props: {
                        children: "Log value",
                        onClick: (e: any) =>
                          console.log(
                            e.target.parentNode.querySelector("input").value
                          ),
                      },
                    },
                  },
                ],
              },
            },
            {
              BUTTON: {
                id: Math.random(),
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
