<template>
    <q-inner-loading :showing="loading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
    <div class="row items-end justify-end q-mr-md" v-if="!isEditable">
        <router-link :to="{name: 'History', params: { id: record.id}}" class="q-mr-md"> Ver Historial de Dietas</router-link>
        <q-btn color="secondary" @click="isEditable = !isEditable" icon-right="edit" class="q-mr-md">
            Edit
        </q-btn>
        <q-btn color="secondary" @click="isEditable = !isEditable" class="q-mr-md" disable>
            Agregar Informacón Extra
        </q-btn>
        <q-btn color="secondary" @click="openDietDialog" icon-right="add" class="q-mr-md">
            Agregar Dieta
        </q-btn>
    </div>
  <div class="q-pa-md" v-if="record.isEdit ">
    <q-gutter-md>
      <div class="row q-col-gutter-x-xl q-col-gutter-y-lg">
        <div class="col-1">
          <q-input :readonly="!isEditable"
            v-model="record.age"
            type="number"
            label="Edad"
            :rules="[(val: any ) => !!val || 'Campo requerido']"
          />
        </div>

        <div class="col-1">
          <q-select :readonly="!isEditable"
            v-model="record.gender"
            :options="genderOptions"
            label="Género"
            :rules="[(val: any ) => !!val || 'Campo requerido']"
          />
        </div>
        <div class="col-2">
          <q-input :readonly="!isEditable"
            v-model="record.bdate"
            type="date"
            label="Fecha de Nacimiento"
            :rules="[(val: any ) => !!val || 'Campo requerido']"
          />
        </div>
        <div class="col-2">
          <q-input :readonly="!isEditable"
            v-model="record.civilStatus"
            label="Estado Civil"
            :rules="[(val: any ) => !!val || 'Campo requerido']"
          />
        </div>
        <div class="col-2">
          <q-input :readonly="!isEditable"
            v-model="record.religion"
            label="Religión"
            :rules="[(val: any ) => !!val || 'Campo requerido']"
          />
        </div>
        <div class="col-2">
          <q-input :readonly="!isEditable"
            v-model="record.scolarship"
            label="Escolaridad"
            :rules="[(val: any ) => !!val || 'Campo requerido']"
          />
        </div>
        <div class="col-2">
          <q-input :readonly="!isEditable"
            v-model="record.occupation"
            label="Ocupación"
            :rules="[(val: any ) => !!val || 'Campo requerido']"
          />
        </div>
        <div class="col-2">
          <q-input :readonly="!isEditable"
            v-model="record.address"
            label="Dirección"
            :rules="[(val: any ) => !!val || 'Campo requerido']"
          />
        </div>
        <div class="col-2">
          <q-input :readonly="!isEditable"
            v-model="record.phone"
            label="Teléfono"
            :rules="[(val: any ) => !!val || 'Campo requerido']"
          />
        </div>
      </div>
      <div class="row q-col-gutter-y-lg">
      <q-checkbox :disable="!isEditable" v-model="record.diarrhea" label="Diarrea" />
      <q-checkbox :disable="!isEditable" v-model="record.constipation" label="Estreñimiento" />
      <q-checkbox :disable="!isEditable" v-model="record.gastritis" label="Gastritis" />
      <q-checkbox :disable="!isEditable" v-model="record.ulcers" label="Úlceras" />
      <q-checkbox :disable="!isEditable" v-model="record.nausea" label="Náuseas" />
      <q-checkbox :disable="!isEditable" v-model="record.pyrosis" label="Pirosis" />
      <q-checkbox :disable="!isEditable" v-model="record.vomiting" label="Vómito" />
      <q-checkbox :disable="!isEditable" v-model="record.colitis" label="Colitis" />
      <q-checkbox :disable="!isEditable" v-model="record.stainedTeeth" label="Dentadura manchada" />
      <q-checkbox :disable="!isEditable" v-model="record.headache" label="Dolor de cabeza" />
      <q-checkbox :disable="!isEditable" v-model="record.kneePain" label="Dolor de rodillas" />

      <q-checkbox :disable="!isEditable" v-model="record.anemia" label="Anemia" />
      <q-checkbox :disable="!isEditable" v-model="record.diabetes" label="Diabetes" />
      <q-checkbox :disable="!isEditable" v-model="record.has" label="HAS" />
      <q-checkbox :disable="!isEditable" v-model="record.surgeries" label="Cirugías" />
      <q-checkbox :disable="!isEditable"
          v-model="record.overweightObesity"
          label="Sobrepeso u obesidad"
          class="q-mr-md"
        />
        <q-input :readonly="!isEditable"
          v-model="record.otherDiseases"
          label="Otras enfermedades"
          class="q-mr-md"
          style="width: 200px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.diagnosedDisease"
          label="Enfermedad diagnosticada"
          class="q-mr-md"
          style="width: 200px"
        />
      <q-checkbox :disable="!isEditable"
          v-model="record.medications"
          label="Medicamentos"
          class="q-mr-md"
        />
        <q-input :readonly="!isEditable"
          v-model="record.whichMedications"
          label="Cuáles medicamentos"
          class="q-mr-md"
          style="width: 200px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.supplements"
          label="Suplementos alimenticios"
          class="q-mr-md"
          style="width: 200px"
        />
      </div>
      <div class="row q-col-gutter-y-lg">
        <q-input :readonly="!isEditable"
          v-model="record.observations"
          label="Observaciones"
          counter
          :filled="false"
          autogrow
          maxlength="200"
          class="q-mr-md"
          style="width: 200px"
        />
      </div>

      <div class="q-mt-md">Antecedentes Familiares</div>
      <div class="row q-col-gutter-y-lg">
      <q-checkbox :disable="!isEditable"
          v-model="record.familyObesity"
          label="Obesidad"
          class="q-mr-md"
        />
      <q-checkbox :disable="!isEditable"
          v-model="record.familyDiabetes"
          label="Diabetes"
          class="q-mr-md"
        />
      <q-checkbox :disable="!isEditable" v-model="record.familyHta" label="HTA" class="q-mr-md" />
      <q-checkbox :disable="!isEditable"
          v-model="record.familyCancer"
          label="Cáncer"
          class="q-mr-md"
        />
        <q-input :readonly="!isEditable" v-model="record.familyOther" label="Otros" class="q-mr-md" />
      </div>
      <div class="q-mt-md">Estilo de Vida</div>
      <div class="row q-col-gutter-y-lg">
        <q-select :disable="!isEditable"
          v-model="record.physicalActivity"
          :options="activityOptions"
          label="Actividad física"
          style="width: 200px"
          class="q-mr-md"
        />
      <q-checkbox :disable="!isEditable"
          v-model="record.exercise"
          label="Ejercicio"
          class="q-mr-md"
        />
        <q-input :readonly="!isEditable"
          v-model="record.exerciseType"
          label="Tipo de ejercicio"
          class="q-mr-md"
          style="width: 200px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.exerciseFrequency"
          label="Frecuencia del ejercicio"
          class="q-mr-md"
          style="width: 200px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.exerciseDuration"
          label="Duración del ejercicio"
          class="q-mr-md"
          style="width: 200px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.exerciseSince"
          label="Desde cuándo lo practica"
          class="q-mr-md"
          style="width: 200px"
        />
      </div>
      <div class="row q-col-gutter-y-lg">
        <q-input :readonly="!isEditable"
          v-model="record.alcohol"
          label="Alcohol (frecuencia y cantidad)"
          class="q-mr-md"
          style="width: 250px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.tobacco"
          label="Tabaco (frecuencia y cantidad)"
          class="q-mr-md"
          style="width: 250px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.coffee"
          label="Café (frecuencia y cantidad)"
          class="q-mr-md"
          style="width: 250px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.otherSubstances"
          label="Otros (especifique)"
          class="q-mr-md"
          style="width: 250px"
        />
      </div>
      <div class="q-mt-md">Rasgos Generales</div>
      <div class="row q-col-gutter-y-lg">
        <q-input :readonly="!isEditable"
          v-model="record.generalSigns"
          label="Cabello, ojos, piel, uñas, labios, encías, etc."
          counter
          autogrow
          maxlength="500"
          style="width: 100%"
        />
      </div>
      <div class="row q-col-gutter-y-lg">
        <q-input :readonly="!isEditable"
          v-model="record.mealsPerDay"
          type="number"
          label="Cuántas comidas hace al día"
          class="q-mr-md"
          style="width: 250px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.breakfastTime"
          label="Horario Desayuno"
          class="q-mr-md"
          style="width: 170px"
        >
          <template v-slot:append>
            <q-icon v-if="isEditable" name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="record.breakfastTime" mask="HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input :readonly="!isEditable"
          v-model="record.lunchTime"
          label="Horario Comida"
          class="q-mr-md"
          style="width: 150px"
        >
          <template v-slot:append>
            <q-icon v-if="isEditable" name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="record.lunchTime" mask="HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input :readonly="!isEditable"
          v-model="record.dinnerTime"
          label="Horario Cena"
          class="q-mr-md"
          style="width: 150px"
        >
          <template v-slot:append>
            <q-icon v-if="isEditable" name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="record.dinnerTime" mask="HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      <q-checkbox :disable="!isEditable"
          v-model="record.eatsBetweenMeals"
          label="Come entre comidas"
          class="q-mr-md"
        />
        <q-input :readonly="!isEditable"
          v-if="record.eatsBetweenMeals"
          v-model="record.whatEatsBetweenMeals"
          label="Qué come entre comidas"
          class="q-mr-md"
          style="width: 250px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.whoPreparesFood"
          label="Quién prepara sus alimentos"
          class="q-mr-md"
          style="width: 250px"
        />
        <q-select :disable="!isEditable"
          v-model="record.appetite"
          :options="appetiteOptions"
          label="Cómo considera su apetito"
          class="q-mr-md"
          style="width: 250px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.hungryTime"
          label="A qué hora le da más hambre"
          class="q-mr-md"
          style="width: 250px"
        >
          <template v-slot:append>
            <q-icon v-if="isEditable" name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="record.hungryTime" mask="HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input :readonly="!isEditable"
          v-model="record.foodDiscomfort"
          label="Alimentos que le causen malestar"
          class="q-mr-md"
          style="width: 250px"
        />
      <q-checkbox :disable="!isEditable"
          v-model="record.foodAllergy"
          label="Es alérgico o intolerante a algún alimento"
          class="q-mr-md"
        />
        <q-input :readonly="!isEditable"
          v-if="record.foodAllergy"
          v-model="record.foodAllergySpecific"
          label="Cuál alimento"
        />
      <q-checkbox :disable="!isEditable"
          v-model="record.addsSalt"
          label="Agrega sal a la comida después de preparada"
          class="q-mr-md"
        />
        <q-input :readonly="!isEditable"
          v-if="record.addsSalt"
          v-model="record.addsSaltReason"
          label="¿Por qué?"
          class="q-mr-md"
          style="width: 250px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.cookingFat"
          label="Qué grasa utiliza para preparar sus alimentos"
          class="q-mr-md"
          style="width: 350px"
        />
      <q-checkbox :disable="!isEditable"
          v-model="record.nutritionalGuidance"
          label="Ha recibido orientación nutricional/dieta"
          class="q-mr-md"
        />
        <q-input :readonly="!isEditable"
          v-if="record.nutritionalGuidance"
          v-model="record.nutritionalGuidanceReason"
          label="Motivo de la orientación nutricional/dieta"
          class="q-mr-md"
          style="width: 350px"
        />
      <q-checkbox :disable="!isEditable"
          v-model="record.weightLossMedication"
          label="Ha utilizado medicamentos para bajar de peso"
          class="q-mr-md"
        />
        <q-input :readonly="!isEditable"
          v-if="record.weightLossMedication"
          v-model="record.weightLossMedicationDetails"
          label="Cuáles medicamentos para bajar de peso"
          class="q-mr-md"
          style="width: 350px"
        />
        <q-input :readonly="!isEditable"
          v-model="record.waterIntake"
          type="number"
          label="Cuánta agua natural toma al día"
          class="q-mr-md"
          style="width: 250px"
        />
      </div>
    </q-gutter-md>
    <q-btn
    v-if="isEditable"  
    @click="save"
      color="secondary"
      label="Save"
      :loading="loading"
    >
      <template v-slot:loading>
        <q-spinner-gears />
      </template>
    </q-btn>
  </div>
  <NutritionalDiet />
</template>

<script setup lang="ts">
import { Record } from "../interfaces/record.interface";
import useRecords from "../composables/useRecords";
import { ref } from 'vue';
import useDietDialog from '../composables/useDietDialog';
import NutritionalDiet from "./NutritionalDiet.vue";

const { openDialog } = useDietDialog();

const {
  loading,
  record,
  saveRecord,
  genderOptions,
  activityOptions,
  appetiteOptions
} = useRecords();

const save = async () => {
  loading.value = true;
  record.value.isEdit = true;
  await saveRecord(record.value);
  isEditable.value = false;
};

const isEditable = ref(false)

const openDietDialog = () => {
   openDialog(record.value.id ?? '')
}
</script>

<style scoped></style>
