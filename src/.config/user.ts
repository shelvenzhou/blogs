import type { UserConfig } from '~/types'

const siteUrl = new URL(
  process.env.SITE_URL
  ?? process.env.PUBLIC_SITE_URL
  ?? process.env.CF_PAGES_URL
  ?? 'https://astro-theme-typography.vercel.app/',
).toString()

export const userConfig: Partial<UserConfig> = {
  site: {
    title: '集异璧之大成',
    subtitle: 'by Shelven Zhou',
    author: 'Shelven Zhou',
    description: 'Shelven Zhou 的技术博客，记录 AI Agent、Claude Code、工程实践与源码阅读。',
    website: siteUrl,
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
  seo: {
    twitter: '@zhou49',
  },
}
