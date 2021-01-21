export default {
  widgets: [
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
                  buildHookId: '60099ac1ee8655f9008871fe',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mmw4obgv',
                  apiId: 'ff68f2ae-f8f3-433e-a423-c72939665772'
                },
                {
                  buildHookId: '60099ac1f4f2d8f5f2e7f362',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-b1aeif5u',
                  apiId: '1a808eca-722f-41d8-94d7-8decaf233ead'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gronevet/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-b1aeif5u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
