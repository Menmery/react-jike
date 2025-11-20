import { request } from "@/utils"

// 获取频道列表
export const getChannelAPI = () => {
  return request({
    url: '/channels',
    method: 'GET'
  })
}

// 提交文章
export const createArticleAPI = (data) => {
  return request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data
  })
}

// 获取文章列表
export const getArticleListAPI = (params) => {
  return request({
    url: '/mp/articles',
    method: 'GET',
    params
  })
}