<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      dense
      card-class="table-bg"
      table-header-class="table-border"
      :rows="recordList"
      :columns="col"
      row-key="id"
      no-data-label="No hay información disponible."
      :loading="loading"
      separator="cell"
      @row-click="viewRecord"
    />
  </div>
</template>

<script setup lang="ts">
import { QTableProps, QTreeNode } from "quasar";
import useRecords from "../composables/useRecords";
import { useRouter } from "vue-router";

const { getRecords, recordList, loading } = useRecords();
const route = useRouter();
getRecords("");
const columns: QTableProps = {
  columns: [
    {
      name: "fullName",
      label: "Nombre",
      field: "name",
      align: "left",
    },
    {
      name: "startDate",
      label: "Fecha de Inicio",
      field: "startDate",
      align: "left",
    },
  ],
  rows: recordList.value,
};

const col = columns.columns;

const viewRecord = (event: any, row: any) => {
  const record = row;
  console.log(record);
  route.push({ name: "Create-Record", params: { id: record.recordId } });
};
</script>

<style scoped>
.table-bg {
  background: transparent;
  color: #1d4355;
  border: 1px #1d4355 solid;
  border-color: #1d4355 !important;
}

.table-border {
  border: 1px #1d4355 solid;
  border-color: #1d4355 !important;
}
.q-table {
  border: 1px #1d4355 solid;
  border-color: #1d4355 !important;
}
</style>
