import methods from "micro-method-router"
import type { NextApiRequest, NextApiResponse } from "next"
export default methods({
    post(req: NextApiRequest, res: NextApiResponse) {
        const user = {
            email: "",
            id: "",
            cart: ["1234"],
        }
        const cart = user.cart
        cart.push(req.body.productId)
        user.cart = cart
        res.send(user)
    }

})