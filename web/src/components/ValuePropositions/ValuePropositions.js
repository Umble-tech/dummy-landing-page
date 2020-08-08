import React from "react";
import PropTypes from "prop-types";
import { Heading4, Body1 } from "../Typography/Typography";
import Img from "gatsby-image";
import styles from "./ValuePropositions.module.scss";

const ValuePropositions = ({ valuePropositions }) => {
  if (valuePropositions.length === 0) return null;
  return (
    <section>
      <div
        className={styles.valuePropositions}
        style={{
          gridTemplateColumns: `repeat(${valuePropositions.length}, 1fr)`,
        }}
      >
        {valuePropositions.map(({ title, text, image }) => (
          <div key={title} className={styles.valueProposition}>
            {image && <Img fluid={image.asset.fluid} />}
            <Heading4>{title}</Heading4>
            <Body1>{text}</Body1>
          </div>
        ))}
      </div>
    </section>
  );
};

ValuePropositions.propTypes = {
  valuePropositions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.object,
    })
  ).isRequired,
};

export default ValuePropositions;
