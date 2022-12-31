import { BaseUriconstants } from "../../../config/constants/baseuri.constants";
import HttpService from "../../../config/http/http.service";

interface AcessToken {
    acess_token: string,
    statusCode: number
}

const findAll = async () => {

    const uri = `${BaseUriconstants.BASEURI}/users/all`

    return HttpService.get(uri, {
        'Content-Type': 'application/json'
    })
}

const saveUser = async (body:any) => {

    const uri = `${BaseUriconstants.BASEURI}/users/create`

    return HttpService.post(uri,body,{
        'Content-Type': 'application/json'
    })
}

const UserService = {
    findAll,
    saveUser
}

export default UserService