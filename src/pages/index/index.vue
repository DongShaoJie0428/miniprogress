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
    <Newslist :newsList="listTojson"/>
    
    <!-- refresh刷新 -->
    <p :class="{refresh:true, active:isRefresh}" @click="refreshPage">
      <img src="../../../static/refresh.png" alt="">
    </p>
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
.refresh{
  position: fixed;
  bottom:20px;
  right:30px;
  width:60px;
  height:60px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 3px 1px #c0c0c0;
  img{
    width:40px;
    height:40px;
    position:absolute;
    left:10px;
    top:10px;
  }
}
.refresh.active{
  animation: rotateD .8s linear infinite;
}
@keyframes rotateD {
  0%{
    transform: rotate(0)
  }
  100%{
    transform: rotate(360deg)
  }
}
</style>
