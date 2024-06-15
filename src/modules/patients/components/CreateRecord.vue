<template>
  <div class="q-pa-md" v-if="!record.isEdit && !loading">
    <q-form>
      <q-stepper
        v-model="step"
        color="secondary"
        vertical
        animated
        style="background: transparent"
      >
        <q-step
          :name="1"
          title="DATOS PERSONALES DEL PX"
          icon="settings"
          color="secondary"
          :done="step > 1"
        >
          <q-gutter-md>
            <div class="row q-col-gutter-x-xl q-col-gutter-y-lg">
              <div class="col-1">
                <q-input
                  v-model="record.age"
                  type="number"
                  label="Edad"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>

              <div class="col-1">
                <q-select
                  v-model="record.gender"
                  :options="genderOptions"
                  label="Género"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="record.bdate"
                  type="date"
                  label="Fecha de Nacimiento"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="record.civilStatus"
                  label="Estado Civil"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="record.religion"
                  label="Religión"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="record.scolarship"
                  label="Escolaridad"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="record.occupation"
                  label="Ocupación"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="record.address"
                  label="Dirección"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="record.phone"
                  label="Teléfono"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
            </div>
          </q-gutter-md>
        </q-step>
        <q-step
          :name="2"
          title="ANTECEDENTES DE SALUD / ENFERMEDADES"
          icon="assignment"
          :color="step >= 2 ? 'secondary' : 'grey'"
          :done="step > 1"
        >
          <q-gutter-md>
            <div class="row q-col-gutter-y-lg">
              <q-checkbox v-model="record.diarrhea" label="Diarrea" />
              <q-checkbox v-model="record.constipation" label="Estreñimiento" />
              <q-checkbox v-model="record.gastritis" label="Gastritis" />
              <q-checkbox v-model="record.ulcers" label="Úlceras" />
              <q-checkbox v-model="record.nausea" label="Náuseas" />
              <q-checkbox v-model="record.pyrosis" label="Pirosis" />
              <q-checkbox v-model="record.vomiting" label="Vómito" />
              <q-checkbox v-model="record.colitis" label="Colitis" />
              <q-checkbox
                v-model="record.stainedTeeth"
                label="Dentadura manchada"
              />
              <q-checkbox v-model="record.headache" label="Dolor de cabeza" />
              <q-checkbox v-model="record.kneePain" label="Dolor de rodillas" />

              <q-checkbox v-model="record.anemia" label="Anemia" />
              <q-checkbox v-model="record.diabetes" label="Diabetes" />
              <q-checkbox v-model="record.has" label="HAS" />
              <q-checkbox v-model="record.surgeries" label="Cirugías" />
              <q-checkbox
                v-model="record.overweightObesity"
                label="Sobrepeso u obesidad"
                class="q-mr-md"
              />
              <q-input
                v-model="record.otherDiseases"
                label="Otras enfermedades"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-input
                v-model="record.diagnosedDisease"
                label="Enfermedad diagnosticada"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-checkbox
                v-model="record.medications"
                label="Medicamentos"
                class="q-mr-md"
              />
              <q-input
                v-model="record.whichMedications"
                label="Cuáles medicamentos"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-input
                v-model="record.supplements"
                label="Suplementos alimenticios"
                class="q-mr-md"
                style="width: 200px"
              />
            </div>
          </q-gutter-md>
          <q-gutter-md>
            <div class="row q-col-gutter-y-lg">
              <q-input
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
          </q-gutter-md>
        </q-step>
        <q-step
          :name="3"
          title="ANTECEDENTES FAMILIARES Y ESTILO DE VIDA"
          icon="fitness_center"
          :done="step > 3"
          :color="step >= 3 ? 'secondary' : 'grey'"
        >
          <q-gutter-md>
            <div class="q-mt-md">Antecedentes Familiares</div>
            <div class="row q-col-gutter-y-lg">
              <q-checkbox
                v-model="record.familyObesity"
                label="Obesidad"
                class="q-mr-md"
              />
              <q-checkbox
                v-model="record.familyDiabetes"
                label="Diabetes"
                class="q-mr-md"
              />
              <q-checkbox
                v-model="record.familyHta"
                label="HTA"
                class="q-mr-md"
              />
              <q-checkbox
                v-model="record.familyCancer"
                label="Cáncer"
                class="q-mr-md"
              />
              <q-input
                v-model="record.familyOther"
                label="Otros"
                class="q-mr-md"
              />
            </div>
          </q-gutter-md>
          <q-gutter-md>
            <div class="q-mt-md">Estilo de Vida</div>
            <div class="row q-col-gutter-y-lg">
              <q-select
                v-model="record.physicalActivity"
                :options="activityOptions"
                label="Actividad física"
                style="width: 200px"
                class="q-mr-md"
              />
              <q-checkbox
                v-model="record.exercise"
                label="Ejercicio"
                class="q-mr-md"
              />
              <q-input
                v-model="record.exerciseType"
                label="Tipo de ejercicio"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-input
                v-model="record.exerciseFrequency"
                label="Frecuencia del ejercicio"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-input
                v-model="record.exerciseDuration"
                label="Duración del ejercicio"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-input
                v-model="record.exerciseSince"
                label="Desde cuándo lo practica"
                class="q-mr-md"
                style="width: 200px"
              />
            </div>
          </q-gutter-md>
        </q-step>
        <q-step
          :name="4"
          title="CONSUMO DE SUSTANCIAS Y RASGOS GENERALES"
          icon="fitness_center"
          :done="step > 4"
          :color="step >= 4 ? 'secondary' : 'grey'"
        >
          <q-gutter-md>
            <div class="q-mt-md">Consumo de Sustancias</div>
            <div class="row q-col-gutter-y-lg">
              <q-input
                v-model="record.alcohol"
                label="Alcohol (frecuencia y cantidad)"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="record.tobacco"
                label="Tabaco (frecuencia y cantidad)"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="record.coffee"
                label="Café (frecuencia y cantidad)"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="record.otherSubstances"
                label="Otros (especifique)"
                class="q-mr-md"
                style="width: 250px"
              />
            </div>
          </q-gutter-md>
          <q-gutter-md>
            <div class="q-mt-md">Rasgos Generales</div>
            <div class="row q-col-gutter-y-lg">
              <q-input
                v-model="record.generalSigns"
                label="Cabello, ojos, piel, uñas, labios, encías, etc."
                counter
                autogrow
                maxlength="500"
                style="width: 100%"
              />
            </div>
          </q-gutter-md>
        </q-step>
        <q-step
          :name="5"
          title="INDICADORES DIETÉTICOS"
          icon="restaurant"
          :done="step > 5"
          :color="step >= 5 ? 'secondary' : 'grey'"
        >
          <q-gutter-md>
            <div class="row q-col-gutter-y-lg">
              <q-input
                v-model="record.mealsPerDay"
                type="number"
                label="Cuántas comidas hace al día"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="record.breakfastTime"
                label="Horario Desayuno"
                class="q-mr-md"
                style="width: 170px"
              >
                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time
                        v-model="record.breakfastTime"
                        mask="HH:mm"
                        format24h
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input
                v-model="record.lunchTime"
                label="Horario Comida"
                class="q-mr-md"
                style="width: 150px"
              >
                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time v-model="record.lunchTime" mask="HH:mm" format24h>
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input
                v-model="record.dinnerTime"
                label="Horario Cena"
                class="q-mr-md"
                style="width: 150px"
              >
                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time
                        v-model="record.dinnerTime"
                        mask="HH:mm"
                        format24h
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-checkbox
                v-model="record.eatsBetweenMeals"
                label="Come entre comidas"
                class="q-mr-md"
              />
              <q-input
                v-if="record.eatsBetweenMeals"
                v-model="record.whatEatsBetweenMeals"
                label="Qué come entre comidas"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="record.whoPreparesFood"
                label="Quién prepara sus alimentos"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-select
                v-model="record.appetite"
                :options="appetiteOptions"
                label="Cómo considera su apetito"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="record.hungryTime"
                label="A qué hora le da más hambre"
                class="q-mr-md"
                style="width: 250px"
              >
                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time
                        v-model="record.hungryTime"
                        mask="HH:mm"
                        format24h
                      >
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input
                v-model="record.foodDiscomfort"
                label="Alimentos que le causen malestar"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-checkbox
                v-model="record.foodAllergy"
                label="Es alérgico o intolerante a algún alimento"
                class="q-mr-md"
              />
              <q-input
                v-if="record.foodAllergy"
                v-model="record.foodAllergySpecific"
                label="Cuál alimento"
              />
              <q-checkbox
                v-model="record.addsSalt"
                label="Agrega sal a la comida después de preparada"
                class="q-mr-md"
              />
              <q-input
                v-if="record.addsSalt"
                v-model="record.addsSaltReason"
                label="¿Por qué?"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="record.cookingFat"
                label="Qué grasa utiliza para preparar sus alimentos"
                class="q-mr-md"
                style="width: 350px"
              />
              <q-checkbox
                v-model="record.nutritionalGuidance"
                label="Ha recibido orientación nutricional/dieta"
                class="q-mr-md"
              />
              <q-input
                v-if="record.nutritionalGuidance"
                v-model="record.nutritionalGuidanceReason"
                label="Motivo de la orientación nutricional/dieta"
                class="q-mr-md"
                style="width: 350px"
              />
              <q-checkbox
                v-model="record.weightLossMedication"
                label="Ha utilizado medicamentos para bajar de peso"
                class="q-mr-md"
              />
              <q-input
                v-if="record.weightLossMedication"
                v-model="record.weightLossMedicationDetails"
                label="Cuáles medicamentos para bajar de peso"
                class="q-mr-md"
                style="width: 350px"
              />
              <q-input
                v-model="record.waterIntake"
                type="number"
                label="Cuánta agua natural toma al día"
                class="q-mr-md"
                style="width: 250px"
              />
            </div>
          </q-gutter-md>
        </q-step>
        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn
              @click="stepValidation"
              color="secondary"
              :label="step === 5 ? 'Finish' : 'Continue'"
              :loading="loading"
            >
              <template v-slot:loading>
                <q-spinner-gears />
              </template>
            </q-btn>
            <q-btn
              v-if="step > 1"
              flat
              color="secondary"
              @click="step -= 1"
              label="Back"
              class="q-ml-sm"
              style="font-weight: bold"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { Record } from "../interfaces/record.interface";
import useRecords from "../composables/useRecords";

const { loading, record, saveRecord,
        genderOptions, activityOptions,appetiteOptions, step } = useRecords();

const save = async () => {
    loading.value = true;
  record.value.isEdit = true;
  console.log(record.value);
  const result = await saveRecord(record.value)
  console.log(result)
};

const stepValidation = async () => {
    if( step.value === 5) {
       await save();
    } else {
        step.value += 1;
    }
}
</script>

<style scoped></style>
