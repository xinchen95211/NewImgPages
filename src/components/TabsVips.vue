<template>
  <nav class="navbar navbar-expand-lg" :class="isDark ? ' ':'lights'">
    <div class="container-fluid">
      <a class="navbar-brand" @click="handleSelect('Aiyouwu')">Navbar</a>
      <div @click="toggleDark" class="navbar-toggler">
        <div v-if="isDark" ><el-icon size="30"  color="green"><Moon /></el-icon></div>
        <div v-if="!isDark" ><el-icon size="30"  ><Sunny /></el-icon></div>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
        <div @click="toggleDark" class="hidden-md-and-down">
          <div v-if="isDark" ><el-icon size="25"  color="green"><Moon /></el-icon></div>
          <div v-if="!isDark" ><el-icon size="25"  ><Sunny /></el-icon></div>
        </div>
        <div class="d-flex" role="search" >
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="inputText">
          <button class="btn btn-outline-success" @click="handleSearch" >Search</button>
        </div>
      </div>

    </div>

  </nav>


</template>
<script>
import  Search  from '@element-plus/icons-vue'
import table from '@/assets/table.json'
export default {
  data(){
    return{
      inputText:'',
      tablebs:table,
      Search:Search,
    }
  },
  created() {
    this.openDark();
  },
  methods:{
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
    isDark:Boolean
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




</style>