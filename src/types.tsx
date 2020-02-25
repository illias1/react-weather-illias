import React from "react"


export type IAction<T> = {
    type: string,
    payload?: T,
};

export type IState = {
    fetched: boolean,
    loading: boolean,
    list: IList[],
    error: any
}

export type IList = {
    dt: number,
    main: IMain,
    weather: IWeather[],
    clouds: object,
    wind: object,
    rain: object,
    sys: object,
    dt_txt: string
}

export type IMain = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max:number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number,
}

export type IWeather = {
    id: number,
    main: string,
    description: string,
    icon:string,
}