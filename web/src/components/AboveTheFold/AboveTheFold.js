import React from "react";
import PropTypes from "prop-types";
import { Heading2, Body1 } from "../Typography/Typography";
import Img from "gatsby-image";
import Button from "../Button/Button";
import styles from "./AboveTheFold.module.scss";

const AboveTheFold = ({ title, subtitle, coverImage, cta }) => {
  return (
    <header className={styles.aboveTheFold}>
      <div>
        <Heading2>{title}</Heading2>
        <Body1>{subtitle}</Body1>
        <Button to={cta.url}>{cta.text}</Button>
      </div>
      <div>
        <Img fluid={coverImage.asset.fluid} />
      </div>
    </header>
  );
};

AboveTheFold.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  coverImage: PropTypes.object.isRequired,
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default AboveTheFold;
