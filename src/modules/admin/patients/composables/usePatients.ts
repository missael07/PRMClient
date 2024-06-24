import axios from "axios";
import { ref } from "vue";
import { Patient } from "../interface/patient.interface";

const patientList = ref<Patient[]>([]);

const BASE_URL = `http://localhost:3000/api`;
// const BASE_URL = `${process.env.VUE_APP_API_URL}/api`;

const loading = ref(false);
const usePatients = () => {
  const getPatients = async (term: string) => {
    loading.value = true;
    const result = await axios.get(`${BASE_URL}/patients`, {
      params: { term },
    });
    patientList.value = result.data;
    loading.value = false;
  };

  const createPatient = (patient: {
    fullName: string;
    email: string;
    password: string;
  }, createRecord: boolean): Promise<Patient> => {
    loading.value = true;
    return new Promise<Patient>((resolve, reject) => {
      axios
        .post(`${BASE_URL}/patients`, patient)
        .then((response) => {
          if(!createRecord) {
            loading.value = false;
          }
          resolve(response.data);
        })
        .catch((error) => {
          loading.value = false;
          reject(error.response);
        });
    });
  };

  const createRecordFromPatientView = ( record: {userId: string, startWeigth: number }) => {
    loading.value = true;
    return new Promise<any>((resolve, reject) => {
      axios
        .post(`${BASE_URL}/records`, record)
        .then((response) => {
          loading.value = false;
          resolve(response.data);
        })
        .catch((error) => {
          loading.value = false;
          reject(error.response);
        });
    });
  }

  const getPatient = async (id: string) => {
    loading.value = true;
    const result = await axios.get(`${BASE_URL}/patients/${id}`);
    loading.value = false;
    console.log(result.data[0]);
    return result.data[0];
  }

  return {
    getPatients,
    patientList,
    createPatient,
    loading,
    createRecordFromPatientView,
    getPatient
  };
};

export default usePatients;
