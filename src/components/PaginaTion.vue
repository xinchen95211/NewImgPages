<template>
  <el-pagination
      :page-size="24"
      :pager-count="11"
      background layout="prev, pager, next"
      :total="totalCount"
      :current-page="currentPage"
      :hide-on-single-page="totalCount <= 24"
      @update:current-page="pageTurning"

  />
</template>

<script>
export default {
  name: "PaginaTion",
  data(){
    return{

    }
  },
  methods:{
    pageTurning(e){
      console.log(e)
      this.$emit("pageTurning",e)
    }
  },
  props:{
    totalCount:Number,
    currentPage:Number
  }
}
</script>

<style scoped>

</style>