<template>
  <div class="unauthorized-page">
    <div class="unauthorized-container">
      <div class="unauthorized-card">
        <div class="text-center">
          <q-img src="src/assets/forbidden.png" class="unauthorized-image" contain />
        </div>
        <q-card-actions align="center">
          <q-btn color="teal" @click="goHome" class="q-mt-md">
            Volver al Inicio
          </q-btn>
        </q-card-actions>
      </div>
    </div>
  </div>
</template>

  <script setup lang="ts">
    import { useRouter } from 'vue-router';
    
    const route = useRouter()
    const goHome = () => {
      console.log(1234)
      const role = localStorage.getItem('role')
      route.push({name: role !== 'admin' ? 'Dashboard' : 'Index'})
    }
  </script>
  
  <style scoped>
  .unauthorized-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .unauthorized-container {
    width: 100%;
    max-width: 100%;
  }

  .unauthorized-image {
    width: 70%;
    height: 50%;
  }
  .text-center {
    text-align: center;
  }
  .text-h4 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .text-subtitle1 {
    font-size: 1rem;
    font-weight: 400;
  }
  .q-mt-md {
    margin-top: 16px;
  }
  </style>