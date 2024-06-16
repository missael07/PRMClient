<template>
  <q-page class="login-page">
    <div class="login-container">
      <div class="row items-center justify-center">
        <div class="col-md-8 col-lg-7 col-xl-6 col-12 ">
          <q-img
            src="../../../assets/logo.png"
            class="img-fluid q-mr-md"
            alt="Phone image"
          />
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <q-form @submit="onSubmit" class="q-ml-md">
            <!-- Email input -->
            <q-input
              v-model="form.email"
              filled
              label="Correo Electrónico"
              type="email"
              :rules="[val => !!val || 'Correo es requerido', val => /.+@.+\..+/.test(val) || 'Correo debe ser válido']"
              lazy-rules
              dense
              class="q-mb-md"
            />

            <!-- Password input -->
            <q-input
              v-model="form.password"
              filled
              label="Contraseña"
              type="password"
              :rules="[val => !!val || 'Contraseña es requerida']"
              lazy-rules
              dense
              class="q-mb-md"
            />

            <div class="row items-center justify-between q-mb-md">
              <!-- Checkbox -->
              <q-checkbox
                v-model="form.remember"
                label="Recordarme"
              />
              <!-- <q-btn flat @click="onForgotPassword">¿Olvidaste tu contraseña?</q-btn> -->
            </div>

            <!-- Submit button -->
            <q-btn
              type="submit"
              label="Iniciar Sesión"
              color="teal"
              class="full-width q-mt-lg"
            />

            <!-- <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0 text-muted">O</p>
            </div> -->
<!-- 
            <q-btn
              class="full-width q-mb-md"
              color="primary"
              style="background-color: #3b5998"
              @click="onContinueWith('facebook')"
            >
              <i class="fab fa-facebook-f me-2"></i> Continuar con Facebook
            </q-btn>

            <q-btn
              class="full-width"
              color="primary"
              style="background-color: #55acee"
              @click="onContinueWith('twitter')"
            >
              <i class="fab fa-twitter me-2"></i> Continuar con Twitter
            </q-btn> -->
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>
  

<script setup lang="ts">
import { ref } from 'vue';
import useAuth from '../composables/useAuth';
import { useRouter } from 'vue-router';

const route = useRouter();
const form = ref({
  email: 'lmpadillar@gmail.com',
  password: 'Mp071293.!',
  remember: false
});

const { signIn } = useAuth();
const onSubmit = async () => {
  console.log(form.value)
  const {email, password } = form.value;
  const result = await signIn({email, password});
  localStorage.setItem('token', result.token)
  route.push({name: 'Index'})
};

</script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .login-container {
    width: 100%;
    max-width: 70%;
    padding: 16px;
  }
  .login-card {
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .login-header {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }
  .login-logo {
    width: 80px;
    height: 80px;
  }

  </style>
  