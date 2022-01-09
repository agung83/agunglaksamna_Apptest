
import { IS_RESPONSE, IS_LOADING, IS_ERROR, TRY_GET } from './initial'

const initialState = {
    Response: [],
    Status: "",
    Loading: false,
    Error: false,
    Message: ""
};



export default function reducer(state = initialState, actions) {

    switch (actions.type) {

        case TRY_GET:
            return { ...state }

        case IS_RESPONSE:
            return {
                ...state,
                Loading: false,
                Error: false,
                Response: actions.payload.data.reverse(),
                Status: "ok",
                Message: actions.payload.message
            }
        case IS_LOADING:
            return {
                ...state,
                Loading: true,
                Error: false,
                Message: "Fetching. . . . ."
            }
        case IS_ERROR:
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
