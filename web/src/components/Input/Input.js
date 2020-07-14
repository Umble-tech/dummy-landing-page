import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, value, onChange }) => {
  return type === "textarea" ? <textarea /> : <input />;
};

Input.propTypes = {
  type: PropTypes.oneOf([
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
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
