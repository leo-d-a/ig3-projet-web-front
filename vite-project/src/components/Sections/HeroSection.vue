<template>
  <div class="hero-section bg-cover bg-center bg-no-repeat h-screen " :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="content-container flex items-center justify-center h-full">
      <div class="container mx-auto px-4 py-16 text-center">
        <h1 class="text-8xl font-bold text-white mt-4">Tì Liu Gan</h1>
        <p class="text-4xl font text-white mt-4">Le sixième sens</p>
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
  height: 100vh;
}

.content-container {
  height: 100%;
}
</style>

