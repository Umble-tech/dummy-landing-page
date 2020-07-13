export default {
  name: "ctaSection",
  type: "object",
  title: "ctaSection",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "cta",
      type: "cta",
      title: "Cta button",
    },
  ],
};
