<template>
  <div class="home">
    <div class="contendor-baner">
      <div class="baner-titulo">
        <h1>Titulo del mensaje</h1>
      </div>
    </div>
    <div class="baner-mensaje">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate unde rerum, est
      repellendus saepe aliquid repudiandae numquam, distinctio cumque eius, officiis recusandae
      blanditiis iure adipisci qui. Amet, ullam expedita.
    </div>
    <div class="contenedor-card-secciones">
      <h1>Titulo del contenedor card</h1>
      <ComponetCardSeccionesVue />
      <ComponetCardSeccionesVue />
      <ComponetCardSeccionesVue />
    </div>
    <div class="contenedor-habilidades">
      <font-awesome-icon icon="fa-solid fa-user-secret" />
      <font-awesome-icon icon="fa-brands fa-html5 tamano" />
      <h1>hola</h1>
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

<style lang="scss">
.tamano{
  height: 30px;
  width: 30px;
}
</style>
