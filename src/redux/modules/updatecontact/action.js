import { IS_ERROR_UPDATE, IS_LOADING_UPDATE, IS_RESPONSE_UPDATE, TRY_UPDATE } from "./initial";
import { UpdateContact } from "../../../Service/updateContact";
import { fetchDataContact } from '../getcontact/action'
const setLoadingUpdate = () => {
    return { type: IS_LOADING_UPDATE }
}

const setErrorUpdate = () => {
    return { type: IS_ERROR_UPDATE }
}

const setResponseUpdate = (payload) => {
    return { type: IS_RESPONSE_UPDATE, payload }
}

const setDefaultUpdate = () => {
    return { type: TRY_UPDATE }
}




const UpdateContactAction = (data, id) => async (dispatch, getState) => {
    dispatch(setLoadingUpdate())
    const response = await UpdateContact(data, id)
    if (response.status === 201) {
        dispatch(fetchDataContact())
        dispatch(setResponseUpdate(response.data))
    } else {
        dispatch(setErrorUpdate())
    }
}


export {
    setLoadingUpdate,
    setResponseUpdate,
    setErrorUpdate,
    UpdateContactAction,
    setDefaultUpdate
}