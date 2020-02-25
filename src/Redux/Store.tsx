import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { IState, IAction } from "../types";


const initialState: IState = {
    fetched: false,
    loading: false,
    list: [{
        dt: 0,
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max:0,
            pressure: 0,
            sea_level: 0,
            grnd_level: 0,
            humidity: 0,
            temp_kf: 0,
        },
        weather: [
            {
                id: 0,
                main: "",
                description: "",
                icon:"",
            }
        ],
        clouds: {},
        wind: {},
        rain: {},
        sys: {},
        dt_txt: ''
    }],
    error: ''
}

const reducer = (state: IState = initialState, action: IAction<any>) => {
    switch(action.type){
        case "fetchStarted":
            return {
                ...state,
                loading: true,
            }
        case "fetchSuccess":
            return {
                ...state,
                loading: false,
                fetched: true,
                list: action.payload
            }
        case "fetchError":
            return {
                ...state,
                loading: false,
                fetched: true,
                error: action.payload
            }
        default:
            return state
    }
}

export const store = createStore(reducer, applyMiddleware(thunk));