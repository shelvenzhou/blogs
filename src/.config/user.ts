import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: '集异璧之大成',
    subtitle: 'by Shelven Zhou',
    author: 'Shelven Zhou',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/shelvenzhou',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'email',
        href: 'mailto:favoring.zhou49@gmail.com',
      },
    ],
  },
  analytics: {
    busuanzi: true,
  },
}
