import axios from "axios"
import { APIBASEURL } from "./constants"

const orderApi = axios.create({
    baseURL: APIBASEURL
})

export const getDashboard = async (data) => {
    return await (await orderApi.get('/dashboard', data.queryKey[1])).data
}

export const sendOrder = async ({orderData, config}) => {
    return await orderApi.post('/order', orderData, config)
}

export const getOrders = async (data) => {
    return await (await orderApi.get('/order', data.queryKey[1])).data
}

export const getOrderDetails = async (data) => {
    return await (await orderApi.get(`/order/${data.queryKey[1]}`, data.queryKey[2])).data
}

export default orderApi