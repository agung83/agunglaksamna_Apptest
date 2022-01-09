import { IS_ERROR_CREATE, IS_LOADING_CREATE, IS_RESPONSE_CREATE, TRY_CREATE } from "./initial";
import { CreateContact } from "../../../Service/createContact";
import { fetchDataContact } from '../getcontact/action'
const setLoadingCreate = () => {
    return { type: IS_LOADING_CREATE }
}

const setErrorCreate = () => {
    return { type: IS_ERROR_CREATE }
}

const setReseponseCreate = (payload) => {
    return { type: IS_RESPONSE_CREATE, payload }
}


const SaveContactAction = (data) => async (dispatch, getState) => {
    dispatch(setLoadingCreate())
    const response = await CreateContact(data)
    if (response.status === 201) {
        dispatch(fetchDataContact())
        dispatch(setReseponseCreate(response.data.message))
        dispatch({ type: "TRY_CREATE" })
    } else {
        dispatch(setErrorCreate())
    }
}


export {
    setLoadingCreate,
    setReseponseCreate,
    setErrorCreate,
    SaveContactAction,
}