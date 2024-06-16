import axios from "axios"
import { ref } from "vue"
import { Record } from "../interfaces/record.interface";


const BASE_URL = `${process.env.VUE_APP_API_URL}/api`;
// const BASE_URL = `http://localhost:3000/api`;

const recordList = ref([]);
const loading = ref(false);
const record = ref<Record>({
    isEdit: false,
    age: undefined,
    startWeigth: undefined,
    gender: "",
    bdate: undefined,
    civilStatus: "",
    religion: "",
    scolarship: "",
    occupation: "",
    address: "",
    phone: "",
    diarrhea: false,
    constipation: false,
    gastritis: false,
    ulcers: false,
    nausea: false,
    pyrosis: false,
    vomiting: false,
    colitis: false,
    stainedTeeth: false,
    headache: false,
    kneePain: false,
    anemia: false,
    diabetes: false,
    has: false,
    overweightObesity: false,
    surgeries: false,
    otherDiseases: "",
    observations: "",
    diagnosedDisease: "",
    medications: false,
    whichMedications: "",
    supplements: "",
    familyObesity: false,
    familyDiabetes: false,
    familyHta: false,
    familyCancer: false,
    familyOther: "",
    physicalActivity: "",
    exercise: false,
    exerciseType: "",
    exerciseFrequency: "",
    exerciseDuration: "",
    exerciseSince: "",
    alcohol: "",
    tobacco: "",
    coffee: "",
    otherSubstances: "",
    generalSigns: "",
    mealsPerDay: undefined,
    breakfastTime: "",
    lunchTime: "",
    dinnerTime: "",
    eatsBetweenMeals: false,
    whatEatsBetweenMeals: "",
    whoPreparesFood: "",
    appetite: "",
    hungryTime: "",
    foodDiscomfort: "",
    foodAllergy: false,
    foodAllergySpecific: "",
    addsSalt: false,
    addsSaltReason: "",
    cookingFat: "",
    nutritionalGuidance: false,
    nutritionalGuidanceReason: "",
    weightLossMedication: false,
    weightLossMedicationDetails: "",
    waterIntake: undefined,
  });

const step = ref(1);

const genderOptions = [
  { label: "Masculino", value: "male" },
  { label: "Femenino", value: "female" },
  { label: "Otro", value: "other" },
];

const activityOptions = [
  { label: "Muy ligera", value: "muy ligera" },
  { label: "Ligera", value: "ligera" },
  { label: "Moderada", value: "moderada" },
  { label: "Pesada", value: "pesada" },
  { label: "Excepcional", value: "excepcional" },
];
const appetiteOptions = [
  { label: "Bueno", value: "bueno" },
  { label: "Malo", value: "malo" },
  { label: "Regular", value: "regular" },
];

const useRecords = () => {
    const getRecords = async ( term: string ) => {

        loading.value = true;
        const result = await axios.get(`${BASE_URL}/records`);
        loading.value = false;
        console.log(result);

        recordList.value = result.data;
    }

    const getRecord = async ( id: string ) => {
        loading.value = true;
        const result = await axios.get(`${BASE_URL}/records/${id}`);
        return result.data;
    }

    const saveRecord = async (record: Record) => {

        const { id, user, startDate, ...rest} = record;
        loading.value = true;
        const result = await axios.patch(`${BASE_URL}/records/${id}`, rest);
        loading.value = false;
        return result.data;
    }

    return {
        getRecords,
        getRecord,
        recordList,
        loading,
        record,
        saveRecord,
        genderOptions,
        activityOptions,appetiteOptions, step

    }
}

export default useRecords;