
<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-input  bottom-slots v-model="text" label="Buscar" 
   class="border-blue">
        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>
      </q-input>

</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import usePatients from '../composables/usePatients';
  const text = ref('')

  const { getPatients } = usePatients();

  watch(text, () => {
    onSearch(text.value);
  })

  const onSearch = (term: string) => {
    getPatients(term);
  }

</script>

<style scoped>

</style>