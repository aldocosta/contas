import { BaseUriconstants } from "../../../config/constants/baseuri.constants";
import HttpService from "../../../config/http/http.service";

interface AcessToken {
    acess_token: string,
    statusCode: number
}

const login = async (username: string, password: string) => {

    const uri = `${BaseUriconstants.BASEURI}/auth/login`

    return HttpService.post<AcessToken>(
        uri,
        JSON.stringify({ username, password }),
        {
            'Content-Type': 'application/json'
        }
    )
}

const LoginService = {
    login
}

export default LoginService