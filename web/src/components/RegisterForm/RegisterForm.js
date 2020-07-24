import React from "react";
import PropTypes from "prop-types";
import { Body1, Heading2, Body2, Caption } from "../Typography/Typography";
import styles from "./RegisterForm.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

const RegisterForm = ({ title, text, fields, buttonText, sendInformation }) => {
  return (
    <div className={styles.registerFormContainer}>
      <Heading2 align="center">{title}</Heading2>
      <Body1>{text}</Body1>
      <form
        name="Register Form"
        method="POST"
        data-netlify="true"
        action="/submitted"
      >
        <input type="hidden" name="form-name" value="Register Form" />
        {fields.map(({ label, type, required }, index) => {
          const id = `${type}-input-${index}`;
          return (
            <Input
              id={id}
              type={type}
              label={label}
              key={id}
              required={required}
            />
          );
        })}
        <Button primary type="submit">
          {buttonText}
        </Button>
        <Body2 align="center">{sendInformation}</Body2>
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
