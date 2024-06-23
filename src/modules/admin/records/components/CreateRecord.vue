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
                  v-model="age"
                  type="number"
                  label="Edad"
                  :rules="[(val: number ) => !!val || 'Campo requerido']"
                />
              </div>

              <div class="col-1">
                <q-select
                  v-model="gender"
                  :options="genderOptions"
                  label="Género"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="bdate"
                  type="date"
                  label="Fecha de Nacimiento"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="civilStatus"
                  label="Estado Civil"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="religion"
                  label="Religión"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="scolarship"
                  label="Escolaridad"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="occupation"
                  label="Ocupación"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="address"
                  label="Dirección"
                  :rules="[(val: any ) => !!val || 'Campo requerido']"
                />
              </div>
              <div class="col-2">
                <q-input
                  v-model="phone"
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
              <q-checkbox v-model="diarrhea" label="Diarrea" />
              <q-checkbox v-model="constipation" label="Estreñimiento" />
              <q-checkbox v-model="gastritis" label="Gastritis" />
              <q-checkbox v-model="ulcers" label="Úlceras" />
              <q-checkbox v-model="nausea" label="Náuseas" />
              <q-checkbox v-model="pyrosis" label="Pirosis" />
              <q-checkbox v-model="vomiting" label="Vómito" />
              <q-checkbox v-model="colitis" label="Colitis" />
              <q-checkbox
                v-model="stainedTeeth"
                label="Dentadura manchada"
              />
              <q-checkbox v-model="headache" label="Dolor de cabeza" />
              <q-checkbox v-model="kneePain" label="Dolor de rodillas" />

              <q-checkbox v-model="anemia" label="Anemia" />
              <q-checkbox v-model="diabetes" label="Diabetes" />
              <q-checkbox v-model="has" label="HAS" />
              <q-checkbox v-model="surgeries" label="Cirugías" />
              <q-checkbox
                v-model="overweightObesity"
                label="Sobrepeso u obesidad"
                class="q-mr-md"
              />
              <q-input
                v-model="otherDiseases"
                label="Otras enfermedades"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-input
                v-model="diagnosedDisease"
                label="Enfermedad diagnosticada"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-checkbox
                v-model="medications"
                label="Medicamentos"
                class="q-mr-md"
              />
              <q-input
                v-model="whichMedications"
                label="Cuáles medicamentos"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-input
                v-model="supplements"
                label="Suplementos alimenticios"
                class="q-mr-md"
                style="width: 200px"
              />
            </div>
          </q-gutter-md>
          <q-gutter-md>
            <div class="row q-col-gutter-y-lg">
              <q-input
                v-model="observations"
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
                v-model="familyObesity"
                label="Obesidad"
                class="q-mr-md"
              />
              <q-checkbox
                v-model="familyDiabetes"
                label="Diabetes"
                class="q-mr-md"
              />
              <q-checkbox
                v-model="familyHta"
                label="HTA"
                class="q-mr-md"
              />
              <q-checkbox
                v-model="familyCancer"
                label="Cáncer"
                class="q-mr-md"
              />
              <q-input
                v-model="familyOther"
                label="Otros"
                class="q-mr-md"
              />
            </div>
          </q-gutter-md>
          <q-gutter-md>
            <div class="q-mt-md">Estilo de Vida</div>
            <div class="row q-col-gutter-y-lg">
              <q-select
                v-model="physicalActivity"
                :options="activityOptions"
                label="Actividad física"
                style="width: 200px"
                class="q-mr-md"
              />
              <q-checkbox
                v-model="exercise"
                label="Ejercicio"
                class="q-mr-md"
              />
              <q-input
                v-model="exerciseType"
                label="Tipo de ejercicio"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-input
                v-model="exerciseFrequency"
                label="Frecuencia del ejercicio"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-input
                v-model="exerciseDuration"
                label="Duración del ejercicio"
                class="q-mr-md"
                style="width: 200px"
              />
              <q-input
                v-model="exerciseSince"
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
                v-model="alcohol"
                label="Alcohol (frecuencia y cantidad)"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="tobacco"
                label="Tabaco (frecuencia y cantidad)"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="coffee"
                label="Café (frecuencia y cantidad)"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="otherSubstances"
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
                v-model="generalSigns"
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
                v-model="mealsPerDay"
                type="number"
                label="Cuántas comidas hace al día"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="breakfastTime"
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
                        v-model="breakfastTime"
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
                v-model="lunchTime"
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
                      <q-time v-model="lunchTime" mask="HH:mm" format24h>
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
                v-model="dinnerTime"
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
                        v-model="dinnerTime"
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
                v-model="eatsBetweenMeals"
                label="Come entre comidas"
                class="q-mr-md"
              />
              <q-input
                v-if="record.eatsBetweenMeals"
                v-model="whatEatsBetweenMeals"
                label="Qué come entre comidas"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="whoPreparesFood"
                label="Quién prepara sus alimentos"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-select
                v-model="appetite"
                :options="appetiteOptions"
                label="Cómo considera su apetito"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="hungryTime"
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
                        v-model="hungryTime"
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
                v-model="foodDiscomfort"
                label="Alimentos que le causen malestar"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-checkbox
                v-model="foodAllergy"
                label="Es alérgico o intolerante a algún alimento"
                class="q-mr-md"
              />
              <q-input
                v-if="record.foodAllergy"
                v-model="foodAllergySpecific"
                label="Cuál alimento"
              />
              <q-checkbox
                v-model="addsSalt"
                label="Agrega sal a la comida después de preparada"
                class="q-mr-md"
              />
              <q-input
                v-if="record.addsSalt"
                v-model="addsSaltReason"
                label="¿Por qué?"
                class="q-mr-md"
                style="width: 250px"
              />
              <q-input
                v-model="cookingFat"
                label="Qué grasa utiliza para preparar sus alimentos"
                class="q-mr-md"
                style="width: 350px"
              />
              <q-checkbox
                v-model="nutritionalGuidance"
                label="Ha recibido orientación nutricional/dieta"
                class="q-mr-md"
              />
              <q-input
                v-if="record.nutritionalGuidance"
                v-model="nutritionalGuidanceReason"
                label="Motivo de la orientación nutricional/dieta"
                class="q-mr-md"
                style="width: 350px"
              />
              <q-checkbox
                v-model="weightLossMedication"
                label="Ha utilizado medicamentos para bajar de peso"
                class="q-mr-md"
              />
              <q-input
                v-if="record.weightLossMedication"
                v-model="weightLossMedicationDetails"
                label="Cuáles medicamentos para bajar de peso"
                class="q-mr-md"
                style="width: 350px"
              />
              <q-input
                v-model="waterIntake"
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
import { onMounted, ref } from 'vue';

