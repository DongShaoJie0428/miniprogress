<template>
  <div class="warp">
    <!-- 头部 -->
    <div class="top">
      <i-icon type="search" size="28" color="#000" />
      <i-tabs :current="current" scroll @change="handleChangeScroll" color="#D33D3E">
        <i-tab v-for="(item,index) in channels" :key="index" :title="item.name"></i-tab>
      </i-tabs>
      <div class="icon">
        <i-icon type="add" size="28" color="#000" />
        <i-icon type="group" size="28" color="#000" />
      </div>
    </div>
    <!-- list列表 -->
    <div class="list">
      <div class="list_content" v-for="(item,index) in newsList" :key="index">
        <span>{{item.content.abstract}}</span>
        <div class="list_bot">
          <p>{{item.content.media_name}}</p>
          <p>{{item.content.share_count}}评论</p>
        </div>
      </div>
    </div>
    
    <!-- <button @click="goDetaile">去详情</button> -->
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts">
</script>


<style lang="less" scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.wrap{
  width:100%;
  height:100%;
}
.top{
  width:100%;
  height:60px;
  display:flex;
  align-items: center;
  justify-content:space-between;
  padding-left:5px;
  padding-right:5px;
  border-bottom:solid 1px #ccc;
  .icon{
    width:70px;
    i-icon{
      padding:0 3px;
    }
  }
  i-tabs{
    flex: 1;
    overflow: hidden;
  }
}
.list{
  width:100%;
  .list_content{
    width:100%;
    padding:10px 0;
    border-bottom: solid 1px #ccc;
    padding:10px 15px;
    box-sizing: border-box;
  }
  .list_bot{
    width:100%;
    height:30px;
    line-height: 30px;
    color:#cce;
    margin-top:5px;
    display: flex;
    p:nth-child(2){
      padding-left:10px;
    }
  }
}

</style>
