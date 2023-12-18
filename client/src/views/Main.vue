<template>
  <main>
    <header>
      <div class="logoSide">
        <h1 class="logo logoHeader">POWER APP</h1>
      </div>
      <div class="userInfo">
        <p class="user">
          Welcome Mr/Mrs <span>{{ userFullname }}</span>
        </p>
      </div>
      <div class="factoryInfos">
        <Card />
      </div>
    </header>
  </main>
</template>
<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue';
const userFullname = ref('');
</script>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: var(--primary);
  color: #fff;
}
header {
  padding: 1.5rem;
  text-align: center;
}

.logoHeader {
  font-size: 3rem;
  font-weight: 700;
  color: var(--light);
}
.user {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
}
.factoryInfos {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
@media (max-width: 400px) {
  .factoryInfos {
    flex-direction: column;
  }
}
</style>
