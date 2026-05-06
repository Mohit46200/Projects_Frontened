const CheckoutChild = (old = {}) => {

        return {
            ...old,
            path:"/checkout",
            lazy: async () => ({
                Component: (await import("./Checkout")).default,
            })
        }
}

export default CheckoutChild