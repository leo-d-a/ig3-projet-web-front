<template>
  <div>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <TrainingSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/Sections/HeroSection.vue';
import AboutSection from './components/Sections/AboutSection.vue';
import TrainingSection from './components/Sections/TrainingSection.vue';
import ContactSection from './components/Sections/ContactSection.vue';
import Footer from './components/Footer.vue';


export default {
  components: {
    Navbar,
    HeroSection,
    AboutSection,
    TrainingSection,
    ContactSection,
    Footer
  }
}
</script>
