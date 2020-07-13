import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import AboveTheFold from "../components/AboveTheFold/AboveTheFold";
import LandingPageBodyContainer from "../components/LandingPageBodyContainer/LandingPageBodyContainer";

const IndexPage = () => {
  const { sanityLandingPage } = useStaticQuery(graphql`
    query {
      sanityLandingPage(_id: { regex: "/landingPage/" }) {
        title
        subtitle
        cta {
          text
          url
        }
        coverImage {
          asset {
            fluid(maxWidth: 2000) {
              ...GatsbySanityImageFluid
            }
          }
        }
        blocks {
          ... on SanitySolutionSteps {
            _key
            _type
            solutionSteps {
              text
              title
            }
          }
          ... on SanityValuePropositions {
            _key
            _type
            valuePropositions {
              title
              text
              image {
                asset {
                  fluid(maxWidth: 400) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
          ... on SanityCtaSection {
            _key
            _type
            cta {
              url
              text
            }
            title
            subtitle
          }
        }
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
