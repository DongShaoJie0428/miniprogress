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
class List extends Vue {

}

export default List
