<template>
  <HeaderPage :title="record.user?.fullName" />
  <CreateRecord  v-if="!record.isEdit"/>
  <EditRecord v-else />
</template>

<script setup lang="ts">
import HeaderPage from "src/shared/component/HeaderPage.vue";
import CreateRecord from "src/modules/patients/components/CreateRecord.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Record } from "../interfaces/record.interface";
import useRecords from "../composables/useRecords";
import EditRecord from "./EditRecord.vue";

const { params } = useRoute();
const { getRecord, loading, record } = useRecords();

const id = params.id;
onMounted(async () => {
  await getRecordById();
});

const getRecordById = async () => {
  console.log(params);
  const result = await getRecord(id.toString());
  console.log(result);
  record.value = result;
  loading.value = false;
};

</script>

<style scoped>

</style>