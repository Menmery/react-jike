// 封装获取频道列表的逻辑
import { useState, useEffect } from "react"
import { getChannelAPI } from "@/apis/articles"

function useChannel() {
  // 获取频道列表
  const [channelList, setChannelList] = useState([])

  useEffect(() => {
    const getChannelList = async () => {
      const res = await getChannelAPI()
      setChannelList(res.data.channels)
    }
    getChannelList()
  }, [])

  // return组件要用到的数据
  return { channelList }
}

export { useChannel }