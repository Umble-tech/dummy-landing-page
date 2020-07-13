export default {
  name: "landingPage",
  type: "document",
  title: "Landing Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subtitle",
      type: "text",
      title: "subtitle",
    },
    {
      name: "cta",
      type: "cta",
      title: "CTA Button",
    },
    {
      name: "coverImage",
      type: "image",
      title: "CoverImage",
      options: { hotspot: true },
    },
    {
      name: "blocks",
      type: "array",
      title: "Building Blocks",
      of: [
        { type: "valuePropositions" },
        { type: "solutionSteps" },
        { type: "ctaSection" },
      ],
    },
  ],
};
