import axios from "axios"

const orderApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

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