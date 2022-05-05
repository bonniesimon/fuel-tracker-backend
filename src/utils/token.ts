import jwt from "jsonwebtoken";
import config from "../config/default";

interface User {
    fullName: string;
    email: string;
}

const generateAccessToken = (user: User) => {
    return jwt.sign(
            {fullName: user.fullName, email: user.email}, 
            config.jwt.jwt_accesstoken_secret, 
            {expiresIn: config.jwt.jwt_accesstoken_expires_in}
    );
}

const generateRefreshToken = (user: User) => {
    return jwt.sign(
        {fullName: user.fullName, email: user.email}, 
        config.jwt.jwt_refreshtoken_secret, 
        {expiresIn: config.jwt.jwt_refreshtoken_expires_in}
    )
}

export {generateAccessToken, generateRefreshToken};