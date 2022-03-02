import { gql } from "@apollo/client";

export const getOffices = gql`
  query allOffices {
    escritorios {
      edges {
        node {
          id
          title
          excerpt
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
