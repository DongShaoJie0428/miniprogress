import {getDetail,getCommon} from '@/data/index'
const state = {
  content: [],
  info: {},
  comment: [],
  comment_count: 0,
  current: 1
}

const mutations = {
  updateState(state, info){
    state = Object.assign(state, info);
  }
}

const actions = {
  // 获取详情
  async getDetail({commit}, id){
    let data = await getDetail(id);
    console.log('data...', data);
    commit('updateState', {
      comment_count: data.data.comment_count,
      content: data.data.content,
      info: data.data
    })
  },
  // 获取评论
  async getCommon({commit},{groupId,page}){
    let common = await getCommon(groupId,(page-1)*20)
    console.log(common,"///00000page")
    commit("updateState",{
      comment:common.data
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
