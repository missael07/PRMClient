import axios from "axios"

const BASE_URL = `http://localhost:3000/api`;
// const BASE_URL = `${process.env.VUE_APP_API_URL}/api`;
const useAuth = ()  => {

    const signIn = async (credentials: any) => {
        const result = await axios.post(`${BASE_URL}/auth/signin`, credentials)
        localStorage.setItem('role', result.data.roles)
        return result.data;
    }

    const redirectToAdminSite = (role: string) => {
        return role === 'admin';
    }
    const removeToken = () => {
        localStorage.removeItem('token');
      }
    return {
        signIn,
        removeToken,
        redirectToAdminSite
    }

}

export default useAuth;