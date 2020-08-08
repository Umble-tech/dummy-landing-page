import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";
import { cn } from "../../lib/helpers";

const Layout = ({ children, standardPadding }) => {
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
      <main
        className={cn(
          styles.pageWrapper,
          standardPadding ? styles.standardPadding : ""
        )}
      >
        {children}
      </main>
      <Footer logoSrc={siteLogo.asset.url} social={social} name={name} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  standardPadding: PropTypes.bool,
};

export default Layout;
