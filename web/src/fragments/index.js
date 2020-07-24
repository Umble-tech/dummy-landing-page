import { graphql } from "gatsby";

export const LandingPageBlocks = graphql`
  fragment LandingPageBlocks on SanityLandingPage {
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
`;

export const LandingPageHeader = graphql`
  fragment LandingPageHeader on SanityLandingPage {
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
  }
`;

export const SiteSettings = graphql`
  fragment SiteSettings on SanitySiteSettings {
    name
    description
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
`;

export const RegisterForm = graphql`
  fragment RegisterForm on SanityRegisterForm {
    _id
    text
    title
    fields: _rawFields
    buttonText
    sendInformation
  }
`;
