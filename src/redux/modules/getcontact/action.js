import { getContact } from "../../../Service/getContact";
import { TRY_GET, IS_RESPONSE, IS_LOADING, IS_ERROR } from "./initial";

const setDataContact = (payload) => {

    return { type: IS_RESPONSE, payload }
}

const setLoading = () => {
    return { type: IS_LOADING }
}

const setError = () => {
    return { type: IS_ERROR }
}

export const fetchDataContact = () => async (dispatch, getState) => {
    dispatch(setLoading())
    const response = await getContact();
    dispatch(setDataContact(response.data))
    dispatch({ type: "TRY_UPDATE" })
    dispatch({ type: "TRY_CREATE" })
    dispatch({ type: "TRY_DELETE" })

}

export {
    setDataContact,
    setError,
    setLoading
}