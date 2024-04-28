import { default as axiosroot } from 'axios'


const axios = axiosroot.create({
    baseURL: "https://node-b89g.onrender.com/"
})

export default axios;
