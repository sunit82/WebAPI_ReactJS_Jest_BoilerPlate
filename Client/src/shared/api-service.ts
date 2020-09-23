import Axios, { AxiosResponse } from 'axios';

const axiosInstance = Axios.create();

const baseApiUri = "https://localhost:44362/";

const generateDataAPIUri = baseApiUri + "api/home/Index";

/* istanbul ignore next */
export const getHomeDataFromAPI = (): Promise<string> => {
    return AxiosGet<string>(`${generateDataAPIUri}`)
        .then((response) => {
            return response.data;
        })
        .catch((reason) => {
            console.log(reason);
            throw new Error(reason);
        });
}

/* istanbul ignore next */
export const AxiosGet = <T>(url: string): Promise<AxiosResponse<T>> => {
    return axiosInstance.get<T>(url)
        .catch((error) => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                return Promise.reject(error.response);
            } else if (error.request) {
                // The request was made but no response was received
                return Promise.reject(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                return Promise.reject(error);
            }
        })
}