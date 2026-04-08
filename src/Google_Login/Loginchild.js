const Loginchild = (old = {}) => {
    return {
        ...old,
        path:"/login",
        lazy: async () => ({
        Component: (await import("./Login")).default,
        })


    }
}

export default Loginchild