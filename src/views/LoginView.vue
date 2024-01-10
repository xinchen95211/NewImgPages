<template>
    <div class="login-wrapper" >
      <login-components ></login-components>
      <div class="msg">
        <a style="color: blue" @click="this.$router.push('/retrievePassword')">忘记密码</a>
      </div>
      <div class="msg">
        没有账户?
        <a style="color: blue" @click="this.$router.push('/register')">注册一个</a>
      </div>
    </div>
</template>
<script>
import LoginComponents from "@/components/LoginComponents.vue";
export default {
  name: "LoginView",
  components: {
    LoginComponents,
  },
  data(){
    return{

    }
  },
  methods:{
    testLogin(){
      localStorage.setItem("token","test")
    }
  }
}
</script>

<style>

</style>
