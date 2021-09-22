<template>
  <div class="headerInscr">
    <h2 class="title2">Fil d'actualité</h2>
   <create-post-form />

    <p class="inscrP">
      Ici, vous pouvez lire ce que vos collègues ont écrit ou partagé...
    </p>
    <Post />
  </div>
</template>

<script>

import CreatePostForm from "../components/CreatePostForm.vue"
import Post from "../components/Post";
export default {
  name: "AllPost",
  components: {
    Post,
    CreatePostForm,
  },
};
</script>

<style scoped>
.headerInscr {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}
.title2 {
  text-align: center;
  color: rgb(252, 5, 5);
  box-shadow: 10px 5px 5px red;
}
.inscrP {
  text-align: center;
  font-style: italic;
  color: rgba(5, 0, 0, 0);
}
</style>
