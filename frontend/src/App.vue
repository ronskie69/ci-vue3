<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>
<script>
  import Navbar from './components/Navbar.vue';

  export default {
    name: 'App',
    components: { Navbar },
    beforeMount(){
      this.$store.commit('initializeUsers')
    }
  }
</script>
<style>
button, .btn {
  text-transform: none !important;
}
</style>