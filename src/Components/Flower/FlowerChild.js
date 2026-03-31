const FlowerChild = (old = {}) => {
    return {
        ...old,
        path:"/flower",
        lazy: async () => ({
                Component: (await import("./Flowers")).default,
        })
    }
}

export default FlowerChild