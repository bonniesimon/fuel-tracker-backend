import { Request, Response, NextFunction } from "express";
import log from "../utils/logger";
import { verifyAccessToken } from "../utils/token";

const auth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader: string | undefined = req.headers["authorization"];
    const token: string | undefined = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            status: "Fail",
            message: "A token requierd for authentication",
        });
    }

    try {
        const decoded = verifyAccessToken(token);
    } catch(error: any) {
        log.error(error);
        if (error.name === "JsonWebTokenError" && error.message === "invalid signature") {
			return res.status(401).json({
				status: "Fail",
				message: "Unauthorized user"
			});
		}

        if (error.name === "TokenExpiredError" && error.message === "jwt expired") {
            return res.status(401).json({
                status: "Fail",
                message: "jwt expired"
            })
        }
        return res.status(500).json({
			status: "Error",
			message: "Internal Server Error",
		});
    }

    return next();
}

export default auth;