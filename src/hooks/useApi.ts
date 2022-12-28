import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../api/axios";
import { refreshToken } from "../services";
import { AppDispatch, RootState } from "../store/store";

function useApi() {

    const authState = useSelector((store: RootState) => store.auth);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const requestIntercept = API.interceptors.request.use(
            (config) => {

                if (config.headers && !config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${authState.access_token}`;
                }
                
                return config;
            }, (error) => {
                Promise.resolve(error);
            }
        )

        const responseIntercept = API.interceptors.response.use(
            response => response,
            (error) => {
                const prevRequest = error.config;

                if(error.response.status === 403 && !prevRequest.sent){
                    prevRequest.sent = true;
                    dispatch(refreshToken());
                    return API(prevRequest);
                }

                return Promise.reject(error);
            }
        )

        return () => {
            API.interceptors.request.eject(requestIntercept);
            API.interceptors.response.eject(responseIntercept);
        }
    }, [authState])
    return API;
}
export default useApi