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
      listTojson: state => state["app"].listTojson
    })
  },
  methods:{
    ...mapActions({
      getTopData:"app/getTopData",
      getFeedData:"app/getFeedData",
      getMore:"app/getMore"
    })
  }
})
class Index extends Vue {
  ver: number = 123
  current:number=0
  text:number=222
  newsList:any
  isRefresh: boolean = false

  onShow() { // 小程序 hook
    debug('onShow')
    this['getTopData']().then(()=>{
      let appUrl = this['channels'][0].appUrl
      this['getFeedData'](appUrl)
    })
    // this.$store.dispatch("app/getTopData")
    console.log(this.$store,"...1111")
  }

  // tab切换
  handleChangeScroll(e){
    // console.log("e...",e)
    this.current = e.target.key
    // console.log(this['channels'][e.target.key].appUrl,"...0000")
    let appUrl = this['channels'][e.target.key].appUrl
    // 获取当前点击tab的appurl数据
    this['getFeedData'](appUrl)
  }

  //上拉加载生命周期
  onReachBottom() {
    this.isRefresh = true;
    setTimeout(() => {
      this.isRefresh = false;
    }, 2400);
    this.loadData();
  }
  //点击刷新按钮加载
  refreshPage() {
    this.isRefresh = true;
    setTimeout(() => {
      this.isRefresh = false;
    }, 2400);
    this.loadData();
  }
  // 加载下一页
  loadData() {
    let appUrl = this["channels"][0].appUrl;
    // console.log(appUrl, 'appUrl')
    this["getMore"](appUrl).then(() => {
      this.isRefresh = false;
    });
  }

}

export default Index
