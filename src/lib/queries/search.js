
  
  export const getPostsSearchResults = (query) => {
    const SEARCH_POSTS_QUERY = `
    query SearchPosts {
        posts(where: {search: "${query}"}) {
          nodes {
            title
            slug
          }
        }
      }
    `;
  
    return SEARCH_POSTS_QUERY;
  };
  