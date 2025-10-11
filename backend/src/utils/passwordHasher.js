import bcrypt from "bcrypt";

export async function hashPassword(password, salt = 10){
    return bcrypt.hash(password, salt)
}

export async function compareHash(password, passwordhash){
    return bcrypt.compare(password, passwordhash)
}