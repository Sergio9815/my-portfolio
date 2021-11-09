<template>
  <section class="nav__links">

        <router-link v-animate-css.hover="'pulse'" to="/"
          @click.native="scrollToId('goInicio')">
          Inicio
        </router-link>

        <router-link
          v-animate-css.hover="'pulse'" to="/proyectos"
          @click.native="scrollToId('goProyectos')">
          Proyectos
        </router-link>

        <router-link v-animate-css.hover="'pulse'" to="/about"
          @click.native="scrollToId('goAbout')">
          Sobre mí
        </router-link>

        <router-link
          v-animate-css.hover="'pulse'"
          to="/contact"
          @click.native="scrollToId('goContact')">
          Contacto
        </router-link>

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
  color: rgba(255, 255, 255, 0.712);
  font-family: 'Raleway', sans-serif;
}

#nav a:hover {
  color: white;
}

#nav a.router-link-exact-active {
  color: #fcfcfc;
}

.nav__links {
  /* background-color: aquamarine; */
  display: flex;
  gap: 50px;
  justify-content: flex-end;
}
</style>
