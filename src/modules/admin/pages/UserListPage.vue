<template>
  <div class="row items-center title">
  <q-icon name="arrow_back_ios_new"  @click="$router.back" size="2rem" class="q-mr-md" />
    <h3>Pacientes</h3>
  </div>
  <Filter />
  <q-btn
    color="secondary"
    icon-right="add"
    label="Agregar Paciente"
    @click="addPatient"
    class="q-ml-md"
  />
  <UsersTable />
  <q-dialog v-model="prompt" persistent backdrop-filter="grayscale(100%)">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Your address</div>
      </q-card-section>

      <!-- <q-card-section class="q-pt-none">
          <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
        </q-card-section> -->

      <q-card-actions align="right">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn round :loading="loading" color="black" @click="save" icon="save">
          <template v-slot:loading>
            <q-spinner-gears />
          </template>
        </q-btn>
        <q-btn flat icon-right="save" label="Guardar" :loading="loading"  @click="save">
          <template v-slot:loading>
            <q-spinner-gears />
          </template>
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Filter from "../components/FilterComponent.vue";
import UsersTable from "../components/TableComponent.vue";
const prompt = ref(false);
const loading = ref(false);

const addPatient = () => {
  prompt.value = true;
};

const save = () => {
  loading.value = true;
  // simulate a delay
  setTimeout(() => {
    // we're done, we reset loading state
    loading.value = false;
    prompt.value =false;
  }, 3000);
};
</script>

<style scoped></style>
