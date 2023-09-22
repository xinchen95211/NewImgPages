<template>
  <div class="centers">
    <vue3VideoPlay v-bind="options" poster='https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg'/>
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "VideoShow",
  data(){
    return{
      options:reactive({
        width: '500px', //播放器高度
        height: '260px', //播放器高度
        color: "#409eff", //主题色
        currentTime:60,
        speed:false, //关闭进度条拖动
        title: '', //视频名称
        src: "https://huifaguang-my.sharepoint.com/personal/telegram3_huifaguang_onmicrosoft_com/_layouts/15/download.aspx?UniqueId=c97f3f4a-3019-4d5f-887c-c8a742daba25&Translate=false&tempauth=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaHVpZmFndWFuZy1teS5zaGFyZXBvaW50LmNvbUAzZjcyYzYxZi05OTUzLTQ5ZGItODYwYy00ZWU5ODE3ZDAzNjciLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjk1MzQ5MDE5IiwiZXhwIjoiMTY5NTM1MjYxOSIsImVuZHBvaW50dXJsIjoiTDNYUVhTQ05PMWo1aTl0dDJUN3JlRCtGUkQwTTBWL2c3bUIzQlJQbnROcz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjE3MCIsImlzbG9vcGJhY2siOiJUcnVlIiwiY2lkIjoiS2RNSE5PYVo3ME91anpyNVpIVVdLZz09IiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik5XTXhObUl6TnpRdE1XVTRZaTAwT0RKbUxXRTBPREV0WWpSaFpUazRZVGRqTkdZeiIsImFwcF9kaXNwbGF5bmFtZSI6Iua1i-ivlSIsImdpdmVuX25hbWUiOiJMdWNrIiwiZmFtaWx5X25hbWUiOiJMaXR0bGUiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwiYXBwaWQiOiJiYzYxNjEwNS01MDJkLTQ4NzEtOGFkZS03YzlkMDRiZjliZTkiLCJ0aWQiOiIzZjcyYzYxZi05OTUzLTQ5ZGItODYwYy00ZWU5ODE3ZDAzNjciLCJ1cG4iOiJ5aXpoaXNoYWJhaUBodWlmYWd1YW5nLm9ubWljcm9zb2Z0LmNvbSIsInB1aWQiOiIxMDAzMjAwMTg1QUQ5ODcyIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDE4NWFkOTg3MkBsaXZlLmNvbSIsInNjcCI6ImFsbGZpbGVzLnJlYWQgbXlmaWxlcy53cml0ZSBhbGxmaWxlcy53cml0ZSBhbGxzaXRlcy5yZWFkIGFsbHNpdGVzLndyaXRlIGFsbHByb2ZpbGVzLnJlYWQiLCJ0dCI6IjIiLCJpcGFkZHIiOiIyMC4xOTAuMTQ0LjE3MiJ9.t-GSS45ZpolE_qc0EK13ldQzSUGmOIdTRmtD9AHWiZI&ApiVersion=2.0", //视频源
      })
    }
  }
}
</script>

<style scoped>
.centers{
  margin: 0 auto;
}
</style>