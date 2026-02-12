import { request } from "@/utils";
//获取频道列表
export function getChanneAPI(formData) {
  return request({
    url: '/channels',
    method: 'GET'
  })
}
//提交文章表单
export function createArticleAPI(data) {
  return request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data
  })
}
//渲染文章列表
export function getArticleListAPI(params) {
  return request({
    url: '/mp/articles',
    method: 'GET',
    params
  })
}
