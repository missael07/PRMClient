<template>
  <HeaderPage title="Pacientes"/>
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
import HeaderPage from 'src/shared/component/HeaderPage.vue';
import { useRouter } from "vue-router";

const router = useRouter();

const { openDialog } = usePatientDialog();
const addPatient = () => {
  // openDialog();
  router.push({name: 'Users-Information', params: {id: '0'}})
};

</script>

<style scoped></style>
