<template>
  <q-dialog v-model="prompt" persistent backdrop-filter="blur(100%)">
    <q-card style="min-width: 350px; max-height: 55%">
      <q-card-section class="header">
        <div class="text-h6">Agregar Dieta</div>
        <q-icon name="close" class="cursor-pointer" @click="reset" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-card class="my-card" rounded>
          <q-card-section
            class="bg-teal text-white row justify-between"
            style="height: 50px"
          >
            <p>Exntension Permitida: PDF</p>
            <q-icon
              v-if="!file && !isLoading"
              name="add"
              class="cursor-pointer"
              @click="getFile"
              size="1.5rem"
            />
            <q-icon
              v-else-if="file && !isLoading"
              name="backup"
              class="cursor-pointer"
              @click="uploadFile"
              size="1.5rem"
            />
            <q-inner-loading
              :showing="isLoading"
              label="Please wait..."
              label-class="text-teal"
              label-style="font-size: 1.1em"
            />
          </q-card-section>

          <q-card-actions>
            <div class="q-pa-md" style="width: 100%">
              <q-input
                v-if="file"
                bottom-slots
                v-model="fileName"
                class="border-blue"
                style="width: 100%"
                readonly
                :loading="isLoading"
                :hint="fileSize"
              >
                <template v-slot:append>
                  <q-icon
                    v-if="file && !isLoading"
                    name="close"
                    class="cursor-pointer"
                    @click="resetFile"
                  />
                </template>
              </q-input>
            <q-banner dense inline-actions rounded class="text-white bg-red"  style="width: 100%; opacity: .5" v-if="displayError">
              Extension no permitida
            </q-banner>
            </div>
          </q-card-actions>
        </q-card>
        <input
          type="file"
          id="fileInput"
          v-show="false"
          v-on:change="setFile"
          accept="application/pdf"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import useDietDialog from "../composables/useDietDialog";
import { ref } from "vue";

const { prompt, saveFile, recordId, isLoading } = useDietDialog();
const file = ref<File | null>();
const icon = ref("add");
const fileName = ref();
const fileSize = ref();
const displayError = ref(false);

// Función para resetear el diálogo
const reset = () => {
  prompt.value = false;
};


const getFile = () => {
  var element = document.getElementById("fileInput");
  console.log(element);
  element?.click();
};

const setFile = (event: any) => {
  file.value = event.target.files[0];
  if (file.value?.name.includes(".pdf")) {
    icon.value = "backup";
    fileName.value = file.value?.name;
    fileSize.value = file.value?.size;
  } else {
    file.value = null;
    displayError.value = true;
    setTimeout(() => {
        displayError.value = false;
    }, 1500);
  }
};

const resetFile = () => {
  file.value = null;
  icon.value = "backup";
  fileName.value = "";
  fileSize.value = "";
};

const uploadFile = async () => {
  const result = await saveFile(recordId.value, file.value);
  if(result.status === 201) {
    prompt.value = false;
  }
};
</script>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.validations {
  display: flex;
  margin-top: 1rem;
  margin-right: 1rem;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.uploader {
  border: 1px solid;
  padding: 10px;
}
.uploader-header {
  background-color: teal;
}
</style>
