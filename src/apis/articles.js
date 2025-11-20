import { request } from "@/utils"

// 获取频道列表
export const getChannelAPI = () => {
  return request({
    url: '/channels',
    method: 'GET'
  })
}