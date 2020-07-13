import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import styles from "./SocialRow.module.scss";

const SocialRow = ({ socialPlatforms }) => {
  return (
    <div className={styles.socialRow}>
      {socialPlatforms
        .filter((social) => social.url)
        .map((social) => (
          <a
            href={social.url}
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon symbol={social.platform} />
          </a>
        ))}
    </div>
  );
};

export default SocialRow;
