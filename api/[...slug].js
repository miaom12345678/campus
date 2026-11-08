/**
 * Vercel catch-all 路由：/api/* 的所有请求都进这里，交给 api/index.js 的 handler 处理。
 *
 * 为什么要这个文件：
 *   Vercel 的函数路由是「一个文件 = 一个路径」，api/index.js 只对应 /api 本身，
 *   所以 /api/health 之类必须靠 catch-all 文件名 [...slug].js 才能匹配。
 *   Vercel 匹配后会把路径段放进 req.query.slug（如 ['health'] / ['demo','clear']），
 *   后端据此判断调用的是哪个接口。
 *
 * 为什么不用 vercel.json 里的 rewrites 转发：
 *   因为 rewrite 会把函数收到的 req.url 替换成目标路径（/api/index.js），
 *   原始接口名就丢了，结果所有接口都返回「接口不存在」。实测已验证。
 */
module.exports = require('./index.js');
