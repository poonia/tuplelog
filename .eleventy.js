const { DateTime } = require('luxon');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    
     // Copy `img/` to `_site/img`
    // eleventyConfig.addPassthroughCopy("img");

    // Copy `css/fonts/` to `_site/css/fonts`
    // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("css/fonts");

    eleventyConfig.addPassthroughCopy("./src/style");

    // Copy any .jpg file to `_site`, via Glob pattern
    // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("**/*.jpg");
    
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    
    // eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(syntaxHighlight, {

        // Change which Eleventy template formats use syntax highlighters
        templateFormats: ["*"], // default
    
        // Use only a subset of template types (11ty.js added in v4.0.0)
        // templateFormats: ["liquid", "njk", "md", "11ty.js"],
    
        // init callback lets you customize Prism
        // init: function({ Prism }) {
        //   Prism.languages.myCustomLanguage = /* */;
        // },
    
        // Added in 3.1.1, add HTML attributes to the <pre> or <code> tags
        preAttributes: {
          tabindex: 0,
    
          // Added in 4.1.0 you can use callback functions too
          "data-language": function({ language, content, options }) {
            return language;
          }
        },
        codeAttributes: {},
      });


    // Return your Object options:
    return {
        dir: {
        input: "src",
        output: "public"
        }
    }
}