const webpack = require('webpack')

module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      {
        rel:'stylesheet',
        href:'https://fonts.googleapis.com/css?family=Didact+Gothic|Roboto+Mono:400,700|Ubuntu:400,700&amp;subset=latin-ext'
      }
    ]
  },

  config: {
    "nuxt": {
      "host": "0.0.0.0",
      "port": "9001"
    }
  },

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/bootstrap.scss'],

  // CACHING
  cache: {
    max: 1,
    maxAge: 1
  },

  // MODULES
  modules: [
    'nuxt-fontawesome',
    'nuxt-device-detect',
    // 'bootstrap-vue/nuxt',
    ['nuxt-sass-resources-loader', ['@/assets/scss/design.scss']],
    ['@nuxtjs/dotenv', { /* module options */ }]
    // ['@nuxtjs/google-tag-manager', { id: 'GTM-5FK7GT2' }],
    // '@nuxtjs/axios',
    // '@nuxtjs/pwa',
  ],

  /**
   * Customize the progress bar color
   */
  loading: {
    color: '#e01b21',
    failedColor: '#000',
    height: '2px'
  },

  /*
   ** Build configuration
   */
  router: {
    // middleware: 'i18n',
    extendRoutes(routes, resolve) {
      // @TODO here we may fetch the pages and create the custom routes
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/_page.vue')
      })
    },
    scrollBehavior: function (to, from, savedPosition) {
      console.log('scrollBehavior')
      return { x: 0, y: 0 }
    }
  },

  build: {
    vendor: [
      'vee-validate',
      'vue-i18n',
      'babel-polyfill'
    ],
    babel: {
      presets: [
        [ 'vue-app', {
          useBuiltIns: true,
          targets: {
            ie: 9,
            uglify: true
          }
        }]
      ]
    },
    extractCSS: {
      allChunks: true
    },

    /**
     * Run ESLint on save
     */
    extend (config, { isDev, isClient }) {

      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        exclude: /node_modules/
      })

      // const extract = config.plugins.find(plugin => plugin.renderExtractedChunk)
      // extract.options.allChunks = true

      if (!isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function(context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          // exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/
          exclude: /(node_modules)/
        })
      }
    },

    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
  },

  plugins: [
    '~/plugins/vuex-router-sync.js',
    '~/plugins/common.js',
    '~/plugins/i18n.js',
    '~/plugins/framework.js',
    '~/plugins/global-filters.js',
    '~/plugins/global-components.js',
    '~/plugins/autoload-pages.js',
    '~/plugins/eventBus.js',
    '~/plugins/check-in-view.js',
    '~/plugins/counter.js',
    '~/plugins/cms-image.js',
    '~/plugins/vee-validate.js',
    '~/plugins/gmaps.js',
    {
      src: '~/plugins/nuxt-swiper-plugin.js',
      ssr: false
    }
    // '~/plugins/axios',
    // '~/plugins/cachedApi',
    // {
    //   src: '~/plugins/routerHistory.js',
    //   ssr: false
    // }
    // {
    //   src: '~plugins/ga.js',
    //   ssr: false
    // },
    // {
    //   src: '~/plugins/select.js',
    //   ssr: false
    // },
  ]
}
