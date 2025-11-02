const markdownIt = require("markdown-it");
const markdownItTexmath = require("markdown-it-texmath");
const katex = require("katex");

module.exports = function(eleventyConfig) {
  // Configure Markdown with KaTeX for LaTeX support
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItTexmath, {
    engine: katex,
    delimiters: 'dollars',
    katexOptions: { macros: { "\\RR": "\\mathbb{R}" } }
  });
  
  eleventyConfig.setLibrary("md", markdownLibrary);
  
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  
  // Create a collection of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        for (let tag of tags) {
          tagSet.add(tag);
        }
      }
    });
    return [...tagSet].sort();
  });
  
  // Create a collection of all sections
  eleventyConfig.addCollection("sectionList", function(collection) {
    let sectionSet = new Set();
    collection.getAll().forEach(item => {
      if ("section" in item.data) {
        sectionSet.add(item.data.section);
      }
    });
    return [...sectionSet].sort();
  });
  
  // Filter to format dates
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('fr-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });
  
  // Filter to get posts by tag
  eleventyConfig.addFilter("filterByTag", function(posts, tag) {
    return posts.filter(post => post.data.tags && post.data.tags.includes(tag));
  });
  
  // Filter to get posts by section
  eleventyConfig.addFilter("filterBySection", function(posts, section) {
    return posts.filter(post => post.data.section === section);
  });
  
  return {
    pathPrefix: "/secasserlebecyk.github.io/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
