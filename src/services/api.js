import axios from 'axios'
const HTTP =
    axios.create({
        baseURL: `http://5e148887bce1d10014baea80.mockapi.io/`,
        responseType: "json",

        headers: {

            // Authorization: `Bearer ${store.getters.getterToken}`
        },

    })

export {HTTP}