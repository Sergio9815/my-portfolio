<template>
  <section class="nav__links">

        <router-link r-linkv-animate-css.hover="'pulse'" to="/"
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
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #19191f9f;
  font-family: 'Lato', sans-serif;
}

#nav a:hover {
  color: #19191f;
}

#nav a.router-link-exact-active {
  color: #19191f;
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
