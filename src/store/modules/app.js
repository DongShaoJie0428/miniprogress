import {getTopData,getFeed} from "@/data/index"

const state = {
  channels: [],
  listTojson:[],
  hot_time:''
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
    state.listTojson = newsList
    state.hot_time = newsList.map(item=>{
      return item.content.behot_time
    }).sort((a,b)=>b-a)[0]
  },
  // 删除数据
  deleteData(state,id){
    let index = state.newsList.findIndex(item=>{
      return item.content.item_id === id
    })
    state.newsList.splice(index,1)
  },
  // 上拉加载
  appendNewsList(state, list) {
    // console.log(state,list,"....0000")
    state.listTojson = [...state.listTojson, ...list];
    console.log(state.listTojson,'123456');
    // console.log(list,'list')
    state.hot_time = list.map(item=>{
      return item.content.behot_time;
    }).sort((a,b)=>b-a)[0];
  }
}

const actions = {
  // 获取tab数据
  async getTopData({commit}){
    let channels = await getTopData()
    commit('updateChannels', channels.channels[0]);
  },
  // 获取列表 数据
  async getFeedData({commit},url){
    let newsList = await getFeed(url)
    // 数据格式化
    newsList.data.forEach(item=>{
      item.content = JSON.parse(item.content)
      // console.log(item.content,"....0000")
    })
    commit("updataFeedData",newsList.data)
  },
  // 拼接路径  获取第二页数据
  async getMore({ commit, state }, url) {
    url += `&max_behot_time=${state.hot_time}`
    let news = await getFeed(url);
    news.data.forEach(item => {
      // 格式化content
      // console.log("item0000",item)
      item.content = JSON.parse(item.content)
    })
    commit('appendNewsList', news.data);
  }
}

export default {
  namespaced:true,
  state,
  actions,
  mutations
}