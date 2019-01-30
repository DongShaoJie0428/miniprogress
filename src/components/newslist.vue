<!-- 这是一个原生vue单文件 -->
<template>
  <div class="list">
    <div class="list_content" v-for="(item,index) in newsList" :key="index" >
      <div>
        <span class="text"  @click="goToDetaile(item.content.display_url)">{{item.content.abstract}}</span>
        <div class="gallery">
          <img :src="value.url" mode="widthFix" alt="" v-for="(value,key) in item.content.image_list" :key="key">
        </div>
        <div class="list_bot">
          <span class="hot" v-if="item.content.hot">热</span>
          <p>{{item.content.media_name}}</p>
          <p>{{item.content.share_count}}评论</p>
          <p @click="deleteData(item.content.item_id)"><span class="delete">X</span></p>
        </div>
        </div>
      <img mode="widthFix" :src="item.content.middle_image.url" v-if="!item.content.image_list && item.content.middle_image" alt="" class="middle-image">
    </div>
  </div>
</template>

<script lang="ts" src="./newslist.ts"></script>

<style lang="less" scoped>
.list{
  width:100%;
  font-size:16px;
  .list_content{
    width:100%;
    padding:10px 0;
    border-bottom: solid 1px #ccc;
    padding:10px 15px;
    box-sizing: border-box;
    display:flex;
    .middle-image{
      width:50%;
      padding-left: 10rpx;
    }
    &>div{
      width:100%;
    }
    .text{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  .gallery{
    width:100%;
    display:flex;
    justify-content:space-between;
    margin-top:5px;
    img:nth-child(2){
      padding:0 5px;
    }
  }
  
  .list_bot{
    position: relative;
    width:100%;
    height:30px;
    line-height: 30px;
    color:#cce;
    margin-top:5px;
    display: flex;
    font-size:14px;
    p:nth-child(2){
      padding-left:10px;
    }
    .hot{
      color:#D33D3E;
      border:solid 1px #D33D3E;
      padding:0 5px;
      border-radius:5px;
      font-size:14px;
    }
    .delete{
      position: absolute;
      right:5px;
      top:5px;
      padding: 0 3px;
      font-size: 12px;
      border:solid 1px #ccc;
      border-radius:10px;
    }
  }
}
</style>
