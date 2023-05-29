<template>
  <div class="hero-section bg-cover bg-center " :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="content-container flex items-center justify-center h-full">
      <div class="container mx-auto px-4 py-16 text-center">
        <h1 class="text-4xl font-bold text-white mt-4">Insérer texte lol</h1>
      </div>
    </div>
  </div>
</template>


<script>
import backgroundImage from '@/assets/images/banner.jpg';
import logoImage from '@/assets/images/logo.png';

export default {
  name: 'HeroSection',
  data() {
    return {
      backgroundImage,
      logoImage
    };
  }
}
</script>

<style scoped>
.hero-section {
  height: 90vh;
}

.content-container {
  height: 100%;
}
</style>

