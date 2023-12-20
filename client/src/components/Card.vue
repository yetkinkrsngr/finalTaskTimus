<template>
  <div class="card">
    <div class="imgSide">
      <img :src="imageSrc" alt="" />
    </div>
    <div class="infoSide">
      <h3 class="nameFactory">{{ factoryName }}</h3>
      <p class="location">{{ location }}</p>
      <p class="infoFactory">Power: {{ power }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    imageSrc: String,
    factoryName: String,
    location: String,
    power: Number,
  },
};
</script>
<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 20rem;
  background-color: var(--light);
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.05);
}
.imgSide {
  width: 100%;
  height: 50%;
  background-color: var(--dark);
  border-radius: 1rem;
  margin-bottom: 1rem;
}
.imgSide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}
.infoSide {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.infoSide h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 0.5rem;
}
.infoSide p {
  font-size: 1rem;
  font-weight: 500;
  color: var(--dark);
  margin-bottom: 0.5rem;
}
</style>
