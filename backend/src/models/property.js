import mongoose from "mongoose";
import validator from "validator"
const {Schema, model} = mongoose

const propertySchema = new Schema({
    name :{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        // required: true
    },
    price: {
        type: Number
    },
    Bedrooms: {
        type:Number,
        default:0,
        validate(value){
            if(!validator.isInt(value)){
                throw new Error("Number can not be a negative")
            }
        }
    },
    bathrooms: {
        type: Number,
        default:0,
        validate(value){
            if(!validator.isInt(value)){
                throw new Error("Number can not be a negative")
            }
        }
    },
    kitchen: {
        type: Number,
        default: 0,
        validate(value){
            if(!validator.isInt(value)){
                throw new Error("Number can not be a negative")
            }
        }
    }
}, 
{
    timestamps: true
})


const Property = model("Properties", propertySchema)
export default Property