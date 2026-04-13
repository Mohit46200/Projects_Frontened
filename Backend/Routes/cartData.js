const express = require("express")
const router = express.Router()
const CartData = require("../models/cartDataSchema")

router.post("/cartdata", async (req, res) => {
    try {
        const { email, product_id } = req.body;
        let cartdata = await CartData.findOne({email:email})
        if(cartdata){
            cartdata.product_id.push(product_id[0])
            await cartdata.save()
        }else{
            cartdata = await CartData.create({
                email:email,
                product_id:product_id
            })
        }

        res.status(201).json({
            message:"Success",
            data:cartdata
            
        })

    } catch (error) {
        console.log("Error is ", error);
    }
})

router.get("/cartcount/:email",async (req,res) => {
    try{
            const {email} = req.params
            const cartdata = await CartData.findOne({ email });

            res.status(200).json({
                data: cartdata
            })
    }catch(error){
        console.log("Error is ",error)
    }
})


module.exports = router;