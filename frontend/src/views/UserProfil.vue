<template>
<div class="headerInscrr">
    <h2 class="title2">Profil</h2>
    <p class="inscrP">Ici, vous pouvez voir tout les profils utilisateurs ou supprimer votre compte du forum...</p>
   
    <ProfilForm/>
    >
</div>
</template>

<script>
import ProfilForm from '../components/ProfilForm.vue'


export default {
    name: 'Profil',
    components: {
    
      ProfilForm
    }
}
</script>

<style scoped>
.headerInscr{
display: flex;
flex-direction: column;
align-items: center;
}
.title2{
    text-align: center;
    color: #1e81b0;
    font-size: 30px;
    
}

.inscrP{
    text-align: center;
    font-style: italic;
}

 @media all and (max-width: 599px)
 {
  .headerInscr{
      margin-bottom:50px;
  }   
 }
</style>