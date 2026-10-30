import mongoose from "mongoose"
const PersonSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }
})
const Person=
mongoose.models.Person||
mongoose.model("Person",PersonSchema);
export default Person;