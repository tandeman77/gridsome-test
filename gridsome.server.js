// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
    const { data } = await graphql(`
      query($locale: String) {
        allContact(filter: { locale: { eq: $locale } }) {
          edges {
            previous {
              id
            }
            next {
              id
            }
            node {
              id
              locale
              path
            }
          }
        }
      }
    `);
    data.allContact.edges.forEach(function(element) {
      console.log(element.node.id);
      console.log(element.node.locale);
      console.log(element.node.path);
      createPage({
        path: element.node.path,
        component: "./src/templates/ContactTemplate.vue",
        queryVariables: {
          locale: element.node.locale,
          id: element.node.id,
        },
        context: {
          locale: element.node.locale,
        },
      });
    });
  });
};
