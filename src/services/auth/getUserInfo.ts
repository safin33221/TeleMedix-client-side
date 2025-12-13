import jwt, { JwtPayload } from "jsonwebtoken"
import { getCookies } from "./tokenHandler"
import { UserInfo } from "@/types/user"


export const getUserInfo = async (): Promise<UserInfo | null> => {
    try {
        const accessToken = await getCookies("accessToken")
        if (!accessToken) {
            return null
        }

        const verifiedToken = jwt.verify(accessToken, process.env.JWT_SECRET as string || "") as JwtPayload
        if (!verifiedToken) {
            return null
        }

        const userInfo: UserInfo = {
            email: verifiedToken.email,
            role: verifiedToken.role
        }
        return userInfo
    } catch (error) {
        console.log(error);
        return null

    }
}