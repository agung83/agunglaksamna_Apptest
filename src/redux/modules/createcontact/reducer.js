import { IS_ERROR_CREATE, IS_LOADING_CREATE, IS_RESPONSE_CREATE, TRY_CREATE } from "./initial";

const initialState = {
    Status: "",
    Loading: false,
    Error: false,
    Message: "Go Store New Data"
};



export default function reducer(state = initialState, actions) {

    switch (actions.type) {

        case TRY_CREATE:
            return {
                ...state,
                Status: "",
                Loading: false,
                Error: false,
                Message: "Go Store New Data"
            }

        case IS_RESPONSE_CREATE:
            return {
                ...state,
                Status: "ok",
                Loading: false,
                Error: false,
                Message: actions.payload
            }
        case IS_LOADING_CREATE:
            return {
                ...state,
                Status: "",
                Loading: true,
                Error: false,
                Message: "Waiting . . . . ."
            }
        case IS_ERROR_CREATE:
            return {
                ...state,
                Status: "err",
                Error: true,
                Loading: false,
                Message: "Sorry, an error occurred in the data store process"
            }
        default:
            return state;
    }
}
