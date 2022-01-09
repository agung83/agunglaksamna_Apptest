import { IS_ERROR_DELETE, IS_LOADING_DELETE, IS_RESPONSE_DELETE, TRY_DELETE } from "./initial";
import { deleteContact } from "../../../Service/deleteContact";
import { fetchDataContact } from '../getcontact/action'


const setLoadingDelete = () => {
    return { type: IS_LOADING_DELETE }
}

const setErrorDelete = () => {
    return { type: IS_ERROR_DELETE }
}

const setResponseDelete = (payload) => {
    return { type: IS_RESPONSE_DELETE, payload }
}

const setDefaultDelete = () => {
    return { type: TRY_DELETE }
}




const DeleteContactAction = (id) => async (dispatch, getState) => {
    dispatch(setLoadingDelete())
    const response = await deleteContact(id)
    if (response.status === 201) {
        dispatch(fetchDataContact())
        dispatch(setResponseDelete(response.data))
    } else {
        dispatch(setErrorDelete())
    }
}


export {
    setLoadingDelete,
    setResponseDelete,
    setErrorDelete,
    DeleteContactAction,
    setDefaultDelete
}