const strapiBaseUrl = process.env.BACKEND_URL || "http://localhost:1337";

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "StartOP",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Boston startup newsletter",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended)
  // (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    "@nuxtjs/svg",
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // for handling time
    "@nuxtjs/moment",
    // for handling markdown
    "@nuxtjs/markdownit",
    // for icons
    '@nuxtjs/fontawesome'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/cloudinary'
  ],

  // cloudinary config
  cloudinary: {
    cloudName: 'startop',
    useComponent: true
  },

  // strapi config
  strapi: {
    entities: ['articles', 'categories', 'authors'],
    url: strapiBaseUrl
  },

  // moment.js config
  moment: {
    timezone: true,
    defaultTimezone: 'America/Boston'
  },

  // markdownit config
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },

  // FontAwesome configuration
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
