export async function getAllProperties(request, response){
    response.json({
        data: "list of properties"
    })
}

export async function getAProperty(request, response){
    response.status(206).json({
        data: `Got property of ID ${request?.params?.propertyId}`
    })
}

export async function createAProperty(request, response){
    response.status(201).json({
        data: `Got property of ID ${request?.params?.propertyId}`
    })
}

export async function deleteAProperty(request, response){
    response.status(200).json({
        data: `Deleted property of ID ${request?.params?.propertyId}`
    })
}

export async function patchAproperty(request, response){
    response.status(206).json({
        data: `Updated property of ID ${request?.params?.propertyId}`
    })
}