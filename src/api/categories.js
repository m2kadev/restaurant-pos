import axios from "axios"

const categoryApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

export const getCategories = async (demo) => {
    const categories = await (await categoryApi.get('/category', demo.queryKey[1])).data
    return categories
}

export const postCategoroy = async (data) => {
    return await categoryApi.post('/category', data.category, data.config)
}

export const deleteCategory = async ({id, config}) => {
    return await categoryApi.delete(`/category/${id}`, config)
}

export default categoryApi