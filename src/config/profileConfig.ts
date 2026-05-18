import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/avatar.jpg",

	// 名字
	name: "想象一朵未来的玫瑰",

	// 个人签名
	bio: "命运不是生长在道路尽头的花朵，而是跨过门扉后，沿着花海的方向，自己踏出的小径",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "/qr/qq",
			showName: false,
		},
		// {
		// 	name: "wechat",
		// 	icon: "fa7-brands:weixin",
		// 	url: "/qr/wechat",
		// 	showName: false,
		// },
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/CAI-GUOWEI",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:2498329232@qq.com",
			showName: false,
		},
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/1726568878",
			showName: false,
		},
		{
			name: "netease",
			icon: "simple-icons:neteasecloudmusic",
			url: "https://music.163.com/#/user/home?id=1798459876",
			showName: false,
		},
	],
};
