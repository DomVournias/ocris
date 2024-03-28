export const LAYOUT_QUERY = `
  query Layout {
    headerSection: layout(idType: SLUG, id: "header") {
      header {
        mobile
        phone
        logo {
          node {
            title
            sourceUrl
          }
        }
      }
    }
    footerSection: layout(idType: SLUG, id: "footer") {
      footer {
        mobile
        phone
        contact 
        logo {
          node {
            title
            sourceUrl
          }
        }
      }
    }
    socialsSection: layout(idType: SLUG, id: "socials") {
      socials {
        facebook {
          link
        }
        x {
          link
        }
        linkedin {
          link
        }
        youtube {
          link
        }
      }
    }
    headerMenu: menu(id: "header-menu", idType: SLUG) {
      menuItems {
        nodes {
          label
          path
        }
      }
    }
   
  }
`;
