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
  plugins: ['~/plugins/vuetify.js'],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-37532600-3',
    }],
  ],
  css: [
    '~/assets/style/app.styl',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
