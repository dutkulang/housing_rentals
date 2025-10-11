import validator from "validator"

function loginChecker(request, response, next){
    const requiredFields = ["email", "password"]
    try {
        if(!request.body){
            throw new Error("Invalid request body")
        }
        const {email} = request.body
        if(!validator.isEmail(email)){
            throw new Error("Invalid credentials")
        }
        const requestKeys = Object.keys(request.body)
        if(!requestKeys.every(key=> requiredFields.includes(key))){
            throw new Error("Invalid credentials")
        }
        next()
    } catch (error) {
        response.status(400).json({
            error: error.message
        })
    }
    
}
export default loginChecker