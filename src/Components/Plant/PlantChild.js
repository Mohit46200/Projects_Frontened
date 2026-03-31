const PlantChild = (old = {}) => {
    return {
        ...old,
        path:"/plant",
         lazy: async () => ({
            Component: (await import("./Plant")).default,
                })
    }

}

export default PlantChild