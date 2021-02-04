export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601b4bebea14e255b666f86f',
                  title: 'Sanity Studio',
                  name: 'dinosaur-project-studio',
                  apiId: '041eef61-2ac5-4fb7-96f5-66e32ef05cea'
                },
                {
                  buildHookId: '601b4bebf46e145f9961d00f',
                  title: 'Blog Website',
                  name: 'dinosaur-project',
                  apiId: '5b6d4828-2376-4ce4-b51f-ceff49325589'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jdmr/dinosaur-project',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://dinosaur-project.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
