export default {
  name: "valuePropositions",
  title: "Value Propositions",
  type: "object",
  fields: [
    {
      name: "valuePropositions",
      title: "Value Propositions",
      type: "array",
      of: [{ type: "valueProposition" }],
    },
  ],
};
