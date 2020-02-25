import {IAction} from "../types"
import { ThunkAction } from "redux-thunk"
import { Action } from "redux"
import axios from "axios"

export const fetchStarted = (): IAction<void> =>  ({type: "fetchStarted"})

export const fetchSuccess = (list: object[]): IAction<object> =>  ({type: "fetchSuccess", payload: list})

export const fetchError = (error: any): IAction<any> =>  ({type: "fetchError", payload: error})

export const fetch = (city: string): 
    ThunkAction<Promise<void>, {}, {}, Action<any>> => (
    async dispatch => {
        dispatch(fetchStarted());
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=833b6f8c172a91dc208898dd518d05d2`;
        console.log(url);
        try {
            const response = await axios.get(url);
            const list: object[] = response.data.list;
            dispatch(fetchSuccess(list));
          } catch (error) {
            console.error(error);
            dispatch(fetchError(error));
          }
    }
)