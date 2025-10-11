import express from "express"
import { 
    getAProperty, 
    getAllProperties, 
    createAProperty, 
    deleteAProperty,
    patchAproperty
} from "../controllers/property.js"
const propertyRouter =  express.Router()

propertyRouter.get("", getAllProperties)

propertyRouter.get("/:propertyId", getAProperty )

propertyRouter.post("", createAProperty)

propertyRouter.delete("/:propertyId", deleteAProperty )

propertyRouter.patch("/:propertyId", patchAproperty)

export default propertyRouter;