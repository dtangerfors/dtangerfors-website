const linkResolver = require('./src/utils/linkResolver')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Daniel Tängerfors`,
    description: `A driven and multifaceted frontend developer with a background in design and photography.`,
    author: `@dtangerfors`,
    siteUrl: `https://dtangerfors.se/`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver: (doc) => linkResolver(doc),
        schemas: {
          about_page: require('./custom_types/about_page.json'),
          homepage: require('./custom_types/homepage.json'),
          privacy_policy: require('./custom_types/privacy_policy.json'),
          project: require('./custom_types/project.json'),
          resources: require('./custom_types/resources.json'),
          blog_post: {},
          case: {}
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dtangerfors-website`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#f7f7f7`,
        display: `minimal-ui`,
        icon: `src/images/dtangerfors-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WP8KW96",
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