const { loading, record, saveRecord,
        genderOptions, activityOptions,appetiteOptions, step } = useRecords();
    const age = ref<number>();
    const gender = ref<string>();
    const bdate = ref<Date>();
    const civilStatus = ref<string>();
    const religion = ref<string>();
    const scolarship = ref<string>();
    const occupation = ref<string>();
    const address = ref<string>();
    const phone = ref<string>();
    const diarrhea = ref<boolean>(false);
    const constipation = ref<boolean>(false);
    const gastritis = ref<boolean>(false);
    const ulcers = ref<boolean>(false);
    const nausea = ref<boolean>(false);
    const pyrosis = ref<boolean>(false);
    const vomiting = ref<boolean>(false);
    const colitis = ref<boolean>(false);
    const stainedTeeth = ref<boolean>(false);
    const headache = ref<boolean>(false);
    const kneePain = ref<boolean>(false);
    const anemia = ref<boolean>(false);
    const diabetes = ref<boolean>(false);
    const has = ref<boolean>(false);
    const overweightObesity = ref<boolean>(false);
    const surgeries = ref<boolean>(false);
    const otherDiseases = ref<string>();
    const observations = ref<string>();
    const diagnosedDisease = ref<string>();
    const medications = ref<boolean>(false);
    const whichMedications = ref<string>();
    const supplements = ref<string>();
    const familyObesity = ref<boolean>(false);
    const familyDiabetes = ref<boolean>(false);
    const familyHta = ref<boolean>(false);
    const familyCancer = ref<boolean>(false);
    const familyOther = ref<string>();
    const physicalActivity = ref<string>();
    const exercise = ref<boolean>(false);
    const exerciseType = ref<string>();
    const exerciseFrequency = ref<string>();
    const exerciseDuration = ref<string>();
    const exerciseSince = ref<string>();
    const alcohol = ref<string>();
    const tobacco = ref<string>();
    const coffee = ref<string>();
    const otherSubstances = ref<string>();
    const generalSigns = ref<string>();
    const mealsPerDay = ref<number | null>();
    const breakfastTime = ref<string>();
    const lunchTime = ref<string>();
    const dinnerTime = ref<string>();
    const eatsBetweenMeals = ref<boolean>(false);
    const whatEatsBetweenMeals = ref<string>();
    const whoPreparesFood = ref<string>();
    const appetite = ref<string>();
    const hungryTime = ref<string>();
    const foodDiscomfort = ref<string>();
    const foodAllergy = ref<boolean>(false);
    const foodAllergySpecific = ref<string>();
    const addsSalt = ref<boolean>(false);
    const addsSaltReason = ref<string>();
    const cookingFat = ref<string>();
    const nutritionalGuidance = ref<boolean>(false);
    const nutritionalGuidanceReason = ref<string>();
    const weightLossMedication = ref<boolean>(false);
    const weightLossMedicationDetails = ref<string>();
    const waterIntake = ref<number | null>();
