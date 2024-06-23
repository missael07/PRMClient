<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.7">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="teal"
        unelevated
        @click="redirectTo"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router';
    
    const route = useRouter();
defineOptions({
  name: 'ErrorNotFound'
});
const redirectTo = () => {
  console.log(1324)
  const role = localStorage.getItem('role')
  route.push({name: role !== 'admin' ? 'Dashboard' : 'Index'})
}
</script>
