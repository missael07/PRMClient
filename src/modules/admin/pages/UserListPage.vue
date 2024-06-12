<template>
  <div class="row items-center title">
    <q-icon
      name="arrow_back_ios_new"
      @click="$router.back"
      size="2rem"
      class="q-mr-md"
    />
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
<PatientDialog />
</template>

<script setup lang="ts">
import Filter from "../components/FilterComponent.vue";
import UsersTable from "../components/TableComponent.vue";
import PatientDialog from "../components/PatientDialog.vue";

import usePatientDialog from '../composables/usePatientDialog';

const { openDialog } = usePatientDialog();
const addPatient = () => {
  openDialog();
};

</script>

<style scoped></style>
