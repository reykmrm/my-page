<template>
  <div class="form">
    <h1>Contactanos</h1>
    <form class="formContantanos" ref="form" @submit.prevent="sendEmail">
      <div class="row">
        <label for="name">
          <span class="spanFormContantanos">Nombres y Apellido</span>
          <input name="name" type="text" placeholder="Nombres" />
        </label>
      </div>

      <div class="row">
        <label for="telefono">
          <span class="spanFormContantanos">Telefono</span>
          <input name="telefono" type="number" placeholder="3122222222" />
        </label>
      </div>

      <div class="row">
        <label for="Correo">
          <span class="spanFormContantanos">Correo</span>
          <input name="correo" type="email" placeholder="Correo" :value="borrar" />
        </label>
      </div>

      <div class="row">
        <label for="asunto">
          <span class="spanFormContantanos">Asunto</span>
          <input name="asunto" type="text" placeholder="Asunto" />
        </label>
      </div>

      <div class="row">
        <label for="Mensaje">
          <span class="spanFormContantanos">Mensaje</span>
          <textarea name="mensaje" type="text" placeholder="Mensaje" />
        </label>
      </div>

      <input class="boton" type="submit" value="Enviar" />
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      borrar: '',
    };
  },
  methods: {
    sendEmail(event) {
      emailjs
        .sendForm('service_zukq56e', 'template_dyo6uff', this.$refs.form, 'IvhGlVNsam6v8HBCu')
        .then(
          (result) => {
            alert('su mensaje fue enviado con exito');
            event.target.reset();
            console.log('SUCCESS!', result.text);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};
</script>
