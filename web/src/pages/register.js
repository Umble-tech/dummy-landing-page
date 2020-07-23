import React from "react";
import Layout from "../components/Layout/Layout";
import { useStaticQuery, graphql } from "gatsby";
import { Heading2, Body1 } from "../components/Typography/Typography";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Register = () => {
  const { sanityRegisterForm } = useStaticQuery(graphql`
    query {
      sanityRegisterForm(_id: { regex: "/registerForm/" }) {
        ...RegisterForm
      }
    }
  `);

  const { title, text, fields } = sanityRegisterForm;

  return (
    <Layout>
      <RegisterForm title={title} text={text} fields={fields} />
    </Layout>
  );
};

export default Register;
