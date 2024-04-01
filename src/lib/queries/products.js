export const PRODUCTS_SECTIONS_QUERY = `
query GetProductsSections {
    pageBy(uri: "/προϊόντα") {
      hero {
        heroContent {
          heading1
          heading2
          link
          title
          eyeImage {
            node {
              sourceUrl
            }
          }
          icon {
            node {
              sourceUrl
            }
          }
        }
      }
      productsPage {
        content {
          products {
            nodes {
              ... on Product {
                id
                slug
                productDetails {
                  content {
                    description
                    shortDescription
                    image {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
