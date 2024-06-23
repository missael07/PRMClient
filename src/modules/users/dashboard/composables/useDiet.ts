import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ref } from "vue";

const BASE_URL = `http://localhost:3000/api`;
// const BASE_URL = `${process.env.VUE_APP_API_URL}/api`;


interface JWTResponse {
    role: string;
    exp: number;
    id: string;
  }

const usePatientDiet = () => {

    const isLoading = ref(false);
    const getDiets = async (recordId: string ) => {
        isLoading.value = true;
        const result = await axios.get(`${BASE_URL}/records/${recordId}`);
        isLoading.value = false;
        return result.data;
    }

    const deleteDiet = async (id: string, publicId: string) => {
        isLoading.value = true;
        const result = await axios.delete(`${BASE_URL}/nutritional-diet/${id}`, {
            params: {
                publicId
            }
        })
        isLoading.value = false;
        return result.status
    }

    const decodeToken = () => {
        const token = localStorage.getItem('token') ?? '';

        const decodedToken = <JWTResponse>jwtDecode(token);

        return decodedToken?.id;
    }

    return {
        getDiets,
        deleteDiet,
        isLoading,
        decodeToken
    }
}


export default usePatientDiet;