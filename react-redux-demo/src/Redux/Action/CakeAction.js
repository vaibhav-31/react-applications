import { BUY_CAKE } from "../Constants/CakeType"
import { BUY_ICECREAM } from "../Constants/CakeType"

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}