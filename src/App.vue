<template>
  <div id="app">     
<div>
  <b-navbar type="dark" variant="dark" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-nav-item href="#">PTEI DATA VISUALIZATION</b-nav-item>
       
        <b-nav-item-dropdown text="Admin" right>
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
<div id="img">

  <!--<b-navbar type="light" variant="light">-->
    <b-nav-form >
      <b-form-input class="mr-sm-2" type="text" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
  <!--</b-navbar>-->
</div>

<div id="blog">
<div class="container">
  <div class="row">
    <div class="col-sm-8">
      <img src= "https://picsum.photos/600/300/?image=25" >
    </div>
    <div class="col-sm-4">
      <p id="text-blog">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>
</div>

<div id="blog">
<div class="container">
  <div class="row">    
    <div id="text-blog" class="col-sm-4">
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <div class="col-sm-8">
      <img src= "https://picsum.photos/600/300/?image=25" >
    </div>

  </div>
</div>
</div>

<div id="blog">
<div class="container">
  <div class="row">
    <div class="col-sm-8">
      <img src= "https://picsum.photos/600/300/?image=25" >
    </div>
    <div class="col-sm-4">
      <p id="text-blog">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>
</div>

        <router-view></router-view>
    </div>
</template>

<script>
import login from "./components/login.vue";

export default {
  name: "app",
  components: {
    login
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

</style>