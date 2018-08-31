<template>
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
</template>

<script>
    export default {
        name : 'blog',
        data() {
          return{
              blog : {
                title :"",
              content: ""
              }
          }
        },
        methods : {

        }
    }
</script>

