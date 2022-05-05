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

const verifyRefreshToken = (refreshToken: string) => {
    return jwt.verify(
        refreshToken,
        config.jwt.jwt_refreshtoken_secret
    );
}

const verifyAccessToken = (accessToken: string) => {
    return jwt.verify(
        accessToken,
        config.jwt.jwt_accesstoken_secret
    );
}

export {generateAccessToken, generateRefreshToken, verifyRefreshToken, verifyAccessToken};