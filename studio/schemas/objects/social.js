export default {
  name: "social",
  type: "object",
  title: "Social link",
  fields: [
    {
      name: "platform",
      type: "string",
      title: "Social platform",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Instagram", value: "instagram" },
          { title: "LinkedIn", value: "linkedIn" },
          { title: "Twitter", value: "twitter" },
          { title: "Snapchat", value: "snapchat" },
          { title: "YouTube", value: "youtube" },
          { title: "Reddit", value: "reddit" },
        ],
      },
    },
    {
      name: "url",
      type: "string",
      title: "Url",
    },
  ],
};
