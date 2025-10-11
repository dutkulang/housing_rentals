import User from "../models/user.js"
import validator from "validator"

export async function getAllUsers(request, response){
    try {
        const users = await User.find({}, "fullName password email")
        
        response.status(200).json({
            users
        })
    } catch (error) {
        response.status(400).json({
            error: error.message

        })
    }
}

export async function getAUser(request, response){
    try{
        
        const user  = await User.findById(request.userId)
        if(!user){
            throw new Error("No user found")
        }
        response.status(200).json(user)

    } catch(error){
        response.status(400).json({
            error: error.message
        })
    }
}

export async function deleteAUser(request, response){
    try{
        const user  = await User.findByIdAndDelete(request.userId)
        if(!user){
            throw new Error("User Not found")
        }
        response.status(202).json({
            message: "user deleted successfully"
        })
    } catch(error){
        response.status(400).json({
            error: error.message
        })
    }
}
