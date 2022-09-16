import axios from 'axios';


const TOKEN = "cci686aad3ibcn4bhn2g";

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
});