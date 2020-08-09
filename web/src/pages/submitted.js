import React from "react";
import Layout from "../components/Layout/Layout";
import { Heading2, Body1 } from "../components/Typography/Typography";
import Button from "../components/Button/Button";
import SubmittedMessage from "../components/SubmittedMessage/SubmittedMessage";

const Submitted = () => {
  return (
    <Layout>
      <SubmittedMessage />
    </Layout>
  );
};

export default Submitted;
