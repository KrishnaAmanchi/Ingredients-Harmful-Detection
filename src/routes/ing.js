const express=require('express')

const router=new express.Router()

const Ingredient=require("../models/ingredients")

router.get("/ing/findcount",async(req,res)=>{
    const response=req.body
    var data = JSON.parse(response); 
    let low=0
    let medium=0
    let high=0
   
        try{
            
            for(ind=0;ind<data.length;ind=ind+1){
                
                let ing=await Ingredient.findLevel(data[ind]["name"])
                
                if(ing.harmful_level=="low"){
                    
                   low=low+1
                   
                   
                }
                else if(ing.harmful_level=="medium"){
                   medium=medium+1
                }
                else{
                    high=high+1
                }
            }
            const value=(low*0 + medium*0.5 + high*1)/(low + medium + high)
            res.status(200).send(value.toString())

            
        }
        catch(e){
            res.status(400).send(e)
        }
    
    

})

router.post('/ings',async(req,res)=>{
    
    const ingredient=new Ingredient({
        ...req.body
    })

    try{
       await ingredient.save()
        res.send(ingredient)
    }catch(e){
        res.status(400).send(e)
    }
    
})

module.exports=router