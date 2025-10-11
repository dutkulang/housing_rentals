import validator from "validator"
import User from "../models/user.js"

async function signupChecker(request, response, next){
    const requiredFields = ["fullName", "email", "password"]
    try {
        if(!request.body){
            throw new Error("Invalid request body")
        }
        const {email} = request.body
        if(!validator.isEmail(email)){
            throw new Error("Invalid credentials")
        }
        
        const requestKeys = Object.keys(request.body)
        if(!requiredFields.every(key=> requestKeys.includes(key))){
            throw new Error("Invalid credentials")
        }
        next()
    } catch (error) {
        response.status(400).json({
            error: error.message
        })
    }
}

export default signupChecker