const { ApolloClient, gql } = require('apollo-boost');
const { fetch } = require('cross-fetch/polyfill');
const { createHttpLink } = require('apollo-link-http');
const { InMemoryCache } = require('apollo-cache-inmemory');

const linksRecursive = gql`
  fragment LinksRecursive on Link {
    links {
      ...LinksFields
      links {
        ...LinksFields
        links {
          ...LinksFields
          links {
            ...LinksFields
            links {
              ...LinksFields
              links {
                ...LinksFields
              }
            }
          }
        }
      }
    }
  }
`;

const linksFields = gql`
  fragment LinksFields on Link {
    title 
    note
    url
    ext
  }
`;

const navFields = gql`
  fragment NavFields on NavItem {
    title 
    filename
    ext
  }
`;

const getTopics = dataSource => {
  return gql`
    query {
      topics(backEndDataSource: ${dataSource}) {
        favorites {
          ...LinksFields
          ...LinksRecursive
        }
        browsers {
          ...LinksFields
          ...LinksRecursive
        }
        databases {
          ...LinksFields
          ...LinksRecursive
        }
        frontends {
          ...LinksFields
          ...LinksRecursive
        }
        oss {
          ...LinksFields
          ...LinksRecursive
        }
        podcasts {
          ...LinksFields
          ...LinksRecursive
        }
        servers {
          ...LinksFields
          ...LinksRecursive
        }
        templates {
          ...LinksFields
          ...LinksRecursive
        }
      }
    }
    ${linksRecursive}
    ${linksFields}
  `;
}

const getNav = dataSource => {
  return gql`
    query {
      nav(backEndDataSource: ${dataSource}) {
        ...NavFields,
      }
    }
    ${navFields}
  `;
}

module.exports.fetchTopics = async (config) => {
  const client = new ApolloClient({
    link: createHttpLink({
      uri: config.uri,
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
  });

  try {
    const topicsData = await client.query({
      query: getTopics(config.dataSource),
    });
    return topicsData.data.topics;
  } catch (err) {
    console.log(`topics err: ${JSON.stringify(err)}`);
  }
};

module.exports.fetchNav = async (config) => {
  const client = new ApolloClient({
    link: createHttpLink({
      uri: config.uri,
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
  });

  try {
    const navData =  await client.query({
      query: getNav(config.dataSource),
    });
    return navData.data.nav;
  } catch (err) {
    console.log(`nav err: ${JSON.stringify(err)}`);
  }
};
