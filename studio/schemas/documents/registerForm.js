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
  ],
};
