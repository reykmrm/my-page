<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <footer>
    <h1>Redes</h1>
    <div>
      <a href="https://api.whatsapp.com/send?phone=+573174546991" target="_blank">
        <font-awesome-icon icon="fa-brands fa-whatsapp" />
        <h3>Whatsapp</h3>
      </a>
      <a href="https://www.facebook.com/Reykmrm/" target="_blank">
        <font-awesome-icon icon="fa-brands fa-facebook" />
        <h3>Facebook</h3>
      </a>
      <a href="https://www.instagram.com/reykmrm/" target="_blank">
        <font-awesome-icon icon="fa-brands fa-instagram" />
        <h3>Instagram</h3>
      </a>
      <a href="https://github.com/reykmrm" target="_blank">
        <font-awesome-icon icon="fa-brands fa-github" />
        <h3>GitHub</h3>
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      body: '',
    };
  },
  methods: {
    fondo() {
      this.body = 'blue';
    },
  },
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';

footer {
  div{
    @include centerFlex;
  }
  margin-bottom: $margin-20;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
