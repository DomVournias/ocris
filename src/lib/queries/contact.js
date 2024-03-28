export const CONTACT_SECTIONS_QUERY = `
query GetContactSections {
    pageBy(uri: "/επικοινωνία") {
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
      contact {
        content {
          details
        }
      }
    }
  }
`;
