import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: '桜島降灰予報',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '桜島の降灰予報を確認できるアプリ' },
      { name: 'og:url', content: 'https://sakurajima-ashfall.netlify.com' },
      { name: 'og:title', content: '桜島降灰予報' },
      { name: 'og:description', content: '桜島の降灰予報を確認できるアプリ' },
      { name: 'og:image', content: 'https://sakurajima-ashfall.netlify.com/icon.png' },
      { name: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
    ],
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
  },
  modules: [
    ['@nuxtjs/google-gtag', {
      id: 'UA-37532600-3',
    }],
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
