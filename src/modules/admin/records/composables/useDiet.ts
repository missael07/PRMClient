import axios from "axios";
import { FileResponse } from "../interfaces/file.interface";
import { ref } from "vue";

const BASE_URL = `${process.env.VUE_APP_API_URL}`;

const useDiet = () => {

    const isLoading = ref(false);
    const getDiets = async (recordId: string ) => {
        isLoading.value = true;
        const result = await axios.get(`${BASE_URL}/nutritional-diet/${recordId}`);
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

    return {
        getDiets,
        deleteDiet,
        isLoading
    }
}


export default useDiet;