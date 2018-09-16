module.exports = {
  title: 'GeoJS',
  description: 'REST/JSON/JSONP IP Geolocation lookup API',
  serviceWorker: false,
  themeConfig: {
    repo: 'jloh/geojs',
    docsRepo: 'jloh/geojs-io',
    editLinks: true,
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'API v1',
        link: '/v1/'
      },
      {
        text: 'ChatOps',
        link: '/chatops/'
      },
      {
        text: 'Contact',
        link: '/contact/'
      }
    ]
  },
  markdown: {
    config: md => {
      md.set({ linkify: true })
      const vuepressTabs = require('vuepress-tabs')
      vuepressTabs(md)
    }
  }
}
