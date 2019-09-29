const { ApolloServer, gql } = require('apollo-server');
const locals = require('../locals.config.js');
const { fetchTopics, fetchNav } = require('../fetch-file');
const { fetchLocals } = require('../fetch-pg');

const typeDefs = gql`
  enum BackEndDataSource {
    LOCAL_FILE
    REST_FILE
    REST_PG
  }

  type Topics {
    favorites:  Link
    browsers: Link
    databases: Link
    frontends: Link
    oss: Link
    podcasts: Link
    servers: Link
    templates: Link
  }
  
  type Link {
    title: String
    note: String
    url: String
    ext: String
    links: [Link]
  }

  type Query {
    topics(backEndDataSource: BackEndDataSource): Topics
    nav: [Link]
  }
`;

const resolvers = {
  BackEndDataSource: {
    LOCAL_FILE: 'localFile',
    REST_FILE: 'restFile',
    REST_PG: 'restPg',
  },
  Query: {
    topics: async (_, args) => {
      switch(args.backEndDataSource) {
        case 'restPg': {
          const tempTopics = await fetchLocals();
          return tempTopics.topics;
        }
        case 'restFile': {
          return await fetchTopics();
        }
        case 'localFile': 
        default: {
          return locals.topics
        }
      }
    },
    nav: async (_, args) => {
      switch(args.backEndDataSource) {
        case 'restPg': {
          const {favorites, ...rest} = await fetchLocals().topics;;
          return [
            { title: favorites.title, filename: favorites.url, ext: favorites.ext },
            ...Object.entries(rest)
              .sort(([a,],[b,],) => (b < a))
              .map(([key,value])=>({ title: value.title, filename: value.url, ext: value.ext })),
          ];
          break;
        }
        case 'restFile': {
          return await fetchNav();
          break;
        }
        case 'localFile': 
        default: {
          const {favorites, ...rest} = locals.topics;
          return [
            { title: favorites.title, filename: favorites.url, ext: favorites.ext },
            ...Object.entries(rest)
              .sort(([a,],[b,],) => (b < a))
              .map(([key,value])=>({ title: value.title, filename: value.url, ext: value.ext })),
          ];
        }
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});