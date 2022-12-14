const express=require('express')

const router=new express.Router()

const Ingredient=require("../models/ingredients")

router.post("/ing/findcount",async(req,res)=>{
    var data=req.body
     
    
    var arr=[]
        try{
            
            for(ind=0;ind<data.length;ind=ind+1){
                let ing_data=data[ind]
                let low=0
                let medium=0
                let high=0
                for(j=0;j<ing_data.length;j++){
                let ing=await Ingredient.findLevel(ing_data[j].name)
                
                if(ing.harmful_level=="low"){
                    
                   low=low+1
                   
                   
                }
                else if(ing.harmful_level=="medium"){
                   medium=medium+1
                }
                else if(ing.harmful_level=="high"){
                    high=high+1
                }
                
            }
            console.log(low)
            console.log(medium)
            console.log(high)
            let value=(low*0 + medium*0.5 + high*1)/(low + medium + high)
            let obj={value:value.toString()}
            arr.push(obj)
            }
            
           
            res.status(200).send(arr)

            
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