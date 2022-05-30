import axios from "axios";
// using Axios for fetching data from https://unsplash.com/developer photo api

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fFXDUOmS1maASs2EeH3D4BTF2BKH5lSzH5xH1NAIYQs',
    }
})
