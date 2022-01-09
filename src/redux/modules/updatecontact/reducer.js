import { IS_ERROR_UPDATE, IS_LOADING_UPDATE, IS_RESPONSE_UPDATE, TRY_UPDATE } from "./initial";

const initialState = {
    Status: "",
    Loading: false,
    Error: false,
    Message: "Go Update Data",
    Data: {}
};



export default function reducer(state = initialState, actions) {

    switch (actions.type) {

        case TRY_UPDATE:
            return {
                ...state,
                Status: "",
                Loading: false,
                Error: false,
                Message: "Go Update Data",
                Data: {}
            }

        case IS_RESPONSE_UPDATE:
            return {
                ...state,
                Status: "ok",
                Loading: false,
                Error: false,
                Message: actions.payload.message,
                Data: actions.payload.data
            }
        case IS_LOADING_UPDATE:
            return {
                ...state,
                Status: "",
                Loading: true,
                Error: false,
                Message: "Waiting . . . . .",
                Data: {}
            }
        case IS_ERROR_UPDATE:
            return {
                ...state,
                Status: "err",
                Error: true,
                Loading: false,
                Message: "Sorry, an error occurred in the data store process",
                Data: {}
            }
        default:
            return state;
    }
}
