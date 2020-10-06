module.exports = {
  siteMetadata: {
    title: `Baise-en-ville Skateboards | Cruiser skate | made in France`,
    description: `Baise-en-ville skateboards conçoit et fabrique dans une démarche locale et artisanale des cruisers skates taillés pour la balade en ville.`,
    author: `Pascal Dinh`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 80
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Baise-en-ville Sakteboards`,
        short_name: `BEV`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`
  ]
}