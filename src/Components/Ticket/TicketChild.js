const TicketChild = (old = {}) => {
    return {
        ...old,
        path:"/ticket",
         lazy: async () => ({
            Component: (await import("./Ticket")).default,
                })
    }

}

export default TicketChild