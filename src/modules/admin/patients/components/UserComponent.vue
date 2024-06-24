<template>
  <div class="login-container q-mt-xl">
    <div class="row items-center justify-center">
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div class="text-h6">Nuevo Paciente</div>
            <q-form @submit="save" class="q-gutter-md">
                <q-input
                    v-model="fullName"
                    label="Nombre Completo"
                    hint="Nombre(s) y Apellidos"
                    lazy-rules
                    :rules="[
                        (val: string) => (val && val.length > 0) || 'Campo Requerido.',
                        ]"
                />
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
                <q-list style="max-width: 350px">
                    <q-item class="validations-list">
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
                <div class="flex justify-end">
                    <q-btn
                        flat
                        color="secondary"
                        icon-right="save"
                        label="Guardar"
                        :loading="loading"
                        :disable="disabled"
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
                </div>
            </q-form>
        </div>
    </div>
  </div>

</template>

<script setup lang="ts">
    import { useRoute, useRouter } from "vue-router";
    import { onMounted } from "vue";
    import { ref, watch } from "vue";
    import usePatients from "../composables/usePatients";
    import Swal from "sweetalert2";
    
    const { createPatient, loading, createRecordFromPatientView, getPatients, getPatient } =
    usePatients();

    const { params } = useRoute();
    const id = params.id;    
    const isPwd = ref(true);
    const createRecord = ref(false);
    const email = ref("");
    const fullName = ref("");
    const password = ref("");
    const upperCase = ref(false);
    const lowerCase = ref(false);
    const number = ref(false);
    const disabled = ref(true);
    const router = useRouter();

    onMounted(async () => {
        if(id.toString() !== '0' ){
            console.log(id);
            const patientId = id;
            const result = await getPatient(patientId.toString())
            email.value = result.email;
            fullName.value = result.fullName
            console.log(email)
        }
    });

    const save = async () => {
    const result = await createPatient(
        {
        email: email.value,
        fullName: fullName.value,
        password: password.value,
        },
        createRecord.value
    );

    if (result) {
        const response = await createRecordFromPatientView({
        userId: result.id ?? "",
        startWeigth: 0,
        });
        reset();
        getPatients("");
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
    Swal.fire({
        title: "Quieres Regresar?",
        text: "Los cambios no seran guardados",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#26A69A",
        cancelButtonColor: "#365B6D",
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            router.push({ name: "Users" });
        }
    });
    };
</script>

<style scoped>
.validations-list {
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
