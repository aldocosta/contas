const login = async (username: string, password: string) => {
    const response = await fetch('http://localhost:3000/auth/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
    return  response.json();
}

const LoginService = {
    login
}

export default LoginService