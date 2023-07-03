import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1c46233d07f149a79a5f4fa569e612f5'
    }
})