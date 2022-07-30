<template>
  <div class="card">
    <div class="contenedor-card">
      <img class="tamanoImagen" src="../assets/media/img/fundo-card.jpeg" alt="" />
      <h1>Titulo</h1>
    </div>
  </div>
</template>

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
    background: blue;
  }
}

@media (max-width: 414px) {
  .contenedor-card {
    width: 100%;
    height: 200px;
  }

  .tamanoImagen {
    width: 100%;
    height: 200px;
  }
}
</style>
