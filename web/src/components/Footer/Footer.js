import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import SocialRow from "../SocialRow/SocialRow";

const Footer = ({ logoSrc, social }) => {
  return (
    <footer className={styles.footer}>
      <img src={logoSrc} />
      <SocialRow socialPlatforms={social} />
    </footer>
  );
};

Footer.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      platform: PropTypes.string.isRequired,
    })
  ),
};

export default Footer;
