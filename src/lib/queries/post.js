export const getSinglePostBySlug = (slug) => {
  const POST_QUERY = `
    query GetPostBySlug {
        postBy(slug: "${slug}") {
            hero {
                heroContent {
                  heading1
                  heading2
                  title
                }
              }
              content
              featuredImage {
                node {
                  sourceUrl
                }
            }
        }
    }
  `;

  return POST_QUERY;
};