const save = async () => {
    loading.value = true;
  record.value.isEdit = true;
    record.value.age = age.value ?? 0;
    record.value.gender = gender.value ?? '';
    record.value.bdate = bdate.value ?? new Date();
    record.value.civilStatus = civilStatus.value ?? '';
    record.value.religion = religion.value ?? '';
    record.value.scolarship = scolarship.value ?? '';
    record.value.occupation = occupation.value ?? '';
    record.value.address = address.value ?? '';
    record.value.phone = phone.value ?? '';
    record.value.diarrhea = diarrhea.value ?? false;
    record.value.constipation = constipation.value ?? false;
    record.value.gastritis = gastritis.value ?? false;
    record.value.ulcers = ulcers.value ?? false;
    record.value.nausea = nausea.value ?? false;
    record.value.pyrosis = pyrosis.value ?? false;
    record.value.vomiting = vomiting.value ?? false;
    record.value.colitis = colitis.value ?? false;
    record.value.stainedTeeth = stainedTeeth.value ?? false;
    record.value.headache = headache.value ?? false;
    record.value.kneePain = kneePain.value ?? false;
    record.value.anemia = anemia.value ?? false;
    record.value.diabetes = diabetes.value ?? false;
    record.value.has = has.value ?? false;
    record.value.overweightObesity = overweightObesity.value ?? false;
    record.value.surgeries = surgeries.value ?? false;
    record.value.otherDiseases = otherDiseases.value ?? '';
    record.value.observations = observations.value ?? '';
    record.value.diagnosedDisease = diagnosedDisease.value ?? '';
    record.value.medications = medications.value ?? false;
    record.value.whichMedications = whichMedications.value ?? '';
    record.value.supplements = supplements.value ?? '';
    record.value.familyObesity = familyObesity.value ?? false;
    record.value.familyDiabetes = familyDiabetes.value ?? false;
    record.value.familyHta = familyHta.value ?? false;
    record.value.familyCancer = familyCancer.value ?? false;
    record.value.familyOther = familyOther.value ?? '';
    record.value.physicalActivity = physicalActivity.value ?? '';
    record.value.exercise = exercise.value ?? false;
    record.value.exerciseType = exerciseType.value ?? '';
    record.value.exerciseFrequency = exerciseFrequency.value ?? '';
    record.value.exerciseDuration = exerciseDuration.value ?? '';
    record.value.exerciseSince = exerciseSince.value ?? '';
    record.value.alcohol = alcohol.value ?? '';
    record.value.tobacco = tobacco.value ?? '';
    record.value.coffee = coffee.value ?? '';
    record.value.otherSubstances = otherSubstances.value ?? '';
    record.value.generalSigns = generalSigns.value ?? '';
    record.value.mealsPerDay = mealsPerDay.value ?? 0;
    record.value.breakfastTime = breakfastTime.value ?? '';
    record.value.lunchTime = lunchTime.value ?? '';
    record.value.dinnerTime = dinnerTime.value ?? '';
    record.value.eatsBetweenMeals = eatsBetweenMeals.value ?? false;
    record.value.whatEatsBetweenMeals = whatEatsBetweenMeals.value ?? '';
    record.value.whoPreparesFood = whoPreparesFood.value ?? '';
    record.value.appetite = appetite.value ?? '';
    record.value.hungryTime = hungryTime.value ?? '';
    record.value.foodDiscomfort = foodDiscomfort.value ?? '';
    record.value.foodAllergy = foodAllergy.value ?? false;
    record.value.foodAllergySpecific = foodAllergySpecific.value ?? '';
    record.value.addsSalt = addsSalt.value ?? false;
    record.value.addsSaltReason = addsSaltReason.value ?? '';
    record.value.cookingFat = cookingFat.value ?? '';
    record.value.nutritionalGuidance = nutritionalGuidance.value ?? false;
    record.value.nutritionalGuidanceReason = nutritionalGuidanceReason.value ?? '';
    record.value.weightLossMedication = weightLossMedication.value ?? false;
    record.value.weightLossMedicationDetails = weightLossMedicationDetails.value ?? '';
    record.value.waterIntake = waterIntake.value ?? 0;
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
