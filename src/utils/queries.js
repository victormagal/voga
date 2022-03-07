import { gql } from "@apollo/client";

export const getOffices = gql`
  query allOffices {
    escritorios {
      edges {
        node {
          id
          title
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          content_escritorio {
            label
            link
          }
        }
      }
    }
  }
`;

export const getProducts = gql`
  query allProducts {
    produtos {
      edges {
        node {
          id
          title
          excerpt
        }
      }
    }
  }
`;

export const getQualitiesAndPrizes = gql`
  query allPrizesAndQualities {
    premios {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    valores {
      edges {
        node {
          id
          title
          excerpt
        }
      }
    }
  }
`;
