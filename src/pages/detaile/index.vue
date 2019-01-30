<template>
  <div class="container">
    <h1>{{info.title}}</h1>
    <section class="media">
      <img :src="info.media_user.avatar_url" mode="widthFix">
      <div class="media-user">
        <p>{{info.media_user.screen_name}}
          <span v-if="info.media_user.user_auth_info">{{info.media_user.user_auth_info.auth_info}}</span>
        </p>
        <p>{{publishTime}}</p>
      </div>
      <div class="action">
        <button>A+</button>
        <button>A-</button>
      </div>
    </section>
    <section class="content">
      <li v-for="(item, index) in formatContent" :key="index">
        <p v-if="item.type=='text'">{{item.content}}</p>
        <img v-else-if="item.type=='image'" mode="widthFix" :src="item.info.src" :alt="item.info.alt">
        <video v-else-if="item.type=='video'" :src="item.info"></video>
      </li>
    </section>

    <section class='about-pl'>
      <h1 class='about'>热门评论</h1>
      <div v-for="(itm,key) in comment" :key="key" class='per'>
        <img :src="itm.comment.user_profile_image_url" alt="">
        <div class='per-div'>
          <div class='txh'>
            <span class='names'>{{itm.comment.user_name}}</span>
            <div class="praise">
              <i-icon type="praise" size="30" />
              <span>{{itm.comment.reply_count}}</span>
            </div>
          </div>
          <p class='ovhi'>{{itm.comment.text}}</p>
          <!-- <p class='times'>{{itm.comment.create_time}}</p> -->
        </div>
      </div>
    </section>


    <footer>
      <i-icon type="editor" size="20" class="editor"/>
      <input type="text" :placeholder="placeholder">
      <i-icon type="interactive" size="26"/>
      <i-icon :type="isCollection?'collection_fill':'collection'" size="26"/>
      <button open-type="share">
        <i-icon type="share" size="26"/>
      </button>
      <i-icon type="share" size="26"/>
    </footer>


  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="less" scoped>
.container{
  padding: 30rpx 20rpx;
  li{
    margin: 15rpx 0;
  }
  p{
    font-size: 36rpx;
  }
  h1{
    text-align: left;
    font-size: 48rpx;
    font-weight: 800;
    width: 100%;
  }
}
.media{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 20rpx 0 10rpx;
  img{
    width: 50rpx;
  }
  .media-user{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    flex: 1;
    margin-left: 20rpx;
    p:first-child{
      font-size: 30rpx;
      color: #333;
      span{
         font-size: 20rpx;
         color: #fff;
         background: red;
         border-radius: 10rpx;
         padding: 0 5rpx;
      }
    }
    p:last-child{
      font-size: 24rpx;
      color: #999;
    }
  }
  .action{
    button{
      display: inline-block;
      font-size: 28rpx;
      color: #333;
      line-height: 1.5;
      margin-left: 10rpx;
    }
  }
}
.content{
  img,video{
    width: 100%;
  }
}
footer{
  width: 100%;
  padding: 5rpx 15rpx;
  box-sizing: border-box;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input{
    background: #ccc;
    border-radius: 20rpx;
    padding: 0 50rpx;
    width: 50%;
    box-sizing: border-box;
    font-size: 28rpx;
  }
  .editor{
    position: absolute;
    top: 22rpx;
    left: 20rpx;
    z-index: 1000;
  }
}

.about-pl {
    width: 96%;
    margin: 0 2%;
    padding-bottom: 100rpx;
    box-sizing: border-box;
    margin-top:10px;
    border-top:solid 1px #ccc;
  }

  .about {
    font-size: 32rpx;
    border-left: 2px solid red;
    padding-left: 10rpx;
    margin: 5px;
  }

  .per {
    display: flex;
    margin: 30px 0;
    font-size: 16rpx;
  }

  .per img {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    margin-top: 20rpx;
  }

  .per .per-div {
    flex: 1;
    padding-left: 20rpx;
    box-sizing: border-box;
  }

  .per-div .txh {
    display: flex;
    justify-content: space-between;
    padding-right: 20rpx;
    box-sizing: border-box;
    font-size: 34rpx;
    line-height: 1.5;

    .names {
      color: blue;
    }

  }

  .per-div .ovhi {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 34rpx;
    line-height: 1.5;
  }

  .per-div .times {
    line-height: 1.5;
  }
</style>