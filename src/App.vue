<template>
  <div id="app">     
<div>
  <b-navbar type="dark" variant="dark" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-nav-item href="#">PTEI DATA VISUALIZATION</b-nav-item>
       
        <b-nav-item-dropdown text="Admin"  align-self: flex-end>
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

<div class="jumbotron" >
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="row">
      <h2>ABOUT US</h2>
        <div >
          <p style="text-align: left">
            Phuket is among the world’s finest beach destinations, with fine white sands, 
            nodding palm trees, glittering seas and lively towns. It has something for any taste and budget, 
            with hundreds of hotels to choose from, a wide choice of dining and partying options.
          </p>   
        </div>
    </div>
    <hr>
    <div class="row">
      <h2>HOT TAG</h2>      
    </div>
    
    <div class="row">
      <b-btn class="tag" v-b-tooltip.hover title="Hello Phuket!">#Phuket</b-btn>
      <b-btn class="tag" v-b-tooltip.hover title="Hello Phuket!">#Phuket</b-btn>
      <b-btn class="tag" v-b-tooltip.hover title="Hello Phuket!">#Phuket</b-btn>
    </div>
    </div>

    <div class="col-md">
      <h2>LAST POPULAR</h2>
      <div class="row">
        
          <b-col>
              <b-img rounded blank width="150" height="90" blank-color="#777"  />
          </b-col>

               

    <div class="col-md-6">
      <p>YOUR BLOG TOURIST TRAVELLING IN PHUKET</p>
    </div>
  </div>
    </div>
    
  </div>
</div>
  </div>


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
.tag{
  margin-right: 10px;
}

.text{
  text-align: auto;
}








</style>