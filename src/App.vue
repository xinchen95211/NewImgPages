<template>
  <router-view></router-view>
</template>

<script>
import axios from "axios";

const checkToken = async () => {
  try {
    const response = await axios.get(`/api/login/CheckToken`);
    return response.data.code === 200 || response.data.code === 6000;
  } catch (error) {
    return false;
  }
}

export default {
  name:'app',
  data(){
    return{
      routerHide:true
    }
  },
  created() {

    if (localStorage.getItem("token") != null){
      if (checkToken()){
        if (window.location.href.includes("login")){
          this.$router.push("/")
        }
      }
    }

    let uuid = localStorage.getItem("uuid");
    if (uuid == null){
      localStorage.setItem("uuid",this.$uuid.v4())
    }
  },

  methods:{
    async checkToken(){
      try {
        const response = await axios.get(`/api/login/CheckToken`);
        return response.data.code === 200 || response.data.code === 6000;
      } catch (error) {
        return false;
      }
    }
  }

}

</script>

<style scoped>

</style>
