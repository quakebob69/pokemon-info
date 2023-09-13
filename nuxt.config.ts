// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    build: {
      target: 'es2015',
    },
  },
  hooks: {
    'vite:extendConfig'(config, { isServer }) {
      console.log(
        isServer ? 'server' : 'client',
        'config target is',
        config.build!.target
      );
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: 'es2015'
      },
    },
  },
})
