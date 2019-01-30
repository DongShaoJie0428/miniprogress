import { Vue, Component } from 'vue-property-decorator'
import {mapState, mapActions} from 'vuex'

// 必须使用装饰器的方式来指定component
@Component({
  computed: {
    ...mapState({
      content: state=>state['detaile'].content,
      info: state=>state['detaile'].info,
      comment:state=>state['detaile'].comment
    })
  },
  methods: {
    ...mapActions({
      getDetail: 'detaile/getDetail',
      getCommon:"detaile/getCommon"
    })
  }
})
class Detail extends Vue {
  msg: string = 'detail'
  placeholder: string = '写评论'
  isCollection: boolean = false
  page:number=1
  fontSize: number = 18

  // 格式化内容
  get formatContent(){
    return this['content'].map(item=>{
      if (typeof item == 'string'){
        return {
          type: 'text',
          content: item
        }
      }else{
        return item
      }
    })
  }

  // 格式化时间
  get publishTime(){
    let date = new Date(this['info'].publish_time*1000);
    let month = date.getMonth()+1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes();
    return `${month}-${day} ${hour}:${min}`;
  }

  onShow(){
    this['getDetail'](this.$root.$mp.query.id)
    this['getCommon']({groupId:this.$root.$mp.query.id,page:this.page})
  }
  
  // 改变字体大小
  changeAdd(type){
    if (type == "+") {
      if ( this.fontSize == 22 ) {
        return 
      }
      this.fontSize += 2
    } else {
      if (this.fontSize == 14) {
        return
      }
      this.fontSize -= 2
    }
  }
}

export default Detail