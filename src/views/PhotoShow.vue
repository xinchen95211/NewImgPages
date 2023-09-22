<template>
<div :class="isDark ? 'darks':''">
  <el-row :gutter="5" >
    <div class="centers"><h3>{{nameS}}</h3></div>

    <el-col :xs="24"
            v-for="(item,i) in imgList"
            :key="item"
            v-loading="loading[i] != false"
            element-loading-text="正在拼命加载中..."
            element-loading-svg-view-box="-10, -10, 50, 50"
    >
        <div  class="related_box">
          <el-image
              :src="item"
              fit="cover"
              :preview-src-list="imgList"
              class="el-image"
              @load="loading[i] = false"
          >
          </el-image>
        </div>

    </el-col>
  </el-row>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "PhotoShow",
  data(){
    return{
      loading:[],
      nameS: "",
      prefix: "",
      suffix: "",
      collection:[],
      imgList:[],
      isDark:false
    }
  },
  created() {
    this.mount(this.id);
    let item = localStorage.getItem("isDark");
    this.isDark = (item === "0");
  },
  methods:{
    mount(id){
      axios.get("https://vernelproxy.dynv6.net/proxy/frp-oak.top:14850/photo/" + id).then(res => {
        this.nameS = res.data.name;
        this.prefix = res.data.prefix;
        this.suffix = res.data.suffix;
        res.data.collection.forEach(item => {
          this.imgList.push(this.prefix + this.suffix + '/' + item)
        })
      }).catch(error => {
            console.log("error" + error)
          }
      )
      console.log(id)
    }
  },
  props:{
    id:String
  }

}
</script>

<style scoped>
.related_box {
  height:100%;
  text-align: center;
}
.centers{
  margin: 0 auto;
}
.darks{
  color: pink;
  background-color: black;
}
</style>
