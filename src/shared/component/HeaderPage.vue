<template>
  <div class="row items-center title">
    <!-- <q-icon
      name="arrow_back_ios_new"
      @click="$router.back"
      size="2rem"
      
      class="q-mr-md pointer"
    /> -->
    <h3>{{ props.title }}</h3>
  </div>
</template>

<script setup lang="ts">


interface Props {
    title: string;
}

 const props = defineProps<Props>();
</script>

<style scoped>

</style>