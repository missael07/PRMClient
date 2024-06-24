import axios from "axios";
import { ref } from "vue"

const prompt = ref(false);
const recordId = ref('');

const BASE_URL = `${process.env.VUE_APP_API_URL}/api`;
const useDietDialog = () => {

    const isLoading = ref(false);
    const openDialog = (id: string) => {
        console.log(id)
        recordId.value = id;
        prompt.value = true;
    }
    const closeDialog = () => {
        prompt.value = true;
    }

    const saveFile = async (recordId: string, file: File | null | undefined) => {
        isLoading.value = true;
        const formData = new FormData();

        formData.append('file', file!);

        const result = await axios.post(`${BASE_URL}/nutritional-diet/${recordId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        isLoading.value = false;
        console.log(result)
        return result;

    }

    return {
        closeDialog,
        prompt,
        openDialog,
        recordId,
        saveFile,
        isLoading
    }
}

export default useDietDialog;