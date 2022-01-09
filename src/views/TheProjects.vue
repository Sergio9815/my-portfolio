<template >
    <div id="Projects" class="project-main" :class="darkTheme ? 'secondaryLight' : 'secondaryDark'">
        <section class="projects">
          <h3>Mis Proyectos</h3>
            <div class="projects__cards-container">

              <div class="p-card"
                :class="darkTheme ? 'glass' : 'glassDark'">
                <figure>
                  <img src="../assets/rick.webp" alt="Rick and morty page preview">
                </figure>
                <div class="p-card-desc">
                  <h4>Rick and Morty API</h4>
                  <p>En este sitio puede encontrar información sobre su científico favorito
                    y su desafortunado nieto. Este proyecto fue desarrollado con el fin de poner
                    en práctica mis conocimientos sobre asincronismo en JavaScript.
                  </p>
                  <AppIcons :sass="true" :js="true" :vue="true" />
                  <AppButton url="https://randmapitest.netlify.app/"/>
                </div>
              </div>

              <div class="p-card" :class="darkTheme ? 'glass' : 'glassDark'">
                <figure>
                  <img src="../assets/quiroz.webp" alt="Quiroz Govea page preview">
                </figure>
                <div class="p-card-desc">
                  <h4>Quiroz Govea Landing page</h4>
                  <p>Sitio web desarrollado para la firma de abogados Quiroz Govea & Asociados como
                    parte de mi trabajo en la empresa de marketing digital Grafike.
                  </p>
                  <AppIcons :css="true" :vue="true" />
                  <AppButton url="https://quirozgovea.com/"/>
                </div>
              </div>

              <div class="p-card"
                :class="darkTheme ? 'glass' : 'glassDark'">
                <figure>
                  <img src="../assets/todo.webp" alt="React To-do App preview">
                </figure>
                <div class="p-card-desc">
                  <h4>To-do App React</h4>
                  <p>Aplicación web que permite crear, eliminar, filtrar,
                    buscar y gestionar elementos almacenados en una lista
                    de tareas utilizando React js.
                  </p>
                  <AppIcons :react="true" />
                  <AppButton url="https://to-do-reactjs.vercel.app/"/>
                </div>
              </div>

              <div class="p-card" :class="darkTheme ? 'glass' : 'glassDark'">
                <figure>
                  <img src="../assets/poke.webp" alt="Pokedex page preview">
                </figure>
                <div class="p-card-desc">
                  <h4>PokeDex API</h4>
                  <p>Aplicación web con la que podrás identificar a tus Pokémon preferidos.
                    Este proyecto se realizó con el fin de poner en práctica mi aprendizaje
                    en un Framework para el desarrollo de interfaces conocido como Vue.js.
                  </p>
                  <AppIcons :css="true" :js="true" :vue="true" />
                  <AppButton url="https://pokedex-vue-js.vercel.app/"/>
                </div>
              </div>

              <div class="p-card" :class="darkTheme ? 'glass' : 'glassDark'">
                <figure>
                  <img src="../assets/simon.webp" alt="Simon say page preview">
                </figure>
                <div class="p-card-desc">
                  <h4>Reto Simon Say</h4>
                  <p>Se trata de un juego interactivo desarrollado como parte del curso de
                    fundamentos de JavaScript en Platzi. Además se implementaron distintas
                    librerías de Js para mejorar la experiencia del usuario.
                  </p>
                  <AppIcons :sass="true" :js="true" :html="true" />
                  <AppButton url="https://simongamejs.netlify.app/"/>
                </div>
              </div>

              <div class="p-card" :class="darkTheme ? 'glass' : 'glassDark'">
                <figure>
                  <img src="../assets/cursojs.webp" alt="Curso js page preview">
                </figure>
                <div class="p-card-desc">
                  <h4>Curso práctico de JavaScript</h4>
                  <p>Este sitio se creó como parte del reto lanzado por Platzi para practicar
                    distintas funcionalidades del lenguaje JavaScript. El mismo cuenta con
                    diferentes secciones en las cuales se resuelven ejercicios matemáticos.
                  </p>
                  <AppIcons :css="true" :js="true" :html="true" />
                  <AppButton url="https://curso-practicojs.netlify.app/"/>
                </div>
              </div>

              <div class="p-card" :class="darkTheme ? 'glass' : 'glassDark'">
                <figure>
                  <img src="../assets/landing.webp" alt="Landing page preview">
                </figure>
                <div class="p-card-desc">
                  <h4>Landing page</h4>
                  <p>Landing page ficticia que busca demostrar mi creatividad al momento de
                    diseñar un sitio web para un cliente que en este caso se trataría de
                    una dulcería.
                  </p>
                  <AppIcons :vue="true" />
                  <AppButton url="https://landing-pagemcs.netlify.app/"/>
                </div>
              </div>

              <div class="p-card" :class="darkTheme ? 'glass' : 'glassDark'">
                <figure>
                  <img src="../assets/first.webp" alt="Bellezas de Panamá page preview">
                </figure>
                <div class="p-card-desc">
                  <h4>Bellezas de mi tierra</h4>
                  <p>Es un proyecto en el cual se trató de captar algunos de los sitios
                    más llamativos que tiene para ofrecer mi país Panamá.
                  </p>
                  <AppIcons :sass="true" :js="true" :html="true" />
                  <AppButton url="https://first-web-site.vercel.app/"/>
                </div>
              </div>

              <div class="p-card" :class="darkTheme ? 'glass' : 'glassDark'">
                <figure>
                  <img src="../assets/timer.webp" alt="My timer Js page preview">
                </figure>
                <div class="p-card-desc">
                  <h4>My Timer JS</h4>
                  <p>En este proyecto desarrolle un temporizador usando
                    Javascript; Esto con el fin de poder implementarlo fácilmente en
                    futuros proyectos. Y a su vez, aprender a publicar proyectos
                    de código abierto en NPM.
                  </p>
                  <AppIcons :js="true" />
                  <AppButton url="https://my-timer-demo.vercel.app/"/>
                </div>
              </div>

            </div>
        </section>
    </div>
