<template>
  <div class="headerInscr">
    <h2 class="title2">Inscription</h2>
    <p class="inscrP">Inscrivez vous c'est rapide !</p>
    <InscriptionForm />
  </div>
</template>

<script>
import InscriptionForm from "../components/InscriptionForm";
export default {
  name: "HomeSignup",
  components: {
    InscriptionForm,
  },
};
</script>

<style scoped>
.headerInscr {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title2{
    text-align: center;
    color: #1e81b0;
    font-size: 30px;
    
}

.inscrP {
  text-align: center;
  font-style: italic;
  font-weight: 600;
}

@media all and (max-width: 599px) {
  .headerInscr {
    margin-bottom: 50px;
  }
}
</style>
