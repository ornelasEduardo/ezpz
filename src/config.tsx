export const config = {
  ROW: {
    id: Math.random(),
    type: "ROW",
    props: {
      justifyContent: "flex-start",
    },
    subItems: [
      {
        INPUT: {
          id: Math.random(),
          type: "INPUT",
          props: {
            placeholder: "test",
          },
        },
      },
    ],
  },
};
