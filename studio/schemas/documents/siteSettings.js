export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Site name",
    },
    {
      name: "description",
      type: "text",
      title: "Site Description",
    },
    {
      name: "siteLogo",
      description: "SVG is preferred",
      type: "image",
      title: "Logo",
    },
    {
      name: "social",
      type: "array",
      title: "Sociallinks",
      of: [{ type: "social" }],
    },
  ],
};
