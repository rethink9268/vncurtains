import axiosClient from "./axiosClient.js";

const categoriesApi = {
    getAll() {
        const url = '/categories'
        return axiosClient.get(url)
    }
}

export default categoriesApi