import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
	// 多语言配置
	locales: {
		'/': {
			lang: 'zh-CN',
		},
		'/en/': {
			lang: 'en-US',
		},
	},

	theme: plumeTheme({
		// 导航栏左边的 logo，logo浅色时，logoDark深色时
		// logo: '',
		// logoDark: '',
		// 部署站点域名。
		hostname: '',
		// 作者信息
		avatar: {
			// 头像
			url: 'https://w.wallhaven.cc/full/9d/wallhaven-9dwwld.jpg',
			// 昵称
			name: 'HiCheer',
			// 描述
			description: '',
			circle: false, // 是否为圆形头像
		},
		// 个人社交信息配置（顶部导航栏、博客内社交块）
		social: [
			{ icon: 'github', link: 'https://github.com/HiCheer-O' },
			// { icon: 'x', link: 'https://github.com/HiCheer-O' }
		],
		// 限制导航栏中显示个人社交配置
		navbarSocialInclude: ['github'],
		// 博客设置
		blog: {
			pagination: {
				perPage: 5
			},
			// 是否启用标签页
			tags: false,
			// 是否启用归档页
			archives: false
		},
		// 文章链接前缀
		article: '/article/',
		// 设置导航
		locales: {
			'/': {
				navbar: [
					{ text: '首页', link: '/', icon: 'material-symbols:home-outline' },
					{ text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
					{
						text: '笔记',
						icon: 'mdi:idea',
						items: [
							{
								text: 'JAVA',
								icon: 'icon-park-solid:theme',
								items: [
									{
										text: 'java 基础',
										link: '/java/',
										icon: 'mdi:paper-airplane',
									},
								],
							},
							{
								text: 'JS',
								icon: 'mingcute:plugin-2-fill',
								items: [
									{
										text: 'JS 基础',
										link: '/nodes/js/',
										icon: 'pajamas:feature-flag',
									},
									{
										text: 'JS 进阶',
										link: '/nodes/js/',
										icon: 'material-symbols:move-selection-down-rounded',
									}
								],
							},
						],
					},
				],
				notes: {
					dir: '/notes',
					link: '/',
					notes: [
						{
							text: 'JAVA基础',
							link: '/java/',
							dir:  '/java/',
							sidebar: [
								{
									text: '数据结构',
									link: '/java/data-structure/',
									dir:  '/java/data-structure/',
									collapsed: true,
									items: [
										{
											text: '数据结构_01',
											link: '/java/data-structure_01/',
											dir:  '/java/data-structure_01/',
											items: []
										},
										{
											text: '数据结构_02',
											link: '/java/data-structure_02/',
											dir:  '/java/data-structure_03/',
											items: []
										},
									]
								},
								{
									text: 'JVM',
									link: '/java/jvm/',
									dir:  '/java/jvm/',
									collapsed: true,
									items: []
								},
							]
						},
					]
				},
			},
			'/en/': {
				navbar: [
					{ text: 'Home', link: '/en/', icon: 'material-symbols:home-outline' },
					{ text: 'Blog', link: '/en/blog/', icon: 'material-symbols:article-outline' },
					{
						text: 'notes',
						// link: '/en/notes/',
						icon: 'material-symbols:article-outline',
						items: [
							{
								text: 'vuepress-theme-plume',
								link: '/vuepress-theme-plume/notes/java',
								icon: 'mdi:paper-airplane',
							},
						]
					},
				]
			}
		},
		// 链接是否激活
		// activeMatch: '^/(blog|article|notes)/',
		footer: { message: 'MIT', copyright: "页脚配置" },
		// 404 页面
		notFound: {
			code: '404',
			title: '哦吼，😯迷路了～',
			quote: '好好想想🤔~',
			linkLabel: '/',
			linkText: '👉 返回首页 👈'
		},
		// 水印
		watermark: {
			global: true,
			content: 'HiCheer',
			fullPage: true,
			textColor: {dark: '#ffffff', light: '#111113'},
			onlyPrint: true
		},

	}),
	bundler: viteBundler(),
})
