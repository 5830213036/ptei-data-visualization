<template>
    <div id="img">
  <!--<b-navbar type="light" variant="light">-->
    <b-nav-form >
      <b-form-input class="mr-sm-2" type="text" placeholder="Search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
  <!--</b-navbar>-->
</div>
</template>

<script>
    export default {
        name : 'search'
    }
</script>

<style>
#img{
  margin-top: 10px;
  display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
}
</style>
