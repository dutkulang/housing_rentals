import { hashPassword, compareHash } from "../utils/passwordHasher.js"
import User from "../models/user.js"

export async function login(request, response){
    try {
        const {email, password} = request?.body
    const user = await User.findOne({email: email})
    if(!user){
        throw new Error("User does not exist")
    }
    if(! await compareHash(password, user.password)){
        throw new Error("Invalid credentials")
    }
    response.json({
        message: "login success"
    })
        
    } catch (error) {
        response.status(400).json({
            error: error.message
        })
    }
}
export async function signup(request, response){
    try {
        let {fullName, email, password} = request?.body
        
        if(await User.findOne({email: email})){            
            throw new Error("Email has already been used")
        }
        const hash = await hashPassword(password)
        const user  = await User({fullName, email, password:hash}).save()
        response.json({
            message: "signup success***",
            user
        })
        
    } catch (error) {
        response.status(400).json({
            error: error.message
        })
    }
}