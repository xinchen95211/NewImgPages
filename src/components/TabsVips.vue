<template>
  <nav class="navbar navbar-expand-lg"  style="width: 100%;height: 8vh" :class="isDark ? ' ':'lights'">
    <div class="container-fluid" >
      <el-dropdown trigger="click"  class="navbar-brand" @command="handleCommand">
    <span>
      <div>
          <el-avatar> user </el-avatar>
      </div>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="dark" v-if="!isDark">深色模式</el-dropdown-item>
            <el-dropdown-item command="dark" v-if="isDark">浅色模式</el-dropdown-item>
            <el-dropdown-item command="goback">返回上一页</el-dropdown-item>
            <el-dropdown-item command="retrievePassword">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <div  class="navbar-toggler" @click="goVideo">
        <div >视频站</div>
      </div>

      <button  class="navbar-toggler"  @click="drawer = true" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" ></span>
      </button>
      <div class="collapse navbar-collapse hidden-md-and-down" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              分类1
            </a>
            <ul class="dropdown-menu">
              <li v-for="(item,i) of tablebs"
                  :key="item"
              ><a  v-if="i % 5 === 0" class="dropdown-item"  @click="handleSelect(item.tablesname)">{{ item.name }}</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              分类2
            </a>
            <ul class="dropdown-menu">
              <li v-for="(item,i) of tablebs"
                  :key="item"
              ><a  v-if="i % 5 === 1" class="dropdown-item"  @click="handleSelect(item.tablesname)">{{ item.name }}</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              分类3
            </a>
            <ul class="dropdown-menu">
              <li v-for="(item,i) of tablebs"
                  :key="item"
              ><a  v-if="i % 5 === 2" class="dropdown-item"  @click="handleSelect(item.tablesname)">{{ item.name }}</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              分类4
            </a>
            <ul class="dropdown-menu">
              <li v-for="(item,i) of tablebs"
                  :key="item"
              ><a  v-if="i % 5 === 3" class="dropdown-item"  @click="handleSelect(item.tablesname)">{{ item.name }}</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              分类5
            </a>
            <ul class="dropdown-menu">
              <li v-for="(item,i) of tablebs"
                  :key="item"
              ><a  v-if="i % 5 === 4" class="dropdown-item"  @click="handleSelect(item.tablesname)">{{ item.name }}</a></li>
            </ul>
          </li>
        </ul>

        <div class="hidden-md-and-down" @click="goVideo" >
          <div >视频站</div>
        </div>
        <div class="d-flex" role="search" >
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="inputText">
          <button class="btn btn-outline-success" @click="handleSearch" >Search</button>
        </div>
      </div>

    </div>

  </nav>

  <el-drawer
      title="导航页"
      v-model="drawer"
      direction="ltr"
      :before-close="handleClose"
      size="50%"
      style="text-align: center;align-items: center"
  >
    <div>
      <el-input placeholder="请输入内容" v-model="inputText" class="input-with-select"  style="width: 100%">
      </el-input>
    </div>
    <el-button :icon="Search" @click="handleSearch"  style="width: 100%"></el-button>


    <div v-for="item of tablebs" :key="item">
      <el-button @click="handleSelect(item.tablesname)" style="width: 100%">
        {{item.name}}
      </el-button>
      <br>
    </div>
  </el-drawer>
</template>
<script>
import {Search} from '@element-plus/icons-vue'
import table from '@/assets/table.json'

export default {
  data(){
    return{
      dialogVisible: false,
      drawer: false,
      inputText:'',
      Search:Search,
      tablebs:table
    }
  },
  created() {

  },
  mounted(){
    this.openDark()

  },
  methods:{
    goVideo(){
      this.$router.push("/video")
    },
    handleCommand(command) {
      switch (command){
        case "dark":{this.toggleDark(); break}
        case "goback":{this.$router.go(-1);break}
        case "logout":{this.$router.replace("/logout");break}
        case "retrievePassword":{this.$router.replace("/retrievePassword");break}
        default : {console.log(command);break}
      }
    },
    handleClose(done) {
      done();
    },
    handleSelect(item){
      this.inputText = ''
      console.log(item)
      this.handleSearch()
      this.$emit("handleSelect",item)

    },
    handleSearch(){
      this.$emit("handleSearch",this.inputText)
    },
    toggleDark(){
      this.$emit("toggleDark")
    },
    openDark(){
      const html = document.querySelector('nav')
      if (html) {
        if (this.isDark) {
          html.setAttribute("data-bs-theme","dark")
        } else {
          html.removeAttribute("data-bs-theme")
        }
      }
    }

  },
  props:{
    isDark:Boolean,
  },
  watch:{
    isDark(){
      this.openDark();
    }
  }
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.lights{
  background-color: #e3f2fd;
}
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}



</style>