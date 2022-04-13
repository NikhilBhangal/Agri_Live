import reducer from "./reducer";
import {createStore} from "redux";


const initialState = { loggedin : false }
const mystore = createStore(reducer, initialState)

export default mystore;