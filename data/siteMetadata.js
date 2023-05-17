const siteMetadata = {
  title: '程序员资源分享频道',
  author: '程序员资源分享频道',
  headerTitle: '程序员资源分享频道',
  description: `内容来自耗子维护的 Telegram 程序员资源分享群, 本群主要是技术资源分享，包括：技术资料、资源、工具、心得、热点等
为了让交流更多效率：1）鼓励有价值的内容、有深度的思考; 2）鼓励友善、互相帮助、努力学习的氛围；3）不要做伸手党、盗版党、破解党；4）提问前先看看《提问的智慧》； 5) 适当聊天讨论翻墙，千万不要灌水； 6）禁止开车、广告和商业推广； 7）禁止任何仇恨、煽动、歧视的言论； 8）禁止有政治、宗教、性别攻击倾向的言论； 9）禁止低级趣味下流庸俗的内容
  `,
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://gotoshare.dylanninin.com',
  siteRepo: 'https://github.com/goto-share/website',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'dylanninin@gmail.com',
  github: 'https://github.com/dylanninin',
  twitter: 'https://twitter.com/dylanninin',
  facebook: 'https://facebook.com/dylanninin',
  youtube: 'https://www.youtube.com/channel/UCPiHqi-QA7aGJ591unWuaMA',
  linkedin: 'https://www.linkedin.com/in/dylanninin',
  locale: 'en-US',
  postPerPage: 10,
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-D8H3QPTVY3', // e.g. UA-000000-2 or G-XXXXXXX
    posthogAnalyticsId: '', // posthog.init e.g. phc_5yXvArzvRdqtZIsHkEm3Fkkhm3d0bEYUXCaFISzqPSQ
  },
  newsletter: {
    // provider: 'buttondown',
    provider: '',
  },
  comment: {
    // https://vercel.com/docs/environment-variables
    provider: 'utterances', // supported providers: giscus, utterances, disqus
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: 'goto-share/website',
      issueTerm: 'pathname', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: 'github-light',
      // theme when dark mode
      darkTheme: 'github-dark',
    },
  },
}

module.exports = siteMetadata
