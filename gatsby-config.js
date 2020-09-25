const path = require(`path`)
module.exports = {
  pathPrefix: "/photography",
  siteMetadata: {
    title: "Andy Stefanek Photography",
    author: {
      name: `Andy Stefanek`,
      summary: `Who travels around the world `,
    },
    contact: {
      phone: "9957806009",
      email: "hi@dreamtripgoa.com",
    },
    description: `Andy Stefanek Photographyo.`,
    siteUrl: `https://andystefanekphotography.com/`,
    social: {
      twitter: ``,
    },
    menuLinks: [
     
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Photography",
        link: "#",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "About Me",
        link: "#",
      },
      {
        name: "Purchase",
        link: "#",
      },
      {
        name: "Contact",
        link: "#",
      },

    ],
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
