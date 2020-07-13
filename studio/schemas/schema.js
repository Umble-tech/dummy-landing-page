// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import siteSettings from "./documents/siteSettings";
import landingPage from "./documents/landingPage";
import cta from "./objects/cta";
import social from "./objects/social";
import valueProposition from "./objects/valueProposition";
import solution from "./objects/solution";
import valuePropositions from "./objects/blocks/valuePropositions";
import solutionSteps from "./objects/blocks/solutionSteps";
import ctaSection from "./objects/blocks/ctaSection";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  types: schemaTypes.concat([
    // Documents
    siteSettings,
    landingPage,
    // Blocks
    valuePropositions,
    solutionSteps,
    ctaSection,
    // Objects
    cta,
    social,
    valueProposition,
    solution,
  ]),
});
