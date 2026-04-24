const CartChild = (old = {}) => {
    return {
        ...old,
        path:"/cart",
         lazy: async () => ({
            Component: (await import("./Cart")).default,
                })
    }

}

export default CartChild