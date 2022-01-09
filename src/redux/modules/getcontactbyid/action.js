import { getContactById } from "../../../Service/getContactById";
import { IS_RESPONSE_ID, IS_LOADING_ID, IS_ERROR_ID } from "./initial";

const setDataContact = (payload) => {

    return { type: IS_RESPONSE_ID, payload }
}

const setLoading = () => {
    return { type: IS_LOADING_ID }
}

const setError = () => {
    return { type: IS_ERROR_ID }
}

export const fetchDataContactById = (id) => async (dispatch, getState) => {
    dispatch(setLoading())
    const response = await getContactById(id);
    dispatch(setDataContact(response.data))


}

export {
    setDataContact,
    setError,
    setLoading
}