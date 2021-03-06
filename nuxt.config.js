const env = require("dotenv").config();

PUBLIC_PATH = "portfolio-nuxt";

module.exports = {
  router: {
    base: `/${PUBLIC_PATH}/`
  },
  cache: false,
  /*
   ** Headers of the page
   */
  head: {
    title: "TK | Frontend developer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: `/${PUBLIC_PATH}/favicon.ico` }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    publicPath: "/assets/",
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].js" : "[name][contenthash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].js" : "[name][contenthash].js")
    }
  },
  env: env.parsed,
  plugins: [{ src: "~/plugins/vue-carousel", ssr: false }]
};
