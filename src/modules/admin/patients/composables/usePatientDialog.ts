import { ref } from "vue"

const prompt = ref(false);
const usePatientDialog = () => {

    const openDialog = () => {
        prompt.value = true;
    }
    const closeDialog = () => {
        prompt.value = true;
    }

    return {
        closeDialog,
        prompt,
        openDialog
    }
}

export default usePatientDialog;