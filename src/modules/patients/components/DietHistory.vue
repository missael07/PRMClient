<template>
  <q-inner-loading :showing="isLoading">
    <q-spinner-gears size="50px" color="primary" />
  </q-inner-loading>
  <div class="q-pa-md">
    <HeaderPage title="Historial" />
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="diet in dietList"
        :key="diet.id"
        transition="scale"
        class="example-item"
      >
        <q-card flat bordered class="q-ma-sm" >
          <div  style="overflow: hidden;" >
            <iframe :src="diet.secureName" width="275" height="200" ></iframe>
          </div>
          <q-card-section>
            <div class="text-h6">{{ diet.from }} al {{ diet.to }}</div>
            <div class="row justify-end">
                <div class="q-mr-md">
                  <q-icon name="visibility" class="pointer" @click="viewDiet(diet.secureName)" size="1.5rem"/>
                </div>
                <div>
                  <q-icon name="delete" class="pointer" @click="deleteDietAsync(diet.id, diet.publicId)" size="1.5rem"/>
                </div>
            </div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
  <q-dialog v-model="prompt" style="max-width: 1500px !important; overflow-y: hidden !important">
            <div  width="630">
            <iframe :src="pdfUrl" width="800" height="800" ></iframe>
          </div>
    </q-dialog>
</template>

<script setup lang="ts">
import HeaderPage from "src/shared/component/HeaderPage.vue";
import { onMounted, ref } from "vue";
import useDiet from "../composables/useDiet";
import { DietResponse } from "../interfaces/dietResponse.interface";
import { useRoute } from "vue-router";

const { params } = useRoute();

const id = params.id.toString();

const { getDiets, deleteDiet, isLoading } = useDiet();

const dietList = ref<DietResponse[]>();

const pdfUrl = ref();

const prompt = ref(false);

onMounted(async () => {
  const result = await getDiets(id);
  dietList.value = result;
});

const viewDiet = async (secureName: string) => {
    prompt.value = true;

    pdfUrl.value = secureName;
}

const reset = () => {
    prompt.value = false;
    pdfUrl.value = '';
}

const deleteDietAsync = async (id: string, publicId: string) => {
  const result = await deleteDiet(id, publicId);
  console.log(result)

  if( result === 200 ) {
    const result = await getDiets(id);
    dietList.value = result;
  }
}


</script>

<style scoped>
.example-item {
  height: 290px;
  width: 290px;
}

@media (min-width: 600px) {
    .q-dialog__inner--minimized > div {
        max-width: 1500px;
        overflow: hidden;
        overflow-y: hidden !important;
    }
}
</style>
