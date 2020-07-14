import React from "react";
import PropTypes from "prop-types";
import styles from "./CtaSection.module.scss";
import { Heading2, Body1 } from "../Typography/Typography";
import Button from "../Button/Button";

const CtaSection = ({ title, subtitle, cta }) => {
  return (
    <section className={styles.ctaSection}>
      <Heading2>{title}</Heading2>
      {subtitle && <Body1>{subtitle}</Body1>}
      <Button to={cta.url}>{cta.text}</Button>
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
