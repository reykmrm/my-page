<template>
  <div class="card">
    <div class="contenedor-card">
      <img class="tamanoImagen" :src="srcImagen" alt="" />
      <h1>{{ tituloCard }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    srcImagen: Image,
    tituloCard: String,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

h1 {
  color: white;
  position: absolute;
}
.tamanoImagen {
  width: 100%;
  height: 300px;
  opacity: 0.8;
  object-fit: cover;
}
.contenedor-card {
  display: flex;
  width: 100%;
  height: 300px;
  border-radius: 5px;
  border: solid black 1px;
  @include centerFlex;
  &:hover {
    opacity: 0.9;
    background: rgb(148, 148, 160);
  }
}

@media (max-width: 414px) {
  .contenedor-card {
    width: 100%;
    height: 100px;
  }

  .tamanoImagen {
    width: 100%;
    height: 100px;
  }
}
</style>
