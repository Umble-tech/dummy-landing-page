import React from "react";
import PropTypes from "prop-types";
import styles from "./LandingPageBodyContainer.module.scss";
import SolutionSteps from "../SolutionSteps/SolutionSteps";
import ValuePropositions from "../ValuePropositions/ValuePropositions";
import CtaSection from "../CtaSection/CtaSection";

const LandingPageBodyContainer = ({ blocks }) => {
  const blockSerializer = (block) => {
    const blockTypes = {
      solutionSteps: (
        <SolutionSteps solutionSteps={block.solutionSteps || []} />
      ),
      valuePropositions: (
        <ValuePropositions valuePropositions={block.valuePropositions || []} />
      ),
      ctaSection: (
        <CtaSection
          title={block.title}
          subtitle={block.subtitle}
          cta={block.cta}
        />
      ),
    };
    return Object.keys(blockTypes).includes(block._type) ? (
      <div className={styles.block} key={block._key}>
        {blockTypes[block._type]}
      </div>
    ) : null;
  };

  return (
    <div className={styles.landingPageBodyContainer}>
      {blocks.map((block) => blockSerializer(block))}
    </div>
  );
};

LandingPageBodyContainer.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LandingPageBodyContainer;
