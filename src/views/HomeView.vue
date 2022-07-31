<!-- eslint-disable vuejs-accessibility/media-has-caption -->
<template>
  <div class="home">
    <div class="contendor-baner">
      <div class="baner-titulo">
        <h1>Titulo del mensaje</h1>
      </div>
      <div class="baner-mensaje">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate unde rerum,
          est repellendus saepe aliquid repudiandae numquam, distinctio cumque eius, officiis
          recusandae blanditiis iure adipisci qui. Amet, ullam expedita.
        </p>
      </div>
    </div>
    <h1 class="titulo-card">Titulo del contenedor card</h1>
    <div class="contenedor-card-secciones">
      <ComponetCardSeccionesVue />
      <ComponetCardSeccionesVue />
      <ComponetCardSeccionesVue />
    </div>
    <div class="contenedor-baner-portafolio">
      <div class="contenedor-baner-portafolio-texto">
        <h1>Titulo</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, consequatur quae.
          Perferendis commodi expedita dolor itaque rerum corporis eum eveniet, hic, laboriosam
          maiores neque non, temporibus cupiditate tenetur dolorem earum.
        </p>
      </div>
      <div class="contenedor-baner-portafolio-imagen" oncontextmenu="return false;">
        <video controls muted autoplay loop @mouseover="autoPlay" @focus="bar">
          <source src="../assets/media/videos/videoBaner.mp4" type="video/MP4" />
        </video>
      </div>
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
import { faVideo } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'HomeView',
  components: {
    ComponetCardSeccionesVue,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

h1 {
  margin-block: $margin-10;
  margin-top: $margin-20;
}

.contendor-baner,
.contenedor-card-secciones,
.contenedor-habilidades {
  margin-bottom: $margin-20;
}

.baner-mensaje {
  width: 80%;
  border-top: 3px solid white;
  margin-top: $margin-10 * 2;
  padding: $padding-10 * 3;
}

.contendor-baner {
  display: flex;
  flex-direction: column;
  margin: auto;
  border: solid 1px white;
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

.contenedor-baner-portafolio {
  display: flex;
  margin: auto;
  border: solid 1px white;
  width: 80%;
  height: 500px;
  @include centerFlex;
}

.contenedor-baner-portafolio-texto {
  width: 40%;
  margin: $margin-10;
}

.contenedor-baner-portafolio-imagen {
  width: 60%;
  margin-right: $margin-20;
  video {
    width: 100%;
    margin: auto;
  }
}

@media (max-width: 414px) {
  .baner-mensaje {
    width: 60%;
    border-top: 3px solid white;
    margin-top: $margin-10;
    padding: $padding-10 * 2;
  }

  .contenedor-baner-portafolio {
    display: flex;
    flex-direction: column;
  }
  .contenedor-baner-portafolio-imagen,
  .contenedor-baner-portafolio-texto {
    width: 90%;
    margin: auto;
  }
}
</style>
