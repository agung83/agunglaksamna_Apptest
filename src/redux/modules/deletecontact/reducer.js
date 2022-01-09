import { IS_ERROR_DELETE, IS_LOADING_DELETE, IS_RESPONSE_DELETE, TRY_DELETE } from "./initial";

const initialState = {
    LoadingDelete: false,
    ErrorDelete: false,
    SuccessDelete: false,
    MessageDelete: "",
};



export default function reducer(state = initialState, actions) {

    switch (actions.type) {

        case TRY_DELETE:
            return {
                ...state,
                LoadingDelete: false,
                ErrorDelete: false,
                SuccessDelete: false,
                MessageDelete: "",
            }

        case IS_RESPONSE_DELETE:
            return {
                ...state,
                LoadingDelete: false,
                ErrorDelete: false,
                SuccessDelete: true,
                MessageDelete: actions.payload.message,
            }
        case IS_LOADING_DELETE:
            return {
                ...state,
                LoadingDelete: true,
                ErrorDelete: false,
                SuccessDelete: false,
                MessageDelete: "Waiting . . . . .",

            }
        case IS_ERROR_DELETE:
            return {
                ...state,
                ErrorDelete: true,
                LoadingDelete: false,
                SuccessDelete: false,
                MessageDelete: "Sorry, for now delete is not working",
            }
        default:
            return state;
    }
}
