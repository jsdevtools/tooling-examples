const { ApolloServer, gql } = require('apollo-server');
const locals = require('../locals.config.js');
const { fetchTopics, fetchNav } = require('fetch-file');
const { fetchLocals } = require('fetch-pg');
const { pool } = require('./config');

const typeDefs = gql`
  enum BackEndDataSource {
    LOCAL_FILE
    REST_FILE
    REST_PG
    PG
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

  type NavItem {
    title: String
    filename: String
    ext: String
  }

  type Query {
    topics(backEndDataSource: BackEndDataSource): Topics
    nav(backEndDataSource: BackEndDataSource): [NavItem]
  }
`;

const resolvers = {
  BackEndDataSource: {
    LOCAL_FILE: 'localFile',
    REST_FILE: 'restFile',
    REST_PG: 'restPg',
    PG: 'pg',
  },
  Query: {
    topics: async (_, args) => {
      switch(args.backEndDataSource) {
        case 'pg': {
          const { rows } = await pool.query('SELECT * FROM locals ORDER BY id LIMIT 1');
          return rows[0].info.topics; 
        }
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
        case 'pg': {
          const { rows } = await pool.query('SELECT * FROM locals ORDER BY id LIMIT 1');
          const tempTopics =  rows[0].info; 
          const {favorites, ...rest} = tempTopics.topics;
          return [
            { title: favorites.title, filename: favorites.url, ext: favorites.ext },
            ...Object.entries(rest)
              .sort(([a,],[b,],) => (b < a))
              .map(([key,value])=>({ title: value.title, filename: value.url, ext: value.ext })),
          ];
        }
        case 'restPg': {
          const tempTopics = await fetchLocals();
          const {favorites, ...rest} = tempTopics.topics;
          return [
            { title: favorites.title, filename: favorites.url, ext: favorites.ext },
            ...Object.entries(rest)
              .sort(([a,],[b,],) => (b < a))
              .map(([key,value])=>({ title: value.title, filename: value.url, ext: value.ext })),
          ];
        }
        case 'restFile': {
          return await fetchNav();
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