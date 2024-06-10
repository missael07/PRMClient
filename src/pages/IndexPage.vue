<template>
  <q-page class="row justify-evenly q-mt-xl">
    <div v-for="item of menu" :key="item.displayText" class="text-h6" color="primary">
      <router-link to="google.com" class="">
      <div  class="row justify-evenly">
        <q-icon outline :name="item.icon" color="primary" size="6rem" />
      </div>
       {{  item.displayText }}
      </router-link>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'IndexPage'
});

const menu = ref([
  {
    displayText: 'Pacientes',
    route: 'Users',
    icon: 'manage_accounts'
  },
  {
    displayText: 'Expedientes',
    route: 'Records',
    icon: 'library_books'
  }
])

</script>
