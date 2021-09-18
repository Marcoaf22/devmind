export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'devmind',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classSuffix: '',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org
    '@nuxtjs/color-mode',

    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org/guide/getting-started
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: process.env.VUE_APP_FIREBASE_KEY,
      authDomain: 'devmind-yt.firebaseapp.com',
      projectId: 'devmind-yt',
      storageBucket: 'devmind-yt.appspot.com',
      messagingSenderId: '377298870896',
      appId: '1:377298870896:web:21d21e5734f16223c34ab5',
      measurementId: 'G-MWFRYDCB5N',
    },
    services: {
      auth: true, // Just as example. Can be any other service.
      firestore: true,
      storage: true,
      analytics: true,
      performance: true,
    },
  },

  env: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
