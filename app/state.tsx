import { atom } from "recoil";

export const addToCartState = atom({
    key: "addToCart",
    default: false
})
export const quantityState = atom({
    key: "quantity",
    default: {}
})
export const cartState = atom({
    key: "cart",
    default: []
})