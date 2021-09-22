<template>
  <div id="user">
    <h3 class="manager-title font-italic">Mon profil...</h3>
    <div class="my">
      <div class="a">
        <span class="ok">Prénom:</span>
        <span class="ff">{{ user.first_name }}</span>
      </div>
      <div class="a">
        <span class="ok">Nom:</span>
        <span class="ff"> {{ user.last_name }}</span>
      </div>
      <div class="a">
        <span class="ok">Email:</span> <span class="ff">{{ user.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProfil",
  data() {
    return {
      user: "",
      first_name: "",
      last_name: "",
      email: "",
    };
  },
  mounted() {
    //Obtenir mon profil
    fetch(
      "http://localhost:3000/api/auth/userInfo/" +
        localStorage.getItem("email"),
      {
        method: "GET",
        headers: {
          //  'content-type': 'application/json',
          authorization: "bearer " + localStorage.getItem("token"),
        },
      }
    )
      .then((response) => response.json())

      .then((data) => (this.user = data));
  },
};
</script>

<style scoped lang="scss">
.ok {
  color:#1e81b0 
}
.my {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 100px;
  margin-top: 100px;
  font-weight: bold;
}

@media all and (max-width: 599px) {
  .my {
    display: flex;
    flex-direction: column;
  }
}
</style>
