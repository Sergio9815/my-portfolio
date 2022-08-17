<template>
  <div id="Contact" class="contact">

    <h4>Contacto</h4>
    <div class="contact__main">
      <section class="contact__form">
        <form ref="form" @submit.prevent="sendEmail">

                <div class="form__main-data">
                    <div class="form-content">
                      <label for="name">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                      Nombre</label>
                      <input class="input"
                        v-model="user"
                        name="name"
                        type="text"
                        id="name" placeholder="" autocomplete="off">
                    </div>

                    <div class="form-content">
                      <label for="email"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                        Correo</label>
                      <input class="input"
                        v-model="email"
                        name="email"
                        type="email"
                        id="email" placeholder="" autocomplete="off">
                        <p
                          class="check-email animate__animated animate__fadeIn"
                          :class="validate ? 'hide-text-email' : ''"
                        >Por favor ingrese una dirección de correo válida.</p>
                    </div>
                </div>

                <div class="form__secondary-data">
                    <div class="form-content-2">
                      <label for="message">
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comments" class="svg-inline--fa fa-comments fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path></svg>
                      Deja un mensaje</label>
                      <textarea v-model="message" id="message" name="message" placeholder="">
                      </textarea>
                    </div>

                    <button type="submit" v-animate-css.hover="'pulse'" class="btn">
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path></svg>
                      Enviar mensaje
                    </button>
                </div>
        </form>
      </section>
      <section class="contact__info">
        <div class="info__data" id="mail-data">
          <h3><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
          Correo</h3>
          <p>sergio.gonzalez.b15@gmail.com</p>
        </div>
        <div class="info__data">
          <h3><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
          Teléfono</h3>
          <p>(+507) 6276-4754</p>
        </div>
        <div id="last-data" class="info__data">
          <h3><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
          Dirección</h3>
          <p id="dir">Distrito de Arraijan, provincia de Panamá Oeste, Panamá</p>
        </div>
      </section>
    </div>

    <footer class="footer">
      <sp-social-btn/>
    </footer>

  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import SpSocialBtn from '@/components/SpSocialBtn.vue';

export default {
  name: 'About',
  components: { SpSocialBtn },
  data() {
    return {
      user: ' ',
      email: ' ',
      message: ' ',
      validate: true,
    };
  },
  watch: {
    email() {
      this.checkEmail();
    },
  },
  methods: {
    checkEmail() {
      if (this.email.indexOf('@') > -1) {
        this.validate = true;
      } else {
        this.validate = false;
      }
    },
    sendEmail() {
      if (this.email !== ' ' && this.user !== ' ') {
        emailjs.sendForm('service_x2tsals', 'template_csrxm9y', this.$refs.form,
          'user_PUwl5mPHPMN6zZy9S0e28', {
            name: this.user,
            email: this.email,
            message: this.message,
          })
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Mensaje enviado con exito!',
        });
        this.name = ' ';
        this.email = ' ';
        this.message = ' ';
      } else {
        Swal.fire({
          title: 'Oops!',
          text: 'Por favor ingrese un correo electrónico válido!',
          icon: 'info',
          confirmButtonText: 'Ok',
        });
      }
    },
  },
};
</script>
<style scoped>
.contact {
  background-color: var(--bg-color);
  color: var(--color-white);
  padding-top: 20px;
}

h4 {
  font-size: 40px;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 3px;
  font-weight: lighter;
  padding: 50px 0px 30px 0px;
  margin-top: 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.253);
}

.contact__main {
  width: 100%;
  display: flex;
  margin-top: -52px;
  align-items: center;
  justify-content: space-around;
  background-color: var(--bg-color);
  font-family: 'Source Sans Pro', sans-serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.253);
}

.contact__form {
  width: 60%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 90%;
    height: 65vh;
  }

.form__main-data {
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
}

.form__secondary-data {
  display: flex;
  width: 90%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
  .form-content {
    width: 47%;
    display: flex;
    flex-direction: column;
    height: 138px;
  }

  .input {
    height: 50px;
    border: 2px solid transparent;
    transition: 0.15s;
    font-size: 20px;
    color: var(--color-white);
    background-color: var(--in-color);
    font-family: 'Source Sans Pro', sans-serif;
  }
  .input:hover
  {
    border: 2px solid var(--color-purple);
  }
  .input:focus {
    border: 2px solid var(--color-purple);
  }
  input {
    outline: none;
  }

.check-email {
  font-size: 12px;
  margin-left: 0;
  margin-top: 120px;
  justify-content: flex-start;
  color: #ff94b4;
  position: absolute;
}
  .form-content-2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: -15px;
  }

  textarea {
    width: 99%;
    height: 250px;
    border: 2px solid transparent;
    color: var(--color-white);
    font-size: 20px;
    background-color: var(--in-color);
    font-family: 'Source Sans Pro', sans-serif;
  }

  textarea:hover {
    border: 2px solid var(--color-purple);
  }

  textarea:focus { border: 2px solid var(--color-purple); }

  label {
    font-size: 15px;
    margin-bottom: 10px;
    color: var(--color-white);
    display: flex;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 20px;

  }

  svg {
    width: 15.5px;
    margin-bottom: 2px;
    margin-right: 15px;
  }

  .btn {
    width: 250px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: flex-start;
    background-color: var(--color-white);
    text-decoration: none;
    border: 2px solid var(--bg-color);
    color: var(--bg-color);
    cursor: pointer;
    outline: none;
    letter-spacing: 2px;
    margin-top: 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Source Sans Pro', sans-serif;
  }
  .btn:hover { background-color: var(--color-cyan); }

  .hide-text-email {
    display: none;
  }

.contact__info {
  width: 40%;
  border-left: 1px solid rgba(255, 255, 255, 0.253);
  color: var(--color-white);
}

.info__data {
  width: 100%;
  height: 30vh;
  border-bottom: 1px solid rgba(255, 255, 255, 0.253);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

#last-data {
  border-bottom: none;
}

h3 {
  margin-left: 50px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 10px; */
}

p {
  color: rgba(255, 255, 255, 0.568);
  margin-left: 100px;
  font-size: 18px;
  font-weight: lighter;
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 svg {
  width: 20px;
  margin-right: 10px;
}

.footer {
  width: 90%;
  height: 15vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 70px;
  background-color: var(--bg-color);
}

@media only screen and (max-width: 1000px) {
  .contact__main {
    flex-direction: column;
  }

  .contact__form {
    width: 100%;
  }

  .contact__info {
    width: 100%;
    border-left: none;
  }

  form {
    width: 100%;
    padding-bottom: 30px;
  }

  #mail-data {
    border-top: 1px solid rgba(255, 255, 255, 0.253);
  }

  .footer {
    align-items: center;
    padding: 20px;
  }
}

@media only screen and (max-width: 600px) {
  .form__main-data {
    flex-direction: column;
  }
  .btn {
    width: 100%;
  }

  .contact__form {
    height: 85vh;
  }

  h3, p {
    margin-left: 0px;
    width: 100%;
  }

  .contact__info {
    margin-top: 60px;
  }

  form {
    margin-top: 100px;
  }
  .form-content {
    width: 100%;
  }
  .form-content-2 {
    margin-top: 0px;
  }
  label {
    margin-top: 15px;
  }
  #dir {
    text-align: center;
    width: 80%;
    align-self: center;
  }
}
</style>
