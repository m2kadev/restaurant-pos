import axios from "axios"
import { APIBASEURL } from "./constants"

const productApi = axios.create({
    baseURL: APIBASEURL
})

export const getProducts = async (data) => {
    const products = await (await productApi.get('/products', data.queryKey[1])).data
    return products
}

export const getProductByCategory = async (demo) => {
    const products = await (await productApi.get(`/products/category/${demo.queryKey[1]}`, demo.queryKey[2])).data
    return products
}

export const addProduct = async (product) => {
    return await productApi.post('/products', product.formData, product.config)
}

export const updateProduct = async (data) => {
    return await productApi.post(`/products/${data.id}`, data.formData, data.config)
}


export default productApi