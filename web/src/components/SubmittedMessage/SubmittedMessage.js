import React from "react";
import styles from "./SubmittedMessage.module.scss";
import { Heading2, Body1 } from "../Typography/Typography";
import Button from "../Button/Button";

const SubmittedMessage = ({}) => {
  return (
    <div className={styles.container}>
      <div>
        <Heading2>Thank you!</Heading2>
        <Body1>Here is the code:</Body1>
        <Button to="https://github.com/Umble-tech/dummy-landing-page" secondary>
          Code
        </Button>
      </div>
    </div>
  );
};

export default SubmittedMessage;
