'use strict'

const isProd = process.env.NODE_ENV === 'production'

const baseApiUrl = isProd ? 'https://api.jooger.me' : 'http://127.0.0.1:8080'

export default {

  service: {
    url: '/',
    method: 'get',
    baseURL: baseApiUrl,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json'
    },
    timeout: 12000,
    responseType: 'json'
  },
  codeMap: {
    FAILED: -1,
    SUCCESS: 200,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    SERVER_ERROR: 500,
    PARAMS_ERROR: 10001
  },
  storage: {
    userKey: isProd ? 'jooger.me.user' : 'jooger.me.user_dev',
    userLikeKey: isProd ? 'jooger.me.user.like_history' : 'jooger.me.user.like_history_dev'
  },
  auth:{
    githubTokenKey:'jooger.me.github.token',
    roleMap:['管理员','普通用户','GitHub用户']
  },

  constant: {
    menus: [
      {key: 'index', title: '首页', icon: 'home'},
      {key: 'archive', title: '分类', icon: 'archive'},
      {key: 'guestbook', title: '留言墙', icon: 'guestbook'},
      {key: 'about', title: '关于', icon: 'about'}
    ],
    socials:[
      {title:'Email',icon:'email',url:'mailto:onwl007@126.com'},
      {title:'GitHub',icon:'github',url:'https://github.com/onwl007'},
      {title:'知乎',icon:'zhihu',url:'https://www.zhihu.com'},
      {title:'微博',icon:'weibo',url:'https://weibo.com/onwl007'},
      {title:'网易云音乐',icon:'netease-music',url:'http://music.163.com/#/user/home?id=83639314'}
    ],
    shares:[
      { key: 'link', title: '复制链接' },
      { key: 'wechat', title: '微信' },
      { key: 'weibo', title: '微博' },
      { key: 'qzone', title: 'QQ空间' },
      { key: 'douban', title: '豆瓣' },
      { key: 'evernote', title: '映象笔记' },
      { key: 'twitter', title: 'Twitter' },
      { key: 'facebook', title: 'Facebook' },
      { key: 'mail', title: '邮箱' }
    ]
  }
}
