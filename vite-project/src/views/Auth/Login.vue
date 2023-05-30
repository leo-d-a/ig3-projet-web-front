<template>
  <div class="w-full max-w-lg mx-auto mt-24">
    <form @submit.prevent="login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="block text-gray-700 text-lg font-bold mb-4 mt-6">Se connecter</h1>
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
        <button @click="forgotPassword" class="text-accent hover:text-secondary text-sm font-bold mb-2">
          J'ai oublié mon mot de passe
        </button>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-accent hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Se Connecter
        </button>
        <p v-if="requestError" class="text-red-500 text-xs italic">{{requestError}}</p>
        <button @click="goToSignup" class="text-accent hover:text-secondary text-sm font-bold mb-2">
          S'inscrire
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      requestError: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/login', {
          email: this.email,
          password: this.password
        });

        if (response.data.success) {
          // handle success
        } else {
          this.requestError = 'Une erreur est survenue lors de la connexion.';
        }
      } catch (error) {
        this.requestError = 'Une erreur est survenue lors de la connexion.';
      }
    },
    forgotPassword() {
      // handle forgot password
    },
    goToSignup() {
      this.$router.push('/signup');
    }
  }
}
</script>
