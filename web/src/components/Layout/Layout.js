import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const { site, sanitySiteSettings } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      sanitySiteSettings(_id: { regex: "/siteSettings/" }) {
        name
        siteLogo {
          asset {
            url
          }
        }
        social {
          url
          platform
        }
      }
    }
  `);

  const { name, siteLogo, social } = sanitySiteSettings;

  return (
    <>
      <Nav siteTitle={site.siteMetadata.title} logoSrc={siteLogo.asset.url} />
      <main className={styles.pageWrapper}>{children}</main>
      <Footer logoSrc={siteLogo.asset.url} social={social} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
