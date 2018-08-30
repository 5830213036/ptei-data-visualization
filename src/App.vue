<template>
  <div id="app">     
<div>
  <b-navbar type="dark" variant="dark" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-nav-item href="#">PTEI DATA VISUALIZATION</b-nav-item>
       
        <b-nav-item-dropdown text="Admin" align-self: flex-end>
          <b-dropdown-item href="">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
<!-- image -->
<div>
  <b-img src="https://picsum.photos/1024/400/?image=41" fluid-grow />
</div>
<!-- search -->
<search/>
<!--blog-->
<blog/>
<!--Pagination -->
<pagination/>
<!--picture-->
<picture1/>
<!--Footer-->


<router-view></router-view>
    </div>
</template>

<script>
import login from "./components/login.vue";
import blog from "./components/blog.vue";
import search from "./components/search.vue";
import pagination from "./components/pagination.vue";
import picture1 from "./components/picture1.vue";


export default {
  name: "app",
  components: {
    login,
    blog,search,pagination,picture1
  },
  data() {
    return {
      username: "a",
      password: "a"
    };
  },
  mounted() {
    if ((!this.username, !this.password)) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    logout() {
      this.username = false;
      this.password = false;
    },
    setAuthenticated(status) {
      this.authenticated = status;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
#blog{
  margin-top: 10px;
}
#text-blog{
  margin-top: 100px;
  
}
#img{
  margin-top: 10px;
  display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
}
#page{
  margin-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  
}





</style>