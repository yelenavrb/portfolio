import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/portfolio/',
  lang: 'en-US',
  title: 'Yelena Varabyeva',
  description:
    'Senior Knowledge & Localization Manager | UX Writing & Content Design | Interactive Product Videos | AI Conversation Design',

  themeConfig: {
    siteTitle: 'YV',
    nav: [
      {
        text: 'Work',
        items: [
          { text: 'All work', link: '/work/' },
          { text: 'Help Center', link: '/work/help-center' },
          { text: 'UX microcopy', link: '/work/ux-microcopy' },
          { text: 'Product videos', link: '/work/product-videos' },
          { text: 'Release notes', link: '/work/release-notes' },
          { text: 'Localization', link: '/work/localization' },
          { text: 'Chatbot', link: '/work/chatbot' }
        ]
      },
      { text: 'About', link: '/about' },
      { text: 'CV', link: '/cv' },
      {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/yelenavarabyeva/'
      }
    ],

    sidebar: {
      '/work/': [
        {
          text: 'Work examples',
          items: [
            { text: 'Overview', link: '/work/' },
            { text: 'Help Center', link: '/work/help-center' },
            { text: 'UX microcopy', link: '/work/ux-microcopy' },
            { text: 'Product videos', link: '/work/product-videos' },
            { text: 'Release notes', link: '/work/release-notes' },
            { text: 'Localization', link: '/work/localization' },
            { text: 'Chatbot', link: '/work/chatbot' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    footer: {
      message: 'Portfolio of Yelena Varabyeva'
    }
  }
})
