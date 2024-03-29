export const COMPANY_SECTIONS_QUERY = `
query GetCompanySections {
    pageBy(uri: "/εταιρεία") {
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
      company {
        content {
          paragraph1
          paragraph2
          eye {
            content
          }
        }
      }
    }
  }
`;
