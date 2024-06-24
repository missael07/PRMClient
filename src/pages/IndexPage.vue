<template>
  <q-page>
    <q-pull-to-refresh @refresh="refresh" color="secondary"
      
      icon="autorenew">
      <div class="row items-center justify-evenly" style="height: 50px;">
        <h3 class="title">Bienvenido!</h3>
      </div>
      <div class="row justify-evenly">
        <h3 class="title">Estas son tus citas de hoy {{ new Date().toLocaleDateString()}}.</h3>
      </div>
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered v-for="(item, index) in citas" :key="index">
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-overline">Cita No: {{  index + 1 }}</div>
              <div class="text-h5 q-mt-sm q-mb-xs">{{ item.name }}</div>
            </q-card-section>
          </q-card-section>
      
          <q-separator />
      
          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat>
              {{  item.time }}
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </q-pull-to-refresh>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'IndexPage'
});

let citas = [
  {
    name: 'Luis Padilla',
    time: '6:00 PM'
  },
  {
    name: 'José Fernandes',
    time: '7:00 PM'
  },
  {
    name: 'Lupillo Rivera',
    time: '8:00 PM'
  },
  {
    name: 'Gonzalo',
    time: '9:00 PM'
  }
]

const refresh = (done: any) => {
        setTimeout(() => {
          citas.push(
            {
              name: 'Gonzalo',
              time: '9:00 PM'
            })
          done()
        }, 1000)
      }
</script>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.flex-column {
  flex-direction: column;
}

.no-decoration {
  text-decoration: none;
  color: inherit;
}

.q-icon + div {
  margin-top: 0.5rem; /* Espaciado entre el icono y el texto */
}
</style>