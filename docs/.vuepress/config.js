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
			url: 'https://coupon.heke100.com/hk-data/2024/05/25/c413911d6b8d4689a09edd3b7cd5626e.png',
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
						icon: 'emojione-v1:note-pad',
						items: [
							{
								text: '心得感悟',
								icon: 'emojione:thinking-face',
								items: [
									{
										text: '生活',
										link: '/live/',
										icon: 'arcticons:smart-life',
									},
									{
										text: '读书',
										link: '/book/',
										icon: 'material-symbols-light:book-outline',
									},
									{
										text: '观影',
										link: '/movie/',
										icon: 'ri:movie-2-line',
									},
								],
							},
							{
								text: '经历',
								icon: 'arcticons:pixel-experience',
								items: [
									{
										text: '工作',
										link: '/experience/work/',
										icon: 'healthicons:military-worker-outline',
									},
									{
										text: '大学',
										link: '/experience/university/',
										icon: 'mdi:university-outline',
									},
									{
										text: '高中',
										link: '/experience/high-school/',
										icon: 'mingcute:school-line',
									},
								],
							}
						],
					},
				],
				notes: {
					dir: '/notes',
					link: '/',
					notes: [
						{
							text: '生活',
							link: '/live/',
							dir: '/live/',
							sidebar: [
								{
									text: '生活',
									link: '/live/',
									dir: '/live/',
									collapsed: true,
									items: [
										{
											text: '2024年的炎炎夏热',
											link: '/live/live-001/',
											dir: '/live/live-001/',
											items: []
										}
									]
								}
							]
						},
						{
							text: '读书',
							link: '/book/',
							dir: '/book/',
							sidebar: [
								{
									text: '读书',
									link: '/book/',
									dir: '/book/',
									collapsed: true,
									items: [
										{
											text: '钢铁是怎么炼成的',
											link: '/book/book-001/',
											dir:  '/book/book-001/',
											items: []
										}
									]
								}
							]
						},
						{
							text: '观影',
							link: '/movie/',
							dir: '/movie/',
							sidebar: [
								{
									text: '观影',
									link: '/movie/',
									dir: '/movie/',
									collapsed: true,
									items: [
										{
											text: '泰坦尼克号',
											link: '/movie/movie-001/',
											dir:  '/movie/movie-001/',
											items: []
										}
									]
								}
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
						icon: 'emojione-v1:note-pad',
						items: [
							{
								text: 'Experience',
								icon: 'emojione:thinking-face',
								items: [
									{
										text: 'Live',
										link: '/en/live/',
										icon: 'arcticons:smart-life',
									},
									{
										text: 'Book',
										link: '/en/book/',
										icon: 'material-symbols-light:book-outline',
									},
									{
										text: 'Movie',
										link: '/en/movie/',
										icon: 'ri:movie-2-line',
									},
								],
							},
							{
								text: 'Experience',
								icon: 'arcticons:pixel-experience',
								items: [
									{
										text: 'Work',
										link: '/en/experience/work/',
										icon: 'healthicons:military-worker-outline',
									},
									{
										text: 'University',
										link: '/en/experience/university/',
										icon: 'mdi:university-outline',
									},
									{
										text: 'High-School',
										link: '/en/experience/high-school/',
										icon: 'mingcute:school-line',
									},
								],
							}
						]
					},
				],
				notes: {
					dir: '/en/notes',
					link: '/en',
					notes: [
						{
							text: 'Live',
							link: '/live/',
							dir: '/live/',
							sidebar: [
								{
									text: 'Live',
									link: '/en/live/',
									dir: '/live/',
									collapsed: true,
									items: [
										{
											text: 'The scorching summer heat of 2024',
											link: '/en/live/live-001/',
											dir: '/live/live-001/',
											items: []
										}
									]
								}
							]
						},
						{
							text: 'Book',
							link: '/book/',
							dir: '/book/',
							sidebar: [
								{
									text: 'Book',
									link: '/en/book/',
									dir: '/book/',
									collapsed: true,
									items: [
										{
											text: 'How is steel made?',
											link: '/en/book/book-001/',
											dir:  '/book/book-001/',
											items: []
										}
									]
								}
							]
						},
						{
							text: 'Movie',
							link: '/movie/',
							dir: '/movie/',
							sidebar: [
								{
									text: 'Movie',
									link: '/en/movie/',
									dir: '/movie/',
									collapsed: true,
									items: [
										{
											text: 'Titanic',
											link: '/en/movie/movie-001/',
											dir:  '/movie/movie-001/',
											items: []
										}
									]
								}
							]
						},
					]
				},
			}
		},
		// 链接是否激活
		// activeMatch: '^/(blog|article|notes)/',
		footer: { message: '@All, may there be no war in the world.', copyright: '' },
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
