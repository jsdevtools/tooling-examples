module.exports = {
  title: 'Databases',
  url: 'databases',
  links: [
    {
      title: 'Relational databases',
      links: [
        {
          title: 'SQL',
          links: [
            {
              title: 'Cheat sheet',
              url: 'http://files.zeroturnaround.com/pdf/zt_sql_cheat_sheet.pdf',
            },
          ],
        },
        {
          title: 'MariaDB',
          note: 'GPL fork of MySQL',
          url: 'https://mariadb.org',
        },
        {
          title: 'MySQL',
          note: 'Dual commercial and GPL licenses from Oracle',
          url: 'https://dev.mysql.com',
          links: [
            {
              title: 'MySQL 8.0 Reference Manual  /  SQL Statement Syntax',
              url: 'https://dev.mysql.com/doc/refman/8.0/en/sql-syntax.html,'
            },
          ],
        },
        {
          title: 'PostgreSQL',
          url: 'https://www.postgresql.org',
          links: [
            {
              title: 'PostgreSQL 9.5 SQL reference',
              url: 'https://www.postgresql.org/docs/9.5/sql.html',
            },
          ],
        },
        {
          title: 'SQLite3',
          url: 'https://www.sqlite.org/index.html',
          links: [
            {
              title: 'SQL as understood by SQLite',
              url: 'https://www.sqlite.org/lang.html',
            },
          ],
        },
        {
          title: 'Oracle',
          url: 'https://www.oracle.com/database/technologies/',
          links: [
            {
              title: 'Express edition',
              note: 'dubbed free Oracle database for everyone',
              url: 'https://www.oracle.com/database/technologies/appdev/xe.html',
            },
          ],
        },
        {
          title: 'Microsoft SQL Server',
          url: 'https://www.microsoft.com/en-us/sql-server/default.aspx',
          links: [
            { 
              title: 'T-SQL reference',
              url: 'https://docs.microsoft.com/en-us/sql/t-sql/language-reference?view=sql-server-2017',
            },
            {
              title: 'SQL Server 2017 Express edition',
              url: 'https://www.microsoft.com/en-us/sql-server/sql-server-editions-express',
            },
          ],
        },
        {
          title: 'Amazon Aurora (MySQL/PostgreSQL)',
          note: 'MySQL and PostgreSQL-compatible relational database built for the cloud',
          url: 'https://aws.amazon.com/rds/aurora/',
        },
        {
          title: 'Google Cloud SQL (MySQL/PostgreSQL/MS SQL)',
          note: 'Cloud SQL is a fully managed MySQL, PostgreSQL, and SQL Server database service',
          url: 'https://cloud.google.com/sql/',
        },
        {
          title: 'Azure SQL Database (MSSQL)',
          note: 'Managed, intelligent SQL in the cloud',
          url: 'https://azure.microsoft.com/en-us/services/sql-database/',
        },
        {
          title: 'Azure Database for MySQL',
          note: 'Enterprise-ready, fully managed community MySQL',
          url: 'https://azure.microsoft.com/en-us/services/mysql/',
        },
        {
          title: 'Azure Database for PostgreSQL',
          note: 'Enterprise-ready, fully managed community PostgreSQL',
          url: 'https://azure.microsoft.com/en-us/services/postgresql/',
        },
        {
          title: 'Azure Database for MariaDB',
          note: 'Enterprise-ready, fully managed community MariaDB',
          url: 'https://azure.microsoft.com/en-us/services/mariadb/',
        },
      ],
    },
    {
      title: 'Non-relational databases',
      url: '',
      links: [
        {
          title: 'MongoDB',
          note: 'MongoDB is a general purpose, document-based, distributed database',
          url: 'https://www.mongodb.com',
        },
        {
          title: 'Apache CouchDB',
          note: 'Seamless multi-master sync, that scales from Big Data to Mobile, with an Intuitive HTTP/JSON API and designed for Reliability',
          url: 'http://couchdb.apache.org/',
        },
        {
          title: 'Amazon DocumentDB',
          note: 'Fast, scalable, highly available MongoDB-compatible database service',
          url: 'https://aws.amazon.com/documentdb/',
        },
        {
          title: 'Google Cloud Firestore (NoSQL)',
          note: 'Cloud Firestore is a fast, fully managed, serverless, cloud-native NoSQL document database',
          url: 'https://cloud.google.com/firestore/',
        },
        {
          title: 'Google Firebase (Realtime Database)',
          note: 'cloud-hosted NoSQL database that lets you store and sync data between your users in realtime',
          url: 'https://firebase.google.com/products/realtime-database/',
        },
      ],
    },
    {
      title: 'Key-value store',
      links: [
        {
          title: 'Google Cloud Memory Store (Redis)',
          note: 'Fully-managed in-memory data store service for Redis',
          url: 'https://cloud.google.com/memorystore/',
        },
        {
          title: 'Amazon Dynamo DB',
          note: 'key-value and document database',
          url: 'https://aws.amazon.com/dynamodb/',
        },
        {
          title: 'Amazon ElastiCache for Redis',
          note: 'Built on open-source Redis and compatible with the Redis APIs',
          url: 'https://aws.amazon.com/elasticache/redis/',
        },
        {
          title: 'Azure Cache for Redis',
          note: 'fully managed version of the popular open-source Redis server with a turnkey caching solution',
          url: 'https://azure.microsoft.com/en-us/services/cache/',
        },
        {
          title: 'Table Storage (Azure)',
          note: 'NoSQL key-value store',
          url: 'https://azure.microsoft.com/en-us/services/storage/tables/',
        },
        {
          title: 'Redis',
          note: 'open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker',
          url: 'https://redis.io',
          links: [
            {
              title: 'Commands',
              url: 'https://redis.io/commands',
            },
          ],
        },
      ],
    },
    {
      title: 'Data Warehouse',
      note: 'A data warehouse is a system that pulls together data from many different sources within an organization for reporting and analysis. The reports created from complex queries within a data warehouse are used to make business decisions.',
      links: [
        {
          title: 'Amazon Redshift',
          url: 'https://aws.amazon.com/redshift/',
        },
        {
          title: 'SQL Data Warehouse (Azure)',
          note: 'cloud data warehouse for enterprises',
          url: 'https://azure.microsoft.com/en-us/services/sql-data-warehouse/',
        },
      ],
    },
    {
      title: 'Ledger',
      links: [
        {
          title: 'Amazon Quantum Ledger Database (QLDB)',
          note: 'Fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log. Owned by a central trusted authority',
          url: 'https://aws.amazon.com/qldb/',
        },
      ],
    },
    {
      title: 'Time Series',
      note: 'Time-series data has specific characteristics such as typically arriving in time order form, data is append-only, and queries are always over a time interval. While relational databases can store this data, they are inefficient at processing this data as they lack optimizations such as storing and retrieving data by time intervals.',
      links: [
        {
          title: 'Amazon Timestream',
          note: 'managed time series database',
          url: 'https://aws.amazon.com/timestream/',
        },
      ],
    },
    {
      title: 'In-memory',
      note: 'a type of nonrelational database that relies primarily on memory for data storage; designed to attain minimal response time by eliminating the need to access disks',
      links: [
        {
          title: 'Amazon ElastiCache for Redis',
          note: 'Built on open-source Redis and compatible with the Redis APIs',
          url: 'https://aws.amazon.com/elasticache/redis/',
        },
        {
          title: 'Amazon ElastiCache for Memcached',
          note: 'Managed, Memcached-compatible, in-memory store. Sub-millisecond latency to power real-time applications.',
          url: 'https://aws.amazon.com/elasticache/memcached/',
        },
        {
          title: 'Azure Cache for Redis',
          note: 'fully managed version of the popular open-source Redis server with a turnkey caching solution',
          url: 'https://azure.microsoft.com/en-us/services/cache/',
        },
      ],
    },
    {
      title: 'Graph',
      note: ' database that uses graph structures for semantic queries with nodes, edges, and properties to represent and store data',
      links: [
        {
          title: 'Amazon Neptune',
          note: 'purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency',
          url: 'https://aws.amazon.com/neptune/',
        },
        {
          title: 'Popular graph models',
          links: [
            {
              title: 'Property Graph',
              links: [
                {
                  title: 'Property Graphs Explained',
                  url: 'http://graphdatamodeling.com/Graph%20Data%20Modeling/GraphDataModeling/page/PropertyGraphs.html',
                },
                {
                  title: 'Apache TinkerPop Gremlin',
                  note: 'Gremlin is the graph traversal language of Apache TinkerPop. Gremlin is a functional, data-flow language that enables users to succinctly express complex traversals on (or queries of) their application&quot;s property graph.',
                  url: 'http://tinkerpop.apache.org/gremlin.html',
                }
              ],
            },
            {
              title: 'W3C RDF',
              url: 'https://www.w3.org/RDF/',
              links: [
                {
                  title: 'RDF Primer',
                  url: 'https://www.w3.org/TR/rdf-primer/',
                },
                {
                  title: 'SPARQL',
                  note: 'Query language',
                  url: 'https://www.w3.org/TR/rdf-sparql-query/',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Object Relational Mapping',
      note: 'technique that lets you query and manipulate data from a database using an object-oriented paradigm',
      links: [
        {
          title: 'Bookshelf.js',
          note: 'a JavaScript ORM for Node.js, built on the Knex SQL query builder. It features both Promise-based and traditional callback interfaces, transaction support, eager/nested-eager relation loading, polymorphic associations, and support for one-to-one, one-to-many, and many-to-many relations',
          url: 'https://bookshelfjs.org',
          links: [
            {
              title: 'API reference',
              url: 'https://bookshelfjs.org/api.html',
            },
            {
              title: 'Source code',
              url: 'https://github.com/bookshelf/bookshelf',
            },
            {
              title: 'Package',
              url: 'https://www.npmjs.com/package/bookshelf',
            },
          ],
        },
        {
          title: 'Knex.js',
          note: '"batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift',
          url: 'http://www.knexjs.org',
          links: [
            { 
              title: 'Docs',
              url: 'http://www.knexjs.org',
            },
            { 
              title: 'Source',
              url: 'https://github.com/tgriesser/knex',
            },
            { 
              title: 'Package',
              url: 'https://www.npmjs.com/package/knex',
            },
            { 
              title: 'Cheat Sheet',
              url: 'https://devhints.io/knex',
            },
          ],
        },
        {
          title: 'Sequelize',
          note: 'promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server',
          url: 'https://sequelize.org',
          links: [
            { 
              title: 'Docs',
              url: 'https://sequelize.readthedocs.io/',
            },
            { 
              title: 'Source',
              url: 'https://github.com/sequelize/sequelize',
            },
            { 
              title: 'Package',
              url: 'https://www.npmjs.com/package/sequelize',
            },
          ],
        },
        {
          title: 'TypeORM',
          note: 'ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8)',
          url: 'https://typeorm.io/',
          links: [
            { 
              title: 'Docs',
              url: 'https://typeorm.io/',
            },
            { 
              title: 'Source',
              url: 'https://github.com/typeorm',
            },
            { 
              title: 'Package',
              url: 'https://www.npmjs.com/package/typeorm',
            },
          ],
        },
        {
          title: 'Massive',
          note: 'data mapper for Node.js and PostgreSQL',
          url: 'https://massivejs.org/',
          links: [
            { 
              title: 'Docs',
              url: 'https://massivejs.org/docs/connecting',
            },
            { 
              title: 'Source',
              url: 'https://gitlab.com/dmfay/massive-js',
            },
            { 
              title: 'Package',
              url: 'https://www.npmjs.com/package/massive',
            },
          ],
        },
      ],
    },
    {
      title: 'APIs / Middleware',
      links: [
        {
          title: 'Loopback',
          note: 'open source Node.js framework based on Express that enables you to quickly create dynamic end-to-end REST APIs and connect to backend systems such as databases and SOAP or REST services',
          url: 'https://loopback.io',
          links: [
            {
              title: 'Docs',
              url: 'https://loopback.io/doc/en/lb4/',
            },
            {
              title: 'Source code',
              url: 'https://github.com/strongloop/loopback',
            },
            {
              title: 'Package',
              url: 'https://www.npmjs.com/package/loopback',
            },
          ],
        },
        {
          title: 'Waterline',
          note: 'provides a uniform API for accessing stuff from different kinds of databases and protocols. That means you write the same code to get and store things like users, whether they live in MySQL, MongoDB, neDB, or Postgres.',
          url: 'https://waterlinejs.org',
          links: [
            {
              title: 'Docs',
              url: 'https://sailsjs.com/documentation/concepts/models-and-orm',
            },
            {
              title: 'Source code',
              url: 'https://github.com/balderdashy/waterline',
            },
            {
              title: 'Package',
              url: 'https://www.npmjs.com/package/waterline',
            },
          ],
        },
        {
          title: 'Strapi',
          note: 'open source Headless CMS Front-End',
          url: 'https://strapi.io',
          links: [
            {
              title: 'Docs',
              url: 'https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start.html',
            },
            {
              title: 'Source',
              url: 'https://github.com/strapi/strapi',
            },
          ],
        },
      ],
    },
  ],
}
