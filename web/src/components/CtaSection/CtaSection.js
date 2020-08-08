import React from "react";
import PropTypes from "prop-types";
import styles from "./CtaSection.module.scss";
import { Heading2, Body1 } from "../Typography/Typography";
import Button from "../Button/Button";

const CtaSection = ({ title, subtitle, cta }) => {
  return (
    <section className={styles.ctaSection}>
      <svg
        className={styles.arrowBackground}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 62"
      >
        <path d="M0 0l720 61.004L1440 0v61.004H0V0z" fill="#4A7165" />
      </svg>
      <div>
        <Heading2>{title}</Heading2>
        <br />
        {subtitle && <Body1>{subtitle}</Body1>}
        <Button to={cta.url}>{cta.text}</Button>
      </div>
    </section>
  );
};

CtaSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  cta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CtaSection;
