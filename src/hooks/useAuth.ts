import { useSelector } from "react-redux"
import API from "../api/axios";
import { RootState } from "../store/store"

export const useAuth = () => {
    const authState = useSelector((store: RootState) => store.auth);


    const refreshToken = async () => {
        const reponse = await API.get('/refresh', {
            withCredentials: true
        });
    }

    return {
        ...authState,
        refreshToken
    }
}


export default useAuth;
