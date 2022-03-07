import { gql } from "@apollo/client";

export const getOffices = gql`
  query allOffices {
    escritorios {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          content_escritorio {
            summary
            label
            link
          }
        }
      }
    }
  }
`;

export const getLocations = gql`
  query allLocations {
    escritorios {
      edges {
        node {
          id
          title
          content_escritorio {
            summary
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
