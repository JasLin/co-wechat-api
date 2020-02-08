'use strict';

/**
 * 小程序接口: 通过code换去session信息
 * 详细见接口
 * @see https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html
*/
exports.code2session = async function (code) {
  let url = this.snsPrefix + `jscode2session?appid=${this.appid}&secret=${this.appsecret}&js_code=${code}&grant_type=authorization_code`;
  return this.request(url);
};
