import axiosClient from "./axiosClient.js";

const bannersApi = {
    getAll() {
        const url = '/banners'
        return axiosClient.get(url)
    }
}

export default bannersApi