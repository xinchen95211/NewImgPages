<template>
  <div style="position: relative;z-index: -999; ">
    <vue3VideoPlay v-bind="options" :poster="poster"/>
  </div>
<!--  <div class="zan">-->
<!--    <el-icon size="50px" color="skyblue" @click="selectStar(id)">-->
<!--      <star v-if="star"></star>-->
<!--      <star-filled v-if="!star"></star-filled>-->
<!--    </el-icon>-->
<!--  </div>-->
</template>

<script>
// import {Star, StarFilled} from "@element-plus/icons-vue";
import axios from "axios";

export default {
  name: "VideoShow",
  data(){
    return{
      options:{
        width: '800px', //播放器高度
        height: '450px', //播放器高度
        color: "#409eff", //主题色
        speed:true, //关闭进度条拖动
        title: '', //视频名称
        pageFullScreen:false,
        webFullScreen:true,
        src:"",
        controlBtns:['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'fullScreen']
      },
      poster:''
    }
  },
  created() {
    // this.poster=this.$route.query.poster
    // this.getVideoUrl(this.$route.query.id);
    this.getVideoUrl(this.id)
  },
  methods:{
    // selectStar(id){
    //   axios.get("api/video/like/" + id).then(e => {
    //     if (e.data.code === 2001) {
    //       this.stars = !this.stars
    //     }
    //   })
    // },
    getVideoUrl(id){
      axios.get(`/api/video/${id}`).then(e => {
        if (e.data.code === 200){
          console.log(e.data.data)
          this.options.src = e.data.data
        }
      })
    }
  },
  props:{
    id:String
  }
}
</script>

<style scoped>
.zan{
  float: right;
  margin-top:500px;
  margin-right: 10px;
}
</style>