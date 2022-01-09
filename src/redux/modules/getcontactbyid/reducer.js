
import { TRY_GET_ID, IS_RESPONSE_ID, IS_LOADING_ID, IS_ERROR_ID } from "./initial";

const initialState = {
    Response: {},
    Status: "",
    Loading: false,
    Error: false,
    Message: ""
};



export default function reducer(state = initialState, actions) {

    switch (actions.type) {

        case TRY_GET_ID:
            return { ...state }

        case IS_RESPONSE_ID:
            return {
                ...state,
                Loading: false,
                Error: false,
                Response: actions.payload.data,
                Status: "ok",
                Message: actions.payload.message
            }
        case IS_LOADING_ID:
            return {
                ...state,
                Loading: true,
                Error: false,
                Message: "Waiting . . . . ."
            }
        case IS_ERROR_ID:
            return {
                ...state,
                Error: true,
                Loading: false,
                Message: "Sorry, an error occurred in the data collection process"
            }
        default:
            return state;
    }
}
