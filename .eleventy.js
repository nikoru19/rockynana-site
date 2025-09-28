module.exports = function(eleventyConfig) {
  // Copy CMS admin folder as-is to output
  eleventyConfig.addPassthroughCopy("admin");

  // Copy static assets (CSS, JS, images)
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("assets");

  // Collection for concept posts
  eleventyConfig.addCollection("concept", function(collectionApi) {
    return collectionApi.getFilteredByGlob("concepts/posts/*.md");
  });

  // Collection for unique categories
  eleventyConfig.addCollection("categories", function(collectionApi) {
    const allCategories = collectionApi.getFilteredByGlob("concepts/posts/*.md")
      .map(item => item.data.category)        // get each post's category
      .filter((value, index, self) => self.indexOf(value) === index); // unique
    return allCategories;
  });

  return {
    dir: {
      input: ".",            // source
      includes: "_includes", // templates
      output: "_site"        // build folder
    }
  };
};
