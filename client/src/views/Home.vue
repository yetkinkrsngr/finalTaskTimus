<template>
  <main>
    <header>
      <router-link to="/">
        <h1 class="logo">POWER APP</h1>
      </router-link>
      <h2>{{ $t('welcome') }}</h2>
      <router-link to="/login">
        <button class="btn">{{ $t('login') }}</button>
      </router-link>
      <router-link to="/register">
        <button class="btn">{{ $t('register') }}</button>
      </router-link>
    </header>
    <section></section>
    <article class="lang">
      <img class="imgCountry" :src="imageSrc" alt="" @click="toggleLanguage" />
    </article>
  </main>
</template>
<script setup>
import { ref } from 'vue';

const imageSrc = ref('../../public/img/tr.png');
const trLang = {
  welcome: 'Uygulamaya Hoş Geldiniz',
  login: 'Giriş',
  register: 'Kayit Ol',
};
const enLang = {
  welcome: 'Welcome to App',
  login: 'Login',
  register: 'Register',
};
const toggleLanguage = () => {
  const newImage = imageSrc.value.includes('tr') ? 'en.png' : 'tr.png';
  imageSrc.value = `../../public/img/${newImage}`;
  if (newImage === 'tr.png') {
  } else {
    trLang.welcome = 'Welcome to App';
    trLang.login = 'Login';
    trLang.register = 'Register';
  }
};
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
.lang {
  height: 45px;
  width: 45px;
  position: absolute;
  top: 1.2rem;
  right: 2rem;
}
.lang img {
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.3s ease-in-out;
}
.lang img:hover {
  transform: scale(1.3);
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
