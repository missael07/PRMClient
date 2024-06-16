import axios from "axios"

const BASE_URL = `${process.env.VUE_APP_API_URL}/api`;
const useAuth = ()  => {

    const signIn = async (credentials: any) => {
        const result = await axios.post(`${BASE_URL}/auth/signin`, credentials)
        console.log(result)
        return result.data;
    }

    return {
        signIn
    }

}

export default useAuth;