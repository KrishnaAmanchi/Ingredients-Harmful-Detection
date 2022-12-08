const mongoose=require('mongoose')

const validator=require('validator')

const ingSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    harmful_level:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    description:{
        type:String
    }
})
ingSchema.statics.findLevel=async(ing)=>{
        
        const ingredient=await Ingredient.findOne({"name":ing})
        
        if(!ingredient){
            return new Error('No Item')
        }
        return ingredient
  
}

const Ingredient=mongoose.model('Ingredient',ingSchema)

module.exports=Ingredient