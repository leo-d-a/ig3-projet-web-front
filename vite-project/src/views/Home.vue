<template>
  <div>
    <HeroSection />
    <AboutSection />
    <TrainingSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from '../components/Sections/HeroSection.vue';
import AboutSection from '../components/Sections/AboutSection.vue';
import TrainingSection from '../components/Sections/TrainingSection.vue';
import ContactSection from '../components/Sections/ContactSection.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';


export default {
  name: "Home",
  components: {
    Navbar,
    HeroSection,
    AboutSection,
    TrainingSection,
    ContactSection,
    Footer,
  },
};
</script>

<style scoped>
</style>
