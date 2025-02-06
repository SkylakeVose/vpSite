const moment = require('moment');

module.exports = {
    base: "/vpSite/",
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    moment.locale("zh-cn")
                    return moment(timestamp).format("llll")
                }
            }
        ]
    ],
    themeConfig: {
        lastUpdated: 'Last Updated',
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
            {
                text: 'Site',
                ariaLabel: 'Site Menu',
                items: [
                    {
                        text: '国内',
                        items: [
                            { text: '广东', link: '/' },
                            { text: '福建', link: '/city/Fujian' },
                            { text: '湖南', link: '/city/Hunan' }
                        ]
                    },
                    {
                        text: '国外',
                        items: [
                            { text: '新加坡', link: '/city/Singapore' },
                            { text: '洛杉矶', link: '/' }
                        ]
                    },
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: {
            '/css/': [
                'c-aaa',
                'c-bbb',
                'c-ccc'
            ],
            '/javascript/': [
                'j-aaa',
                'j-bbb',
                'j-ccc'
            ],
            '/': [
                '/',
                '/css/',
                '/javascript/',
                'about'
            ]
        }
    }
}
