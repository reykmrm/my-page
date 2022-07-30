<template>
  <div class="home">
    <div class="contendor-baner">
      <div class="baner-titulo">
        <h1>Titulo del mensaje</h1>
      </div>
      <div class="baner-mensaje">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate unde rerum, est
        repellendus saepe aliquid repudiandae numquam, distinctio cumque eius, officiis recusandae
        blanditiis iure adipisci qui. Amet, ullam expedita.
      </div>
    </div>
    <h1>Titulo del contenedor card</h1>
    <div class="contenedor-card-secciones">
      <ComponetCardSeccionesVue />
      <ComponetCardSeccionesVue />
      <ComponetCardSeccionesVue />
    </div>
    <div class="contenedor-habilidades">
      <h1>Habilidades</h1>
      <font-awesome-icon icon="fa-brands fa-vuejs" />
      <font-awesome-icon icon="fa-brands fa-html5 " />
      <font-awesome-icon icon="fa-brands fa-css3-alt" />
      <font-awesome-icon icon="fa-brands fa-square-js" />
      <font-awesome-icon icon="fas fa-database " />
      <font-awesome-icon icon="fa-brands fa-java" />
      <font-awesome-icon icon="fa-brands fa-python" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ComponetCardSeccionesVue from '@/components/ComponetCardSecciones.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ComponetCardSeccionesVue,
  },
});
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.contendor-baner {
  display: flex;
  flex-direction: column;
  margin: auto;
  border: solid 1px;
  width: 80%;
  height: 400px;
  @include centerFlex;
}

.fa-html5,
.fa-square-js,
.fa-vuejs,
.fa-css3-alt,
.fa-java,
.fa-database,
.fa-python {
  @include tamanoIconos;
}
</style>
