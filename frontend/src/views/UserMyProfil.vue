<template>
<div class="headerInscrr">
    <h2 class="title2">Profil</h2>
    <p class="inscrP">Ici, vous pouvez voir votre profil utilisateur ...</p>
    <MyProfilForm/>
    <UserUpdateProfil/>
</div>
</template>

<script>
import MyProfilForm from '../components/MyProfilForm'
import UserUpdateProfil from '../components/UserUpdateProfil.vue'
export default {
    name: 'MyProfil',
    components: {
    MyProfilForm,
    UserUpdateProfil
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