export default {
  name: "input",
  title: "Input",
  type: "object",
  fields: [
    {
      name: "label",
      type: "string",
      title: "",
    },
    {
      name: "type",
      title: "Input Type",
      type: "string",
      options: {
        list: [
          { title: "text", value: "text" },
          { title: "textarea", value: "textarea" },
          { title: "email", value: "email" },
          { title: "number", value: "number" },
        ],
      },
    },
    {
      name: "required",
      type: "boolean",
      title: "Required",
    },
  ],
};
