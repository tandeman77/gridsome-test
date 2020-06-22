// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Contact",
        baseDir: "./content/contact",
        pathPrefix: "/contact",
        path: "**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Contact",
        baseDir: "./content/th/contact",
        pathPrefix: "/th/contact",
        path: "**/*.md",
      },
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [
          // locales list
          "en-GB",
          "th-TH",
        ],
        pathAliases: {
          // path segment alias for each locales
          "en-GB": "en",
          "th-TH": "th",
        },
        fallbackLocale: "en-GB", // fallback language
        defaultLocale: "en-GB", // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: false, // rewrite default locale, default: true
      },
    },
  ],
};
