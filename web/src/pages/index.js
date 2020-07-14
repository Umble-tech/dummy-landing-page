import React from "react";
import { useStaticQuery } from "gatsby";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import AboveTheFold from "../components/AboveTheFold/AboveTheFold";
import LandingPageBodyContainer from "../components/LandingPageBodyContainer/LandingPageBodyContainer";

const IndexPage = () => {
  const { sanityLandingPage } = useStaticQuery(graphql`
    query {
      sanityLandingPage(_id: { regex: "/landingPage/" }) {
        ...LandingPageHeader
        ...LandingPageBlocks
      }
    }
  `);
  const { title, subtitle, cta, coverImage, blocks } = sanityLandingPage;

  return (
    <Layout>
      <SEO title="Home" />
      <AboveTheFold
        title={title}
        subtitle={subtitle}
        coverImage={coverImage}
        cta={cta}
      />
      <LandingPageBodyContainer blocks={blocks} />
    </Layout>
  );
};

export default IndexPage;
