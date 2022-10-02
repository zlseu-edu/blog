import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'zlseu_edu',
    title: 'zlseu_edu',
    description: '不知道怎么描述，先这样吧...',
    url: 'https://funplus.jimmyzhang.tech',
    githubUrl: 'https://github.com/zlseu-edu',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
