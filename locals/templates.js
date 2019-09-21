module.exports = {
  title: 'HTML Template Systems',
  url: 'templates',
  ext: '.html',
  links: [
    {
      title: 'pug',
      note: `Pug is a template engine that is simple to get up and running. It also has pretty good documentation. One thing that might be confusing is that the tool used to be called Jade and you will find references to Jade in your Google searching. One significant downside I felt was that the templates are not based on HTML and new users will need to learn the syntax of this new (markup?) language. Another feather in Pug's cap is the relative ease of creating templates with the 'extends' and 'mixin' commands.`,
      url: 'https://pugjs.org',
      links: [
        {
          title: 'Docs',
          url: 'https://pugjs.org/api/reference.html',
        },
        {
          title: 'Source code',
          url: 'https://github.com/pugjs/pug',
        },
        {
          title: 'Package',
          url: 'https://www.npmjs.com/package/pug',
          links: [
            {
              title: 'pug-cli',
              url: 'https://github.com/pugjs/pug-cli'
            },
          ]
        },
      ],
    },
    {
      title: 'Handlebars',
      note: `Some users, like me, may struggle with the logicless nature of Handlebars. Programming constructs such as evaluating expressions in an 'if' statement are not allowed and require learning early on how to use 'helpers' and 'partials' to define them yourself. I found the documentation and Google searches sparse. After using Pug it was nice to find that the templates are written in HTML which is one less syntax to get used to.`,
      links: [
        {
          title: 'Website & Docs',
          url: 'http://handlebarsjs.com/',
        },
        {
          title: 'Source Code',
          url: 'https://github.com/wycats/handlebars.js',
        },
        {
          title: 'Package',
          url: 'https://www.npmjs.com/package/handlebars',
          links: [
            {
              title: 'hbs-cli',
              url: 'https://www.npmjs.com/package/hbs-cli',
            },
          ],
        },
      ],
    },
    {
      title: 'Mustache.js',
      note: 'Struggled a bit again with the logicless nature of this tool. Having to manually define control flow was tricky. The provided cli would only allow views that were JSON, so it became necessary to add the ability to use a view defined in javascript. Additionally, the cli did not support globs so files needed to be compiled one by one. This required a compile command for each file and I wound up writing a script that would compile each file and output to a particular destination directory.',
      url: 'https://github.com/janl/mustache.js/',
      links: [
        {
          title: 'Website, Docs, & Source Code',
          url: 'https://github.com/janl/mustache.js',
        },
        {
          title: 'Package',
          url: 'https://www.npmjs.com/package/mustache',
        },
      ],
    },
    {
      title: 'ejs',
      url: 'https://ejs.co',
      note: '"Embedded Javascript templating." This is a nice blend of writing templates in html, variables and logic in javascript, and easily understoood inclusion of partials.',
      links: [
        {
          title: 'Docs',
          url: 'https://ejs.co/#docs',
        },
        {
          title: 'Source Code',
          url: 'https://github.com/mde/ejs',
        },
        {
          title: 'Package',
          url: 'https://www.npmjs.com/package/ejs',
          links: [
            {
              title: 'ejs-cli',
              url: 'https://www.npmjs.com/package/ejs-cli',
            },
          ],
        },
      ],
    },
    {
      title: 'nunjucks',
      note: 'Pros: feature rich, write templates in html. Cons: need to learn syntax, different tags for substition and flow control.',
      url: 'https://mozilla.github.io/nunjucks/',
      links: [
        {
          title: 'Website & Docs',
          url: 'https://mozilla.github.io/nunjucks/',
        },
        {
          title: 'Source Code',
          url: 'https://github.com/mozilla/nunjucks',
        },
        {
          title: 'Package',
          url: 'https://www.npmjs.com/package/nunjucks',
          link: [
            {
              title: 'nunjucks-cli',
              url: 'https://www.npmjs.com/package/nunjucks-cli',
            },
          ],
        },
      ],
    },
    {
      title: 'es6-template-renderer',
      note: 'Uses template literals built into es6. Require data, and templates. Templates require partials. And everything is just javascript. Very little to learn beyond what users will already know from working with javascript and thus easy to reason about.',
      url: 'https://github.com/jsdevtools/es6-template-renderer',
      links: [
        {
          title: 'Source Code',
          url: 'https://github.com/jsdevtools/es6-template-renderer',
        },
      ],
    },
  ],
}
