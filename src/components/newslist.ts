import { Vue, Component } from 'vue-property-decorator'
import { mapMutations } from "vuex"
// 必须使用装饰器的方式来指定component
@Component({
  props: ['newsList'],
  methods:{
    ...mapMutations({
      deleteData:"app/deleteData"
    })
  }
})
export default class List extends Vue {
  goToDetaile(){
    wx.navigateTo({
      url: '/pages/detaile/main'
    })
  }
}