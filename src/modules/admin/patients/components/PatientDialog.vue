<template>
  <q-dialog v-model="prompt" persistent backdrop-filter="blur(100%)">
    <q-card style="min-width: 350px; max-height: 55%">
      <q-card-section class="header">
        <div class="text-h6">Nuevo Paciente</div>
        <q-icon
          name="close"
          class="cursor-pointer"
          @click="reset"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="save" class="q-gutter-md">
          <q-stepper
            v-model="step"
            vertical
            animated
            header-nav
            style="height: 50%"
          >
            <q-step
              :name="1"
              title="Información Personal"
              :done="step > 1"
              color="secondary"
            >
              <q-input
                v-model="fullName"
                label="Nombre Completo"
                hint="Nombre(s) y Apellidos"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Campo Requerido.',
                ]"
              />

              <q-stepper-navigation>
                <q-btn
                  @click="step = 2"
                  label="Siguiente"
                  color="secondary"
                  :disable="fullName === ''"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="2"
              title="Crear Credenciales"
              icon="person"
              color="secondary"
              :done="step > 2"
            >
              <q-input
                v-model="email"
                label="Email"
                lazy-rules
                color="secondary"
                :rules="[validateEmail]"
              />
              <q-input
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                maxlength="12"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-list class="" style="max-width: 350px">
                <q-item class="test">
                  <div class="validations">
                    <q-icon
                      name="check_circle"
                      :color="upperCase ? 'green' : 'grey'"
                      class="q-mr-sm"
                    />
                    <q-item-label caption>Incluye Mayúscula</q-item-label>
                  </div>
                  <div class="validations">
                    <q-icon
                      name="check_circle"
                      :color="lowerCase ? 'green' : 'grey'"
                      class="q-mr-sm"
                    />
                    <q-item-label caption>Incluye Minúscula</q-item-label>
                  </div>
                  <div class="validations">
                    <q-icon
                      name="check_circle"
                      :color="number ? 'green' : 'grey'"
                      class="q-mr-sm"
                    />
                    <q-item-label caption>Incluye Número</q-item-label>
                  </div>
                </q-item>
              </q-list>

              <q-stepper-navigation>
                <q-btn
                  @click="step = 3"
                  color="secondary"
                  label="Siguiente"
                  :disabled="disabled"
                />
                <q-btn
                  flat
                  @click="step = 1"
                  color="secondary"
                  label="Regresar"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </q-step>

            <q-step
              :name="3"
              title="Finalizar"
              color="secondary"
              icon="add_comment"
            >
              <q-stepper-navigation>
                <q-btn
                  flat
                  color="secondary"
                  icon-right="save"
                  label="Guardar"
                  :loading="loading"
                  :disable="email === '' && password === ''"
                  @click="save"
                >
                  <template v-slot:loading>
                    <q-spinner-gears />
                  </template>
                </q-btn>
                <q-btn
                  flat
                  @click="reset"
                  color="secondary"
                  label="Cancelar"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </q-step>
          </q-stepper>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import usePatients from "../composables/usePatients";
import usePatientDialog from "../composables/usePatientDialog";

const { prompt } = usePatientDialog();
const { createPatient, loading, createRecordFromPatientView, getPatients } = usePatients();
const step = ref(1);
const isPwd = ref(true);
const createRecord = ref(false);

const email = ref("");
const fullName = ref("");
const password = ref("");
const upperCase = ref(false);
const lowerCase = ref(false);
const number = ref(false);
const disabled = ref(true);

const save = async () => {
  const result = await createPatient({
    email: email.value,
    fullName: fullName.value,
    password: password.value,
  },createRecord.value);

  if (result) {
      const response = await createRecordFromPatientView({
        userId: result.id ?? '',
        startWeigth: 0
      })
    reset();
    getPatients('')
  } else {
    console.log(result);
  }
};

const validateEmail = (val: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(val) || "Ingrese un email válido";
};

watch(password, () => {
  validations();
  disableBtn();
});

const validations = () => {
  const patternUppercase = /[A-Z]/;
  const patternLowercase = /[a-z]/;
  const patternNumbers = /[0-9]/;

  lowerCase.value = patternLowercase.test(password.value);
  upperCase.value = patternUppercase.test(password.value);
  number.value = patternNumbers.test(password.value);
};

const disableBtn = () => {
  disabled.value =
    email.value === "" || !lowerCase.value || !upperCase.value || !number.value;
};

const reset = () => {
  prompt.value = false;
  step.value = 1;
  email.value = "";
  fullName.value = "";
  password.value = "";
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
</style>
