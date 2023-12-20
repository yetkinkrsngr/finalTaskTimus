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
        <Card
          imageSrc="../../public/factories/Art1.png"
          factoryName="Cotton Factory"
          location="ADANA"
          power="850"
        />
        <Card
          imageSrc="../../public/factories/Art2.png"
          factoryName="POTATO Factory"
          location="IZMIR"
          power="1000"
        />
        <Card
          imageSrc="../../public/factories/Art3.png"
          factoryName="CHIPS FACTORY"
          location="IZMIR"
          power="1200"
        />
        <Card
          imageSrc="../../public/factories/Art4.png"
          factoryName="PAINT Factory"
          location="MANISA"
          power="300"
        />
        <Card
          imageSrc="../../public/factories/Art5.png"
          factoryName="IRON Factory"
          location="ZONGULDAK"
          power="2200"
        />
        <Card
          imageSrc="../../public/factories/Art6.png"
          factoryName="PAPER Factory"
          location="ISTANBUL"
          power="1000"
        />
        <Card
          imageSrc="../../public/factories/Art7.png"
          factoryName="COTTON Factory"
          location="ANTALYA"
          power="1200"
        />
      </div>
    </header>
  </main>
</template>
<script setup>
import { ref } from 'vue';
import Card from '@/components/Card.vue';
const userFullname = ref('');
userFullname.value = localStorage.getItem('fullname');
</script>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
@media (max-width: 400px) {
  main {
    justify-content: center;
  }
  .header {
  }
  .factoryInfos {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    align-items: center;
    margin-left: 40px;
  }
}
</style>
