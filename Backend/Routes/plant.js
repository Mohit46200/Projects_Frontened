const express = require("express")
const router = express.Router()

router.get("/plant",(req,res) => {
    res.json({
        "0": {
            "name": "Aloe Vera",
            "price": 150,
            "product_id":254054013,
            "description": "Aloe Vera is a low maintenance succulent known for medicinal properties, soothing gel, and excellent indoor air purifying benefits.",
            "image": "https://media.istockphoto.com/id/1007753852/photo/aloe.webp?a=1&b=1&s=612x612&w=0&k=20&c=wBN_JuyzE3dH9kuZv5kp6Rf21TnICqZBQFhO8VN6t6c="
        },
        "1": {
            "name": "Snake Plant",
            "price": 200,
            "product_id":254054014,
            "description": "Snake Plant is a hardy indoor plant that survives low light, improves air quality, and requires minimal watering and care.",
            "image": "https://images.unsplash.com/photo-1687552212914-03a30c82053c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25ha2UlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D"
        },
        "2": {
            "name": "Money Plant",
            "price": 120,
            "product_id":254054015,
            "description": "Money Plant is a popular indoor vine believed to bring prosperity, easy to grow, and thrives in water or soil.",
            "image": "https://plus.unsplash.com/premium_photo-1674237276501-595398f90f87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9uZXklMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D"
        },
        "3": {
            "name": "Peace Lily",
            "price": 250,
            "product_id":254054016,
            "description": "Peace Lily is an elegant flowering plant that purifies indoor air, prefers shade, and blooms beautiful white flowers regularly.",
            "image": "https://plus.unsplash.com/premium_photo-1708769592969-9f42825496a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVhY2UlMjBsaWx5fGVufDB8fDB8fHww"
        },
        "4": {
            "name": "Spider Plant",
            "price": 180,
            "product_id":254054017,
            "description": "Spider Plant is a fast growing indoor plant with arching leaves, excellent air purifier, and produces baby plantlets easily.",
            "image": "https://images.unsplash.com/photo-1611527664689-d430dd2a6774?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BpZGVyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D"
        },
        "5": {
            "name": "Areca Palm",
            "price": 300,
            "product_id":254054018,
            "description": "Areca Palm is a decorative indoor plant that adds tropical feel, improves humidity, and grows well in indirect sunlight conditions.",
            "image": "https://plus.unsplash.com/premium_photo-1681256187605-2d66160926a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJlY2ElMjBwYWxtfGVufDB8fDB8fHww"
        },
        "6": {
            "name": "Tulsi",
            "price": 100,
            "product_id":254054019,
            "description": "Tulsi is a sacred medicinal plant in India, used in Ayurveda, boosts immunity, and grows well in sunlight with moderate watering.",
            "image": "https://images.unsplash.com/photo-1665479754958-1a8bdc47cc0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVsc2l8ZW58MHx8MHx8fDA%3D"
        },
        "7": {
            "name": "Cactus",
            "price": 90,
            "product_id":254054020,
            "description": "Cactus is a drought resistant plant ideal for beginners, requires very little water, and thrives in bright sunlight conditions.",
            "image": "https://images.unsplash.com/photo-1554631221-f9603e6808be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FjdHVzfGVufDB8fDB8fHww"
        },
        "8": {
            "name": "Jade Plant",
            "price": 220,
            "product_id":25405402,
            "description": "Jade Plant is a succulent symbolizing good luck, easy to maintain, stores water in leaves, and prefers bright indirect light.",
            "image": "https://plus.unsplash.com/premium_photo-1675802754634-3e0967bd3fab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFkZSUyMHBsYW50fGVufDB8fDB8fHww"
        },
        "9": {
            "name": "Rubber Plant",
            "price": 280,
            "product_id":254054022,
            "description": "Rubber Plant has large glossy leaves, enhances indoor aesthetics, removes toxins, and grows best in bright filtered light environments.",
            "image": "https://images.unsplash.com/photo-1669392597221-bbfd4b6e13ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnViYmVyJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D"
        },
        "10": {
            "name": "Bamboo Plant",
            "price": 160,
            "product_id":254054023,
            "description": "Lucky Bamboo is associated with good fortune, grows in water easily, requires indirect light, and is widely used for decoration.",
            "image": "https://images.unsplash.com/photo-1696873849175-6f7d099511ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFtYm9vJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D"
        },
        "11": {
            "name": "Lavender",
            "price": 260,
            "product_id":254054024,
            "description": "Lavender is a fragrant herb known for calming effects, used in aromatherapy, requires sunlight, and well drained soil for growth.",
            "image": "https://images.unsplash.com/photo-1625414502665-28dc895c37bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGF2ZW5kZXIlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D"
        }
        })

})

module.exports = router