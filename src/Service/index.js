import axios from "axios";


// const { REACT_APP_BASE_URL } = process.env
let instance = axios;

const initialHeader = {
    "Content-Type": "application/json",
};

export function setUpAxios() {
    instance.interceptors.request.use((req) => {

        console.log(req)
        return req;
    });
    instance.interceptors.response.use((res) => {

        console.log(res)

        return res;
    }, (err) => {
        console.log(err.response)

        return Promise.reject(err)
    })
}


export default function HttpRequest(config) {

    const baseURL = `https://simple-contact-crud.herokuapp.com/`;

    const headers = {
        ...initialHeader,
    };


    const finalConfig = {
        baseURL,
        headers,
        ...config,
    };
    // RETURN AXIOS
    return instance.request(finalConfig);
}