import React from "react";
import PropTypes from "prop-types";
import { Body1, Heading2 } from "../Typography/Typography";
import styles from "./RegisterForm.module.scss";

const RegisterForm = ({ title, text, fields }) => {
  return (
    <div className={styles.registerFormContainer}>
      <Heading2 align="center">{title}</Heading2>
      <Body1>{text}</Body1>
      <form name="Register Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Register Form" />
        {fields.map(({ label, type }, index) => {
          const id = `${type}-input-${index}`;
          return (
            <div key={id}>
              <label for={id}>{label}</label>
              <input id={id} type={type} />
            </div>
          );
        })}
      </form>
    </div>
  );
};

RegisterForm.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};

export default RegisterForm;
