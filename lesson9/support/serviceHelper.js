const axios = require("axios");

const createStore = async (data) => {
    const newstore = await axios.post("https://petstore.swagger.io/v2/store/order", data);
    return newstore
}

const getStore = async (storeId) => {
    const store = await axios.get(`https://petstore.swagger.io/v2/store/order/${storeId}`);
    return store;
}

module.exports = {
    createStore,
    getStore
}