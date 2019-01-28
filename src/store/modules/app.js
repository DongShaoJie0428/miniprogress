import {getTopData,getFeed} from "@/data/index"

const state = {
  channels: [],
  newsList: []
}

const mutations = {
  updateChannels(state,channels){
    state.channels = channels
  },
  updataFeedData(state,newsList){
    state.newsList = newsList
  }
}

const actions = {
  async getTopData({commit}){
    let channels = await getTopData()
    console.log(channels,"...channels")
    commit('updateChannels', channels.channels[0]);
  },
  async getFeedData({commit},url){
    let newsList = await getFeed(url)
    // 数据格式化
    newsList.data.forEach(item=>{
      item.content = JSON.parse(item.content)
      // console.log(item.content,"....0000")
    })

    commit("updataFeedData",newsList.data)
    console.log("newslist..",newsList.data)
  }
}

export default {
  namespaced:true,
  state,
  actions,
  mutations
}