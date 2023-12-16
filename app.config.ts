export default defineAppConfig({
  // Configure Content Wind here
  cover: '/cover.jpg',

  socials: {
    twitter: 'ilosmyipad',
    github: 'sudo-self/content-wind',
  },

  nuxtIcon: {
    iconifyApiOptions: {
      publicApiFallback: true
    },

    class: 'tailwind.css'
  }
})