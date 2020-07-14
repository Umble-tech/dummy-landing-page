import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const { sanitySiteSettings } = useStaticQuery(graphql`
    query {
      sanitySiteSettings(_id: { regex: "/siteSettings/" }) {
        ...SiteSettings
      }
    }
  `);
  const { name, siteLogo, social } = sanitySiteSettings;

  return (
    <>
      <Nav siteTitle={name} logoSrc={siteLogo.asset.url} />
      <main className={styles.pageWrapper}>{children}</main>
      <Footer logoSrc={siteLogo.asset.url} social={social} name={name} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
