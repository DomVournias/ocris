export const HOME_SECTIONS_QUERY = `
  query GetHomeSections {
    pageBy(uri: "/") {
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
      sections {
        info {
          title
          paragraph
          link
        }
        vision {
          heading
          card1 {
            icon {
              node {
                sourceUrl
              }
            }
            title
            description
            link
          }
          card2 {
            icon {
              node {
                sourceUrl
              }
            }
            title
            description
            link
          }
          card3 {
            icon {
              node {
                sourceUrl
              }
            }
            title
            description
            link
          }
        }
        instructions {
          heading
          card1 {
            title
            link
            image {
              node {
                sourceUrl
              }
            }
          }
        }
        specialties {
          heading
          card1 {
            icon {
              node {
                sourceUrl
              }
            }
            title
            description
            link
          }
          card2 {
            icon {
              node {
                sourceUrl
              }
            }
            title
            description
            link
          }
          card3 {
            icon {
              node {
                sourceUrl
              }
            }
            title
            description
            link
          }
        }
        articles {
          heading
          posts {
            nodes {
              ... on Post {
                title
                slug
                excerpt
                featuredImage {
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
    products {
      nodes {
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
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
`;
