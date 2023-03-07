module.exports = function(eleventyConfig) {
     eleventyConfig.addPlugin(eleventyNavigationPlugin);
     return{
          dir: {
               input: "_src"
          }
     }
}

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");