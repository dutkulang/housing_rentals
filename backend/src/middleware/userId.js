import validator from "validator";

function checkUserId(request, response, next){
    try{
        if(!request.params){
            throw new Error("user Id required")
        }
        if(!validator.isMongoId(request.params.userId)){
            throw new Error("Invalid user Id ")
        }
        request.userId = request.params.userId
        next()
    } catch(error){
        response.status(400).json({
            error: error.message
        })
    }
}
export default checkUserId;