import { configureStore, Action } from '@reduxjs/toolkit';
import React from 'react';


const ENDPOINT = 'https://dummyjson.com/products';


const initialState:Product[] = [];

export enum ActionType {
    LOAD_REQUEST = 'ActionType.LOAD_REQUEST',
    LOAD_UPDATE = 'ActionType.LOAD_UPDATE',
}


const reducer = (state:Product[], action:Action):Product[] => {
    switch(action.type) {
        case ActionType.LOAD_UPDATE:
            return action.payload;
        default:
            return state;
    }
}

const middleware = (store:any) => (next:any) => (action:Action<ActionType>) => {
    next(action);

    if(action.type === ActionType.LOAD_REQUEST) {
        fetch(ENDPOINT)
            .then((response) => response.json())
            .then((data) => {
                store.dispatch({type: ActionType.LOAD_UPDATE, payload: data.products});
            });
    }
}


const store = configureStore<any>({preloadedState:initialState, reducer, middleware:[middleware]});

export const useStore = () => {
    const [data, setData] = React.useState<Product[]>(store.getState());

    React.useEffect( () => store.subscribe(() => setData(store.getState())), []);

    return [data, store.dispatch] as [Product[], React.Dispatch<Action>];
}