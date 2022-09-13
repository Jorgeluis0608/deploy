import { theme } from './config/vuetify.options.js'

const isProduction = process.env.NODE_ENV === 'production'
const editorMode = process.env.SWELL_EDITOR === 'true'
const storeId = process.env.SWELL_STORE_ID
const publicKey = process.env.SWELL_PUBLIC_KEY
const storeUrl = process.env.SWELL_STORE_URL
const vaultUrl = process.env.SWELL_VAULT_URL

export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/ms-icon-144x144.png',
      },
      // PWA primary color
      { name: 'theme-color', content: theme.primary },
      // Facebook
      { property: 'author', content: 'awrora' },
      { property: 'og:site_name', content: 'awrora.ux-maestro.com' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      // Twitter
      { property: 'twitter:site', content: 'awrora.ux-maestro.com' },
      { property: 'twitter:domain', content: 'awrora.ux-maestro.com' },
      { property: 'twitter:creator', content: 'awrora' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:image:src', content: '/images/logo.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
    ],
    link: [
      // Favicon
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicons/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicons/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicons/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicons/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicons/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicons/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicons/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicons/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicons/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicons/manifest.json' },
      // Fonts and Icons
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css',
      },
    ],
  },
  target: editorMode ? 'server' : 'static',

  vue: {
    config: {
      devtools: !isProduction,
      productionTip: false,
    },
  },

  /*
   ** Set the progress-bar color
   */
  loading: {
    // color: Set by the swell module.
    continuous: true,
    color: theme.primary,
  },

  /*
   ** Vue plugins to load before mounting the App
   */
  plugins: [
    // { src: '~/plugins/vue-fragment-config.js' },
    { src: '~/plugins/vue-wow-config.js' },
    { src: '~/plugins/vuetify.js' },
    { src: '~/plugins/global-scripts', mode: 'client' },
    { src: '~/plugins/vue-credit-card-validation', mode: 'client' },
    { src: '~/plugins/directives', mode: 'client' },
    { src: '~/plugins/swell-lang.js' },
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/countup-config', ssr: false },
    { src: '~/plugins/caroussel-config', ssr: false },
    { src: '~/plugins/vue-youtube-config', ssr: false },
    { src: '~/plugins/vue-lightbox-config', ssr: false },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/gtm'],

    // [
    //   '@nuxtjs/sentry',
    //   /*
    //    ** Logs app errors with Sentry's browser and node SDKs.
    //    *
    //    *  You can use environment variables or the object below to set config options.
    //    *  See https://github.com/nuxt-community/sentry-module for all available
    //    *  options, defaults, and environment variables.
    //    */
    //   {
    //     // dsn: '', // or SENTRY_DSN in .env
    //     // config: {}
    //   },
    // ],

    /*
     ** Generates a sitemap.xml
     *
     *  Automatically generate or serve dynamic sitemap.xml for Nuxt projects!
     *  See https://github.com/nuxt-community/sentry-module for all available
     *  options, defaults, and environment variables.
     */
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          xsDown: 599,
          xsUp: 600,
          smDown: 959,
          smUp: 960,
          mdDown: 1279,
          mdUp: 1280,
          lgDown: 1919,
          lgUp: 1920,
          xl: Infinity,
        },
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        locales: ['en'],
        defaultLocale: 'en',
      },
    ],
  ],

  components: true,

  buildModules: [
    // '@nuxt/components',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    [
      // https://go.nuxtjs.dev/tailwindcss
      '@nuxtjs/tailwindcss',
      /*
       ** Adds TailwindCSS (including PurgeCSS)
       *
       *  See https://tailwindcss.nuxtjs.org/ for config options.
       */
      {
        // Put your config overrides here
      },
    ],

    [
      '~/modules/swell',
      /*
       ** Initializes Swell.js SDK and injects it into Nuxt's context.
       *  It also sets additional plugins and module settings for
       *  full integration (e.g. i18n settings, styling, etc...)
       */
    ],

    [
      '~/modules/swell-editor',
      /*
       ** Provides communication and utilitiy functions for interfacing
       *  with Swell's storefront editor and fetching settings/content.
       */
    ],

    [
      '@nuxtjs/google-fonts',
      /*
       ** Parses Google Font families and loads them via stylesheet.
       *
       *  The config object is generated by the swell-editor module.
       *  See https://github.com/nuxt-community/google-fonts-module if you want
       *  to eject or provide your own config options.
       */
      // Options set by the swell module
    ],

    [
      '@nuxtjs/pwa',
      /*
       ** Provides PWA (Progressive Web App) functionality including app icons,
       *  SEO metadata, manifest.json file, and offline caching.
       *
       *  Use the object below to set config options.
       *  See https://pwa.nuxtjs.org/ for all available options and defaults.
       */
    ],
    '@nuxtjs/vuetify',
  ],

  swell: {
    storeId,
    publicKey,
    storeUrl,
    vaultUrl,
    editorMode,
  },

  gtm: {
    // Set by the swell module
  },

  pwa: {
    manifest: false,
    meta: {
      // name: Set by the swell module
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: `${process.env.CDN_HOST}/*` || 'https://cdn.schema.io/*',
        },
      ],
    },
  },

  css: [
    '~/assets/vuetify-overide.scss',
    'aos/dist/aos.css',
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/slick-carousel/slick-theme.css',
  ],

  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    optionsPath: './config/vuetify.options.js',
  },

  sitemap: {
    // hostname: Set by the swell module
    gzip: true,
    i18n: true,
    exclude: ['/account/**', '/*/account/**'],
  },

  generate: {
    exclude: [/^\/?([a-z]{2}-?[A-Z]{2}?)?\/account/],
    fallback: true, // Fallback to the generated 404.html,
    concurrency: 1,
    interval: 50,
    crawler: false,
    // routes: Set by the swell module
  },

  /*
   ** Extend default Nuxt routes to add page aliases
   */
  router: {
    middleware: ['currency'],
    trailingSlash: true,
    extendRoutes(routes, resolve) {
      // Rewrite to use the pages/_slug.vue component for home page, since the
      // content type is the same. If you want to have a unique template,
      // create a pages/index.vue and remove this route definition.
      routes.push(
        {
          path: '/',
          component: resolve(__dirname, 'pages/_slug.vue'),
        },
        {
          path: '/contact',
          component: resolve(__dirname, 'pages/contact/index.vue'),
        },
        {
          path: '/get-quotation',
          component: resolve(__dirname, 'pages/quotation/index.vue'),
        }
        // {
        //   name: 'signin',
        //   path: '/account/signin',
        //   component: resolve(__dirname, 'pages/account/signin.vue'),
        // },
        // {
        //   name: 'register',
        //   path: '/account/register',
        //   component: resolve(__dirname, 'pages/account/register.vue'),
        // },
        // {
        //   name: 'all-products',
        //   path: '/all-products',
        //   component: resolve(__dirname, 'pages/all-products/products.vue'),
        // },
        // {
        //   name: 'detail-product',
        //   path: '/detail-product',
        //   component: resolve(__dirname, 'pages/all-products/detail-product.vue'),
        // },
        // {
        //   name: 'about',
        //   path: '/about',
        //   component: resolve(__dirname, 'pages/about/index.vue'),
        // }
      )
    },
  },

  /*
   ** Extend default Nuxt server options
   */
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3333,
  },

  env: {
    cdnHost: process.env.CDN_HOST || 'https://cdn.schema.io',
  },
}
