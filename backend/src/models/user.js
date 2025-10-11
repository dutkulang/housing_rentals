import mongoose from "mongoose"
import validator from "validator";
const {Schema, model} = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        minLength: [5, "Full name must have more than 5 characters"],
        maxLength: [35, "Full name can have a max of 50 characters"]
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email");
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: [8, "Password must be loner than 8 characters"],

    },
    gender: {
        type: String,
        enum: ["male", "female", "not specified"],
        default: "not specified"
    }

},{
    timestamps: true
})


const User = model("Users", userSchema)

export default User