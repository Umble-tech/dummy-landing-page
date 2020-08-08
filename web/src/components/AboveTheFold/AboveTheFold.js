import React from "react";
import PropTypes from "prop-types";
import { Heading2, Body1, Heading1 } from "../Typography/Typography";
import Img from "gatsby-image";
import Button from "../Button/Button";
import styles from "./AboveTheFold.module.scss";
import fuzzyFrontEndLeft from "../../assets/fuzzyFrontEndLeft.svg";
import fuzzyFrontEndRight from "../../assets/fuzzyFrontEndRight.svg";

const AboveTheFold = ({ title, subtitle, coverImage, cta }) => {
  return (
    <header className={styles.aboveTheFold}>
      <div className={styles.left}>
        <div>
          <Heading1>{title}</Heading1>
          <Body1>{subtitle}</Body1>
          <Button to={cta.url}>{cta.text}</Button>
        </div>
        <img src={fuzzyFrontEndLeft} />
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1014 242"
          preserveAspectRatio="none"
        >
          <path d="M0 0h1014L658.5 56.5 0 242V0z" fill="#608475" />
        </svg>
      </div>
      <div className={styles.right}>
        <img src={fuzzyFrontEndRight} />
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
