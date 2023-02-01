import axiosClient from "./axiosClient.js";

const productsApi = {
    getAll() {
        const url = '/products'
        return axiosClient.get(url)
    }
}

export default productsApi