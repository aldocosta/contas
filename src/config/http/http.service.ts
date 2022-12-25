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

const HttpService = {
    post
}

export default HttpService