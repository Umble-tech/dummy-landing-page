import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";
import { Body2 } from "../Typography/Typography";

const Input = ({ id, type, value, onChange, label, required }) => {
  const inputProps = {
    id,
    value,
    onChange,
    type: type === "textarea" ? null : type,
    required,
    className: styles.input,
  };
  return (
    <>
      <label for={id} className={styles.label}>
        <Body2>
          {label}
          <span>{required ? " *" : ""}</span>
        </Body2>
      </label>
      {type === "textarea" ? (
        <textarea {...inputProps} />
      ) : (
        <input {...inputProps} />
      )}
    </>
  );
};

Input.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "textarea",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ]),
};

export default Input;
