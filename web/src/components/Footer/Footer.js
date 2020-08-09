import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import SocialRow from "../SocialRow/SocialRow";
import { Subtitle } from "../Typography/Typography";

const Footer = ({ name, logoSrc, social }) => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={logoSrc} alt={`${name} logo`} />
        <SocialRow socialPlatforms={social} />
      </div>
      <Subtitle>Made by Umble</Subtitle>
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