</template>

<script>
import AppIcons from '@/components/AppIcons.vue';
import AppButton from '../components/AppButton.vue';

export default {
  name: 'Projects',
  components: { AppIcons, AppButton },
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
.project-main {
  width: 100%;
}

.projects {
  width: 90%;
  /* background-color: lightblue; */
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  padding: 50px;
  margin: auto;
}

h3 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 40px;
  margin: 40px 20px;
}

.projects__cards-container {
  width: 100%;
  grid-template-columns: repeat(2,1fr);
  display: grid;
  align-self: stretch;
  grid-auto-flow: row;
  grid-gap: 40px;
  margin-bottom: 50px;
  /* background-color: lightgreen; */
}

.p-card {
  /* background-color: #16161A;
  color: white; */
  /* border: 2px solid rgba(255, 255, 255, 0.315); */
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  /* box-shadow: 0 8px 32px 0 rgba(206, 206, 206, 0.37);
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px ); */
  z-index: 0;
}

figure {
  margin: 0;
}

.p-card  img {
  width: 100%;
  object-fit: cover;
}

.p-card-desc {
  display: flex;
  /* background-color: #71EFA3; */
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

h4 {
  margin: 0;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
}

.p-card-desc p {
  text-align: justify;
  /* color: rgba(255, 255, 255, 0.801); */
  line-height: 25px;
  font-family: 'Lato', sans-serif;
  font-weight: lighter;
}

@media only screen and (max-width: 1000px) {
  .projects {
    padding: 0px;
  }
  .projects__cards-container {
    grid-template-columns: repeat(1,1fr);
  }
  h3 {
    margin: 40px 0;
    width: 100%;
  }
}

</style>
