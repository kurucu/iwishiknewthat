module.exports = {
  title: 'I Wish I Knew That',
  description: 'All the things we weren\'t taught at school that we really needed for life.',
  // head: [
  //   ['link', {
  //     rel: 'icon',
  //     href: '/logo.png'
  //   }]
  // ]
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Start',
        link: '/topics/start/'
      },
      {
        text: 'Topics',
        ariaLabel: 'Topics Menu',
        items: [
          {
            text: 'Money',
            link: '/topics/money/'
          },
          {
            text: 'Politics',
            link: '/topics/politics/'
          },
          {
            text: 'Law',
            link: '/topics/law/'
          },
        ]
      }
    ],
    sidebar: 'auto',
    smoothScroll: true,
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'kurucu/iwishiknewthat',
      // Customising the header label
      // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
      repoLabel: 'Contribute!',

      // Optional options for generating "Edit this page" link

      // if your docs are in a different repo from your main project:
      docsRepo: 'kurucu/iwishiknewthat',
      // if your docs are not at the root of the repo:
      docsDir: 'docs',
      // if your docs are in a specific branch (defaults to 'master'):
      docsBranch: 'master',
      // defaults to false, set to true to enable
      editLinks: true,
      // custom text for edit link. Defaults to "Edit this page"
      editLinkText: 'Help us improve this page!'
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/plugin-back-to-top',
    'vuepress-plugin-table-of-contents',
    'sitemap',
    'seo',
    'authors'
  ]
}