<template>
  <div id="About" class="aboutContainer" :class="darkTheme ? 'secondaryLight' : 'secondaryDark'">
        <div class="about">
          <figure>
            <img src="../assets/me.webp" alt="">
          </figure>
          <div class="about__info">
            <h2>Sobre mí</h2>
            <p :class="darkTheme ? 'secondaryLight' : 'secondaryDark'"
            >Soy Sergio González, actualmente vivo en Panamá,
              país que me vio nacer. Estudio <b>Ingeniería en Sistemas y computación</b> ,
              en la Universidad Tecnológica de Panamá (UTP). Me considero
              un autodidacta, curioso por estar siempre a la vanguardia de
              las nuevas tecnologías, lo que me ha llevado a estudiar en <b>Platzi</b>
              y dedicar parte de mi tiempo libre a aprender más sobre distintas
              herramientas de desarrollo web como <b>Ionic, Vue, React, Nuxt js</b>,
              entre otras.</p>
              <AppButton
                url="https://github.com/Sergio9815"
                content="Ir a github"
                :icon="1"
                light="tertiaryLight"
                dark="secondaryDark"
              />
          </div>
        </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue';

export default {
  name: 'About',
  components: { AppButton },
  computed: {
    darkTheme: {
      get() {
        return this.$store.state.darkTheme;
      },
    },
  },
};
</script>
<style scoped>
.aboutContainer {
  width: 100%;
}

.about {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  padding: 50px 0px;
}

figure {
  margin: 0;
}

.about img {
  width: 400px;
  height: 80vh;
  object-fit: cover;
}

.about__info {
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

h2 {
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  font-size: 35px;
  text-transform: uppercase;
}

p {
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: left;
  line-height: 30px;
  font-weight: normal;
}

@media only screen and (max-width: 1000px) {
  .about {
    flex-direction: column-reverse;
  }
  .about img {
    height: 50vh;
    border-radius: 200px;
  }

  .about__info {
    width: 90%;
  }
}

@media only screen and (max-width: 700px) {
  .about img {
    display: none;
  }

  .about__info {
    margin-top: 20px;
    width: 90%;
  }
}

</style>
