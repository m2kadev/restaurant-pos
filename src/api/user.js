import axios from "axios"
import { APIBASEURL } from "./constants"

const userApi = axios.create({
    baseURL: APIBASEURL
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