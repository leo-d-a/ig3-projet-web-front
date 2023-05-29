<template>
  <div class="training-section">
    <button class="add-course-btn" v-if="isAdmin" @click="showAddCoursePanel = !showAddCoursePanel">
      <span v-if="!showAddCoursePanel">Ajouter une formation</span>
      <span v-else>Fermer</span>
    </button>

    <transition name="slide-fade">
      <div class="add-course-panel" v-if="showAddCoursePanel">
        <form class="add-course-form" @submit.prevent="addCourse">
          <div class="form-group">
            <label for="courseName">Libellé:</label>
            <input id="courseName" v-model="newCourse.libelle" placeholder="Course Name" required>
          </div>
          <div class="form-group">
            <label for="courseDescription">Description:</label>
            <textarea id="courseDescription" v-model="newCourse.description" placeholder="Description" required></textarea>
          </div>
          <div class="form-group">
            <label for="courseStartDate">Date de début:</label>
            <input id="courseStartDate" v-model="newCourse.dateDébut" type="date" required>
          </div>
          <div class="form-group">
            <label for="courseEndDate">Date de fin:</label>
            <input id="courseEndDate" v-model="newCourse.dateFin" type="date" required>
          </div>
          <div class="form-group">
            <label for="coursePrice">Prix:</label>
            <input id="coursePrice" v-model="newCourse.prix" type="number" placeholder="Price" required>
          </div>
          <div class="form-group">
            <label for="courseSeats">Nombre de places:</label>
            <input id="courseSeats" v-model="newCourse.nbPlaces" type="number" placeholder="Number of places" required>
          </div>
          <div class="form-group">
            <input type="submit" value="Créer">
          </div>
        </form>
      </div>
    </transition>

    <!-- ... rest of your component ... -->
  </div>
</template>

<script>
// ... your script remains unchanged ...
</script>

<style scoped>
.training-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.add-course-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-course-btn:hover {
  background-color: #45a049;
}

.add-course-panel {
  width: 100%;
  max-width: 500px;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.add-course-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  
}

.form-group label {
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
}

.form-group input[type=submit] {
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-group input[type=submit]:hover {
  background-color: #45a049;
}

/* Transition styles */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
