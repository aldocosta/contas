import { AuthConstants } from "../../components/hooks/constants/auth.constants";
import StorageService from "../../components/hooks/services/storage.service";
import { HttpMethods } from "./constants/http.enum";

const post = async <T>(uri: string, body: string, headers: {}): Promise<T> => {

    const storage = StorageService.retrieveStorage(AuthConstants.MINHACARTEIRALOGGEDTOKEN)

    const _headers = { ...headers, Authorization: `Bearer ${storage.access_token}` }

    const response = await fetch(uri,
        {
            method: HttpMethods.POST,
            headers: _headers,
            body: body
        })
    return response.json();
}

const del = async <T>(uri: string, body: string, headers: {}): Promise<T> => {

    const storage = StorageService.retrieveStorage(AuthConstants.MINHACARTEIRALOGGEDTOKEN)

    const _headers = { ...headers, Authorization: `Bearer ${storage.access_token}` }

    const response = await fetch(uri,
        {
            method: HttpMethods.DELETE,
            headers: _headers,
            body: body
        })
    return response.json();
}

const get = async <T>(uri: string, headers: {}): Promise<T> => {

    const storage = StorageService.retrieveStorage(AuthConstants.MINHACARTEIRALOGGEDTOKEN)

    const _headers = { ...headers, Authorization: `Bearer ${storage.access_token}` }

    const response = await fetch(uri,
        {
            method: HttpMethods.GET,
            headers: _headers
        })
    return response.json();
}

const HttpService = {
    post,
    get,
    del
}

export default HttpService