<template>
  <main>
    <header>
      <router-link to="/">
        <h1 class="logo">POWER APP</h1>
      </router-link>
      <h2>Login</h2>
      <p>
        Welcome to Register Form of
        <span class="textChange"> Power Control App</span>
      </p>
    </header>
    <form @submit.prevent="">
      <label>
        <span>enter your fullname</span>
        <input type="text" v-model="fullname" placeholder="John Doe" />
      </label>
      <label>
        <span>enter your email</span>
        <input type="email" v-model="email" placeholder="test@test.com" />
      </label>
      <label>
        <span>enter your password</span>
        <input
          type="password"
          v-model="password"
          placeholder="**************"
        />
      </label>
      <label>
        <span>Repeat your password</span>
        <input
          type="password"
          v-model="repeatPassword"
          placeholder="**************"
        />
      </label>
      <label>
        <span>What Your Role</span>
        <select v-model="role">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </label>
      <input type="submit" value="Register" />
    </form>
    <footer>
      <p>
        Do you have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </footer>
  </main>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
const fullname = ref('');
const email = ref('');
const password = ref('');
const repeatPassword = ref('');
const role = ref('');

const registerUser = async () => {
  const userData = {
    fullname: fullname.value,
    email: email.value,
    password: password.value,
    repeatPassword: repeatPassword.value,
    role: role.value,
  };

  try {
    const response = await axios.post('auth/register', userData);
    console.log(response.data);
  } catch (error) {
    console.error('Error registering user:', error);
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
  background: transparent;
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
  transition: all 0.5 ease;
}
input[type='submit']:hover {
  background: #fff;
  color: var(--primary);
  border: 1px solid var(--primary);
  font-weight: 500;
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.16);
}
select {
  display: block;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--dark);
  margin-bottom: 1.5rem;
  background-color: var(--light);
  border: none;
  margin-bottom: 55px;
}
select option {
  color: var(--dark);
  padding: 5px;
}
</style>
