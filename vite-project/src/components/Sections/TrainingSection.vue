<template>
  <div id="training">
    <div class="bg-background text-text p-4 justify-center rounded-2xl card" >
    <button class="add-course-btn bg-none mb-4 mx-5 text-text" v-if="isAdmin" @click="showAddCoursePanel = !showAddCoursePanel">Ajouter une formation</button>

    <div v-if="showAddCoursePanel" style="min-width: 600px;">
      <form class="add-course-form flex flex-col" @submit.prevent="addCourse">
        <label for="courseName" class="text-white">Libellé:</label>
        <input id="courseName" v-model="newCourse.libelle" placeholder="Entrez un libellé" required class="bg-white text-black mb-2">
        <label for="courseDescription" class="text-white">Description:</label>
        <textarea id="courseDescription" v-model="newCourse.description" placeholder="Entrez une description" required class="bg-white text-black mb-2"></textarea>
        <label for="courseStartDate" class="text-white">Date de début:</label>
        <input id="courseStartDate" v-model="newCourse.dateDébut" type="Date de début" required class="bg-white text-black mb-2">
        <label for="courseEndDate" class="text-white">Date de fin:</label>
        <input id="courseEndDate" v-model="newCourse.dateFin" type="Date de fin" required class="bg-white text-black mb-2">
        <label for="coursePrice" class="text-white">Prix:</label>
        <input id="coursePrice" v-model="newCourse.prix" type="number" placeholder="Prix" required class="bg-white text-black mb-2">
        <label for="courseSeats" class="text-white">Nombre de places:</label>
        <input id="courseSeats" v-model="newCourse.nbPlaces" type="number" placeholder="Nombre de places disponibles" required class="bg-white text-black mb-2">
        <button @click="redirectTo('https://www.youtube.com/watch?v=z_HWtzUHm6s')" class="bg-primary text-black mt-4 px-4 py-2 rounded">Créer la formation !</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showAddCoursePanel: false,
      newCourse: {
        libelle: '',
        description: '',
        dateDébut: '',
        dateFin: '',
        prix: '',
        nbPlaces: '',
      },
      isAdmin: true, 
    };
  },
  methods: {
    async addCourse() {
      try {
        const response = await axios.post('http://localhost:3000/formations', this.newCourse); 
        this.courses.push(response.data);
        this.showAddCoursePanel = false;
        this.newCourse = {
          libelle: '',
          description: '',
          dateDébut: '',
          dateFin: '',
          prix: '',
          nbPlaces: '',
        };
      } catch (error) {
        console.error(error);
      }
    },
    goToShrek() {
      this.$router.push('');
    }
  },
};
</script>

<style scoped>

#training {
  display: flex;
  width: 100%;
  justify-content: center;
}

.card {
  display: flex;
  width: 34vw;
  justify-content: center;
  flex-wrap: wrap;
}

</style>


