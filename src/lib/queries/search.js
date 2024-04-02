
  
  export const getPostsSearchResults = (query) => {
    const SEARCH_POSTS_QUERY = `
    query SearchPosts {
        posts(where: {search: "${query}"}) {
          nodes {
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `;
  
    return SEARCH_POSTS_QUERY;
  };
  