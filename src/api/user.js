import axios from "axios"

const userApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

export const createUser = async (user) => {
    return await userApi.post('/register', user)
}

export const loginUser = async (user) => {
    return await userApi.post('/login', user)
}

export const logoutUser = async () => {
    return await userApi.post('/logout')
}

export default userApi