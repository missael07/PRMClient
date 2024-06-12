<template>
  <div class="q-pa-md">
    <q-table
      flat bordered
      dense
      card-class="table-bg"
      table-header-class="table-border"
      :rows="patientList"
      :columns="columns"
      row-key="id"
      no-data-label="No hay información disponible."
      :loading="loading"
      @row-click="edit"
      separator="cell"
    />
  </div>
</template>

<script setup lang="ts">
import usePatients from '../composables/usePatients';
import { Patient } from '../interface/patient.interface';

const columns = [
    {
        name: 'fullName',
        label: 'Nombre',
        field: 'fullName',
    },
    {
        name: 'email',
        label: 'Correo',
        field: 'email',
    }
]

const { getPatients, patientList, loading } = usePatients();

getPatients('');


const edit = (row: any) => {
  const { target } = row;
  const { innerText } = target;

  const patientIdx = patientList.value.findIndex(f => f.fullName === innerText || f.email === innerText)

  const patient: Patient = patientList.value[patientIdx]
}
</script>

<style scoped>
.table-bg {
    background: transparent;
    color: #1D4355;
    border: 1px #1D4355 solid;
  border-color: #1D4355 !important;
}

.table-border {
  border: 1px #1D4355 solid;
  border-color: #1D4355 !important;
}
.q-table {
  border: 1px #1D4355 solid;
  border-color: #1D4355 !important;
}
</style>