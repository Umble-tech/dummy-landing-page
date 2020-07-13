import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import Icon from "../Icon";
import iconlib from "../Icon/iconlib";
import { Link } from "gatsby";

const Button = ({ children, type, disabled, icon, name, value, to }) => {
  return to ? (
    <Link to={to} className={styles.button}>
      <span>{children}</span>
      <Icon symbol={icon} />
    </Link>
  ) : (
    <button type={type} className={styles.button} disabled={disabled}>
      <span>{children}</span>
      <Icon symbol={icon} />
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  name: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(iconlib)),
};

export default Button;
