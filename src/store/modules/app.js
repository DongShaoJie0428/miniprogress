import {getTopData,getFeed} from "@/data/index"

const state = {
  channels: [],
  newsList: []
}

const mutations = {
  // 更新头部信息
  updateChannels(state,channels){
    state.channels = channels.filter(item=>{
      return !item.defaultNotShow
    })
  },
  // 更新列表数据
  updataFeedData(state,newsList){
    state.newsList = newsList
    state.hot_time = newsList.map(item=>{
      return item.content.behot_time
    }).sort((a,b)=>b-a)[0]
  },
  // 删除数据
  deleteData(state,id){
    let index = state.newsList.findIndex(item=>{
      return item.content.item_id = id
    })
    state.newsList.splice(index,1)
  }
}

const actions = {
  // 获取tab数据
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