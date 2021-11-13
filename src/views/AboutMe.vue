<template functional>
    <div id="goAbout" class="about">
        <figure>
          <img src="../assets/me.webp" alt="">
        </figure>
        <div class="about__info">
          <h2>Sobre mí</h2>
          <p>Soy Sergio González, actualmente vivo en Panamá,
            país que me vio nacer. Estudio <b>Ingeniería en Sistemas y computación</b> ,
            en la Universidad Tecnológica de Panamá (UTP). Me considero
            un autodidacta, curioso por estar siempre a la vanguardia de
            las nuevas tecnologías, lo que me ha llevado a estudiar en <b>Platzi</b>
            y dedicar parte de mi tiempo libre a aprender más sobre distintas
            herramientas de desarrollo web como <b>Ionic, Vue.js</b>, entre otras. .</p>
            <a v-animate-css.hover="'pulse'" class="btn" href="https://github.com/Sergio9815">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              Ir a github
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'About',
};
</script>
<style scoped>
.about {
  width: 90%;
  /* background-color: #c1b3ff94; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  padding: 20px 0px;
  color: white;
  height: 100vh;
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
  color: var(--bg-color);
  font-size: 35px;
  text-transform: uppercase;
}

p {
  color: var(--bg-color);
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: left;
  line-height: 30px;
  font-weight: normal;
}

  .btn svg {
    width: 16px;
    margin-right: 15px;
  }

  .btn {
    width: 250px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: flex-start;
    background-color: transparent;
    text-decoration: none;
    border: 2px solid var(--bg-color);
    color: var(--bg-color);
    cursor: pointer;
    outline: none;
    letter-spacing: 2px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Source Sans Pro', sans-serif;
  }
  .btn:hover {
    color: var(--bg-color);
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
  .about {
    padding: 0px;
  }
  .about img {
    display: none;
  }

  .about__info {
    margin-top: 20px;
    width: 90%;
  }
    .btn {
      width: 100%;
      margin-bottom: 20px;
  }
}

</style>
