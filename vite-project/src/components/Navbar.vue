<template>
  <nav class="bg-background text-text fixed w-full z-20 top-0 left-0 border-b border-primary">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center">
        <img src="../assets/images/logo.png" class="h-8 mr-3" alt="Liu Gan Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap">Tì Liu Gan</span>
      </router-link>
      <div class="flex space-x-5 md:order-2">
        <router-link to="/signup" class="text-text bg-primary hover:bg-accent focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">S'inscrire</router-link>
        <router-link to="/login" class="text-text bg-primary hover:bg-accent focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Se connecter</router-link>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-text rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
</style>
