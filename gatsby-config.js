module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 500
      }
    }
  ],
  pathPrefix: `/`
};
