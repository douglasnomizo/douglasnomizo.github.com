export default {
  mode: 'spa',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/css/main.css'],
  plugins: [
    { src: '@/plugins/font_awesome_icons.ts', mode: 'client' },
    { src: '@/plugins/capitalize.ts', mode: 'client' },
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios', '@nuxtjs/proxy'],
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
            },
          ],
        ]
      },
    },
  },
  axios: {
    proxy: true,
  },
  proxy: {
    '/colorapi/': {
      target: 'http://colormind.io/api/',
      pathRewrite: { '^/colorapi/': '' },
    },
  },
}
