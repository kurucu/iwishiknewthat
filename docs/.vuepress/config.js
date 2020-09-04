module.exports = {
  title: 'Hello VuePress',
  description: 'meta description of site',
  // head: [
  //   ['link', {
  //     rel: 'icon',
  //     href: '/logo.png'
  //   }]
  // ]
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/home/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [{
            text: 'Chinese',
            link: '/language/chinese/'
          },
          {
            text: 'Japanese',
            link: '/language/japanese/'
          }
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
  }
}