import { useState, useEffect } from "react"
import { getChanneAPI } from "@/apis/article"

function useChannel ()  {
    const [channelList, setChannelList] = useState([])
  useEffect(() => {
    const getChannelList = async () => {
      const res = await getChanneAPI()
      setChannelList(res.data.channels)
    }
    getChannelList()
  }, [])
  return {
    channelList
  }
}

export {useChannel}