/// <reference types="vite/client" />

declare interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

declare interface Action {
    type: ActionType;
    payload?: any;
}