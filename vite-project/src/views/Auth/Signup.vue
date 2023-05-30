<template>
    <div class="w-full max-w-lg mx-auto mt-24">
      <form @submit.prevent="signup" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="block text-gray-700 text-lg font-bold mb-4 mt-6">S'inscrire !</h1>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="nom">
            Nom
          </label>
          <input v-model="nom" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nom" type="text" required>
        </div> 
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="prenom">
            Prénom
          </label>
          <input v-model="prenom" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="prenom" type="text" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Mot de Passe
          </label>
          <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" required>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword">
            Confirmer Mot de Passe
          </label>
          <input v-model="confirmPassword" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" required>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-accent hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Devenir Eleve
          </button>
          <button class="bg-accent hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Devenir Patient
          </button>
          <p v-if="requestError" class="text-red-500 text-xs italic">{{requestError}}</p>
        </div>
      </form>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      confirmPassword: '',
      requestError: ''
    }
  },
  methods: {
    async signup() {
      // Form validation
      if (this.password !== this.confirmPassword) {
        this.requestError = 'Les mots de passe ne correspondent pas.';
        return;
      }

      try {
        const response = await axios.post('/api/signup', {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          password: this.password
        });

        if (response.data.success) {
        } else {
          this.requestError = 'Une erreur est survenue lors de l\'inscription.';
        }
      } catch (error) {
        this.requestError = 'Une erreur est survenue lors de l\'inscription.';
      }
    }
  }
}
</script>

<style scoped>
</style>
