import { HttpMethods } from "./constants/http.enum";


const post = async <T>(uri: string, body: string, headers: {}): Promise<T> => {
    const response = await fetch(uri,
        {
            method: HttpMethods.POST,
            headers: headers,
            body: body
        })
    return response.json();
}

const del = async <T>(uri: string, body: string, headers: {}): Promise<T> => {
    const response = await fetch(uri,
        {
            method: HttpMethods.DELETE,
            headers: headers,
            body: body
        })
    return response.json();
}

const get = async <T>(uri: string, headers: {}): Promise<T> => {
    const response = await fetch(uri,
        {
            method: HttpMethods.GET,
            headers: headers            
        })
    return response.json();
}

const HttpService = {
    post,
    get,
    del
}

export default HttpService