export const ARTICLES_SECTIONS_QUERY = `
query GetArticlesSections {
    pageBy(uri: "/άρθρα") {
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
      articlesPage {
        content {
          articles {
            nodes {
              ... on Post {
                id
                slug
                title
                excerpt
                content
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
  }
`;
