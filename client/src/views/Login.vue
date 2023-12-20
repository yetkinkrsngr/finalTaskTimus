<template>
  <main>
    <header>
      <router-link to="/">
        <h1 class="logo">POWER APP</h1>
      </router-link>
      <h2>Login</h2>
      <p>
        Login or create an account to start using the
        <span class="textChange"> Power Control App</span>
      </p>
    </header>
    <form @submit.prevent="submitForm">
      <label>
        <span>Enter your email</span>
        <input type="email" v-model="email" placeholder="test@test.com" />
      </label>
      <label>
        <span>Enter your password</span>
        <input
          type="password"
          v-model="password"
          placeholder="**************"
        />
      </label>
      <input type="submit" value="Login" />
    </form>
    <footer>
      <p>
        Don't have an account?
        <router-link to="/register">Register</router-link>
      </p>
    </footer>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import the useRouter function

const email = ref('');
const password = ref('');

const router = useRouter(); // Initialize the router

const submitForm = () => {
  if (email.value === 'yetkin@yetkin.com' && password.value === '123456') {
    alert('Giriş Başarılı');
    // Navigate to the "main" route upon successful login
    router.push({ name: 'Main' });
  } else {
    alert('Giriş Başarısız');
  }
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  background-color: var(--primary);
  color: #fff;
}

header {
  padding: 1.5rem;
}

footer {
  background-color: #fff;
  width: 100%;
  color: var(--dark);
  text-align: center;
  padding: 1.5rem;
  padding-bottom: 3rem;
}

h2 {
  font-size: 2.125rem;
  margin-bottom: 1rem;
}

h2 ~ p {
  font-weight: 500;
  font-size: 1rem;
}

form {
  flex: 1 1 0%;
  display: block;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: #fff;
  box-shadow: 0px -4px 12px 4px rgba(0, 0, 0, 0.16);
  color: var(--dark);
  padding: 4rem 1.5rem;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 1.5rem;
}

label span {
  display: block;
  color: var(--gray);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

input:not([type='submit']) {
  display: block;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--dark);
  margin-bottom: 1.5rem;
  background-color: var(--light);
}

input:not([type='submit'])::placeholder {
  color: var(--gray);
  font-style: italic;
}

input[type='submit'] {
  display: block;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 1.5rem;
  background-color: var(--primary);
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
}

input[type='submit']:hover {
  background: #fff;
  color: var(--primary);
  border: 1px solid var(--primary);
  font-weight: 500;
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.16);
}
</style>
