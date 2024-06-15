<template>
  <q-page>
    <div class="row items-center justify-evenly">
      <h3 class="title">Bienvenido!</h3>
    </div>
    <div class="row justify-evenly text-h6">
    <div v-for="item in menu" :key="item.displayText" class="column items-center">
      <router-link :to="{ name: item.route }" class="flex flex-column items-center no-decoration">
        <q-icon :name="item.icon" size="6rem" />
        <div>{{ item.displayText }}</div>
      </router-link>
    </div>
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