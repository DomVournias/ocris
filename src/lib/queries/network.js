export const NETWORKS_SECTIONS_QUERY = `
query GetContactSections {
    pageBy(uri: "/δίκτυο") {
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
      networks {
        content {
          networks {
            network
          }
        }
      }
    }
  }
`;
