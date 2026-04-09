const express = require("express")
const router = express.Router()

router.get("/flower", (req, res) => {
  res.json({
        "0": {
        "name": "Rose",
        "price": 50,
        "product_id":254054001,
        "image": "https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=418&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Rose is a classic fragrant flower symbolizing love and beauty, widely used in bouquets, perfumes, and decorative gardens."
      },
      "1": {
        "name": "Tulip",
        "price": 45,
        "product_id":254054002,
        "image": "https://images.unsplash.com/photo-1561181226-e8a7edd504c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHVsaXB8ZW58MHx8MHx8fDA%3D",
        "description": "Tulip is a vibrant spring flower available in many colors, symbolizing elegance and freshness, perfect for gardens and gifting."
      },
      "2": {
        "name": "Lily",
        "price": 60,
        "product_id":254054003,
        "image": "https://images.unsplash.com/photo-1628268891244-88936ac667fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlsbHl8ZW58MHx8MHx8fDA%3D.jpg",
        "description": "Lily is an elegant flower known for its large petals and fragrance, often used in ceremonies, decorations, and ornamental gardens."
      },
      "3": {
        "name": "Sunflower",
        "price": 30,
        "product_id":254054004,
        "image": "https://images.unsplash.com/photo-1591385059241-220496bc6b7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bmZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D.jpg",
        "description": "Sunflower is a bright yellow flower that follows sunlight, symbolizing positivity, happiness, and warmth, commonly grown in fields."
      },
      "4": {
        "name": "Daisy",
        "price": 25,
        "product_id":254054005,
        "image": "https://images.unsplash.com/photo-1600264195762-c10ff160b264?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFpc3l8ZW58MHx8MHx8fDA%3D.jpg",
        "description": "Daisy is a simple and cheerful flower symbolizing innocence and purity, often found in gardens, meadows, and floral arrangements."
      },
      "5": {
        "name": "Orchid",
        "price": 120,
        "product_id":254054012,
        "image": "https://images.unsplash.com/photo-1605996370592-b6f7a81e382e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JjaGlkfGVufDB8fDB8fHww.jpg",
        "description": "Orchid is an exotic and delicate flower admired for its unique patterns, long-lasting blooms, and popularity in indoor decoration."
      },
      "6": {
        "name": "Marigold",
        "price": 20,
        "product_id":254054006,
        "image": "https://plus.unsplash.com/premium_photo-1674529969582-80cfca991fb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFyaWdvbGR8ZW58MHx8MHx8fDA%3D.jpg",
        "description": "Marigold is a bright orange and yellow flower used in festivals, decorations, and rituals, known for its strong fragrance."
      },
      "7": {
        "name": "Jasmine",
        "price": 35,
        "product_id":254054007,
        "image": "https://images.unsplash.com/photo-1612380635121-411eda9ecbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFzbWluZXxlbnwwfHwwfHx8MA%3D%3D.jpg",
        "description": "Jasmine is a fragrant white flower used in perfumes and teas, symbolizing purity, love, and widely grown in warm climates."
      },
      "8": {
        "name": "Lavender",
        "price": 45,
        "product_id":254054008,
        "image": "https://plus.unsplash.com/premium_photo-1688045685821-4958c1e28322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGF2ZW5kZXJ8ZW58MHx8MHx8fDA%3D.jpg",
        "description": "Lavender is a purple aromatic flower known for calming properties, widely used in oils, perfumes, and herbal remedies."
      },
      "9": {
        "name": "Lotus",
        "price": 80,
        "product_id":254054009,
        "image": "https://images.unsplash.com/photo-1616435577207-ca90abc6b732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG90dXN8ZW58MHx8MHx8fDA%3D",
        "description": "Lotus is a sacred aquatic flower symbolizing purity and enlightenment, commonly found in ponds and associated with spirituality."
      },
      "10": {
        "name": "Hibiscus",
        "price": 30,
        "product_id":2540540010,
        "image": "https://images.unsplash.com/photo-1617691119505-36f0ca2d90e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGlidXNjdXN8ZW58MHx8MHx8fDA%3D.jpg",
        "description": "Hibiscus is a colorful tropical flower used in teas and decorations, known for large petals and vibrant appearance."
      },
      "11": {
        "name": "Peony",
        "price": 90,
        "product_id":254054011,
        "image": "https://images.unsplash.com/photo-1560583035-6d14e41fac5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvbnl8ZW58MHx8MHx8fDA%3D",
        "description": "Peony is a lush and full blooming flower symbolizing prosperity and romance, often used in weddings and garden landscapes."
      }
  })
})

module.exports = router