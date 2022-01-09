import { combineReducers } from "redux";

import { GetContactReducer, CreateContactReducer, GetContactByIdReducer, UpdateContactReducer, DeleteContactReducer } from './modules'


export default combineReducers({
    GetContactReducer,
    CreateContactReducer,
    GetContactByIdReducer,
    UpdateContactReducer,
    DeleteContactReducer
})