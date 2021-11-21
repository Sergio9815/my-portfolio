<template>
  <section class="nav__links">

        <router-link v-animate-css.hover="'pulse'" to="/"
          @click.native="scrollToId('goInicio')">
          Inicio
        </router-link>

        <a href="#Projects"
          v-animate-css.hover="'pulse'">
          Proyectos
        </a>

        <a href="#About"
          v-animate-css.hover="'pulse'">
          Sobre mí
        </a>

        <a href="#Contact"
          v-animate-css.hover="'pulse'">
          Contacto
        </a>

  </section>
</template>

<script>
export default {
  name: 'SpLinks',
  methods: {
    scrollToId(id) {
      document.getElementById(id).scrollIntoView();
    },
  },
};
</script>

<style scoped>

#nav a {
  font-weight: normal;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Lato', sans-serif;
}

#nav a:hover {
  color: #94ffd3;
}

.nav__links {
  /* background-color: aquamarine; */
    /* background-color: aquamarine; */
    display: flex;
    /* gap: 50px; */
    justify-content: space-around;
    width: 50%;
}
</style>
