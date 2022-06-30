const { DateTime } = require('luxon');
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
    
    // Return your Object options:
    return {
        dir: {
        input: "src",
        output: "public"
        }
    }
}