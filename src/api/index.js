import request from '@/utils/request'
import Qs from "qs";
/*
 - 判断identifier是否存在，auth表
 */
export const judgeUserExist = (Identifier,IdentityType) => {
  return request({
    method: 'get',
    url: '/v1/user/judge?Identifier='+Identifier + "&IdentityType=" + IdentityType
  })
}
/*
 - 获取图像验证码
 */
export const goCaptchaData = () => {
  return request({
    method: 'get',
    url: '/v1/tool/go_captcha_data'
  })
}
/*
 - 校验图像验证码
 */
export const goCaptchaCheckData = (dotArr,key) => {
  return request({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    url: '/v1/tool/go_captcha_check_data',
    data: Qs.stringify({
      dots: dotArr,
      key: key
    })
  })
}
/*
 - 获取注册验证码
 */
export const registerCode = (identifier,identityType) => {
  return request({
    method: "post",
    url: "/v1/user/register_code",
    data: Qs.stringify({
      Identifier: identifier,
      IdentityType: identityType
    })
  })
}
/**
 * 注册功能
 */
export const registerAPI = (data) => {
  return request({
    method: "post",
    url: "v1/user/register",
    data
  })
}
/**
 * 登录功能
 */
export const loginAPI = (data) => {
  return request({
    method: "post",
    url: "v1/user/login",
    data
  })
}