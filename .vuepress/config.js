module.exports = {
    base: '/docs/',
    locales: {
        '/en/': {
            title: "SKU Creator Manual",
        },
        '/zh/': {
            title: "SKU Creator 使用手册",
        }
    },
    themeConfig: {
        logo: '/logo.svg',
        sidebar: 'auto',
        locales: {
            '/en/': {
                title: "SKU Creator Manual",
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: 'SKU Admin', link: '/en/' },
                    { text: 'User Center', link: '/en/userCenter/' },
                    { text: 'Log Record', link: '/en/logRecord/' },
                ],
            },
            '/zh/': {
                title: "SKU Creator 使用手册",
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                nav: [
                    { text: 'SKU管理', link: '/zh/' },
                    { text: '用户中心', link: '/zh/userCenter/' },
                    { text: '日志记录', link: '/zh/logRecord/' },
                ]
            }
        }
    },
    head: [
        [
            'link', { rel: 'icon', href: '/favicon.ico' }
        ]
    ],
}