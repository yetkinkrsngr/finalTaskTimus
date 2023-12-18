<template>
  <main>
    <header>
      <router-link to="/">
        <h1 class="logo">POWER APP</h1>
      </router-link>
      <h2>Welcome to App</h2>
      <router-link to="/login">
        <button class="btn">Login</button>
      </router-link>
      <router-link to="/register">
        <button class="btn">Register</button>
      </router-link>
    </header>
    <section></section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
const email = ref('');
const password = ref('');
</script>

<style scoped>
main {
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--primary);
  color: #fff;
  z-index: 3;
  overflow: hidden;
}
section {
  position: relative;
  background-image: url('../../public/img/Factory.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  filter: blur(5px);
  top: 10px;
  z-index: -1;
}

header {
  padding: 1.5rem;
}
header h2 {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}
.logo {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
}

@media (min-width: 400px) {
  main {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100svh;
  }
}
</style>
