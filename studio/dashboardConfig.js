export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5eacb7698aa2b7c858920109',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-x7grvpoe',
                  apiId: '4101645b-a267-4b9d-bd0b-d88211895779'
                },
                {
                  buildHookId: '5eacb7697feab70e2935455b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nv24c767',
                  apiId: '3abaee95-1ede-4056-8dda-b2a5ee34ded2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sanjogsharma/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nv24c767.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
