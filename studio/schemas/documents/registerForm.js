export default {
  name: "registerForm",
  title: "Formpage",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "text",
      type: "text",
      title: "Text",
    },
    {
      name: "fields",
      type: "array",
      of: [{ type: "input" }],
    },
    {
      name: "buttonText",
      type: "string",
      title: "Button text",
    },
    {
      name: "sendInformation",
      type: "string",
      title: "Additional text",
    },
  ],
};
