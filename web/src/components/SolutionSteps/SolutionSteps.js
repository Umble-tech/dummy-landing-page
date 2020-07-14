import React from "react";
import PropTypes from "prop-types";
import { Body1, Heading2, Subtitle } from "../Typography/Typography";
import styles from "./SolutionSteps.module.scss";

const SolutionSteps = ({ solutionSteps }) => {
  if (solutionSteps.length === 0) return null;
  return (
    <section className={styles.solutionSteps}>
      {solutionSteps.map(({ title, text }, index) => (
        <div className={styles.solutionStep} key={`solution-step-${index}`}>
          <Subtitle>{("0" + (index + 1)).slice(-2)}</Subtitle>
          <Heading2>{title}</Heading2>
          <Body1>{text}</Body1>
        </div>
      ))}
    </section>
  );
};

SolutionSteps.propTypes = {
  solutionSteps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default SolutionSteps;
