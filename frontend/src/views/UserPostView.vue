<template>
  <div class="headerInscr">
    <h2 class="title2">Fil d'actualité</h2>
    <create-post-form v-if="connectedUserId "/>

    <p class="inscrP">
      Ici, vous pouvez lire ce que vos collègues ont écrit ou partagé...
    </p>
    <Post  />
  </div>
</template>

<script>
import CreatePostForm from "../components/CreatePostForm.vue";
import Post from "../components/Post";
export default {
  name: "AllPost",
  components: {
    Post,
    CreatePostForm,
  },
    data() {
    return {
      connectedUserId: localStorage.getItem("Id"),
      first_name: "",
      last_name: "",
      posts: [],
      title: "",
      body: "",
      idUser: "",
    };
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
  color: #1e81b0;
  font-size: 30px;
}
.inscrP {
  text-align: center;
  font-style: italic;
  color: rgba(5, 0, 0, 0);
}
</style>
