<template>
 <div id="blog">
        <h2>Add a New Blog Post</h2>
        <form action="">
          <label for="">Blog Title :</label>
          <input type="text" v-model.lazy="blog.title" required/>
          <label for="">Blog Content :</label>
          <textarea v-model.lazy="blog.content" name="" id="" cols="30" rows="10"></textarea>
        </form>

<div id="preview">
<h3>Preview Blog</h3>
<p>Blog Title : {{ blog.title }}</p>
<p>Blog Content : {{ blog.content }}</p>

        </div>
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

<style>
#add-blog *{
  box-sizing: border-box ;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block ;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block ;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px ;
  border: 1px dotted #ccc ;
  margin: 30px 0 ;
}
</style>
