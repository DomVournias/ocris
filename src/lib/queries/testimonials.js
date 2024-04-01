export const TESTIMONIALS_QUERY = `
    query GetAllTestimonials {
        testimonials {
            nodes {
              id
              fields {
                name
                title
                company
                comment
              }
            }
          }
    }
`