<template>
  <el-row :gutter="5">
    <el-col :xs="12" :sm="12" :md="8" :lg="4"
            v-for="(item,i) in imglist"
            :key="item"
            v-loading="loading[i] != false"
            element-loading-text="正在拼命加载中..."
            element-loading-svg-view-box="-10, -10, 50, 50"
    >
            <el-card  :body-style="{ padding: '2px' }" @click="selectItem(item.id)">
              <div  class="related_box">
                <el-image
                    :src="item.thumbnail"
                    fit="cover"
                    class="el-image"
                    @load="loading[i] = false"
                >
                </el-image>
                <div>
                  <span>{{item.name}}</span>
                </div>
              </div>
            </el-card>

    </el-col>
  </el-row>





</template>

<script>

export default {
  name: 'PhotoCard',
  data(){
    return{
      loading:[]
    }
  },
  methods:{
    selectItem(id){
      this.$emit("selectItem",id)
    },
    clearLoading(){
      console.log('方法被调用了')
      this.loading = []
    }
  },
  props: {
    imglist: Array,
  }
}

</script>

<style scoped>

.related_box {
  height:548px;
  text-align: center;
}
.el-image {
  height: 85%;
  border-radius: 10px;
}

</style>