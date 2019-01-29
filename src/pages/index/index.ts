import { Vue, Component } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
import Newslist from '@/components/newslist.vue' // mpvue目前只支持的单文件组件

const debug = require('debug')('log:Index')

// 引入辅助方法
import { mapState,mapActions } from "vuex"

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    Newslist,
  },
  computed:{
    ...mapState({
      channels:state=>state['app'].channels,
      newsList:state=>state['app'].newsList
    })
  },
  methods:{
    ...mapActions({
      getTopData:"app/getTopData",
      getFeedData:"app/getFeedData"
    })
  }
})
class Index extends Vue {
  ver: number = 123
  current:number=0
  text:number=222
  newsList:any

  // get channels(){
  //   console.log(this.$store.state.app.channels,"...5")
  //   return this.$store.state.app.channels;
  // }

  onShow() { // 小程序 hook
    debug('onShow')
    this['getTopData']().then(()=>{
      let appUrl = this['channels'][0].appUrl
      this['getFeedData'](appUrl)
    })
    // this.$store.dispatch("app/getTopData")
    console.log(this.$store,"...1111")
  }


  handleChangeScroll(e){
    // console.log("e...",e)
    this.current = e.target.key
    // console.log(this['channels'][e.target.key].appUrl,"...0000")
    let appUrl = this['channels'][e.target.key].appUrl
    // 获取当前点击tab的appurl数据
    this['getFeedData'](appUrl)
  }

  // goDetaile(): void{
  //   wx.navigateTo({
  //     url: '/pages/detaile/main'
  //   });
  // }
}

export default Index
