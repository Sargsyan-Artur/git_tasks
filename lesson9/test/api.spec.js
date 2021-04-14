const axios = require("axios");
const chai = require("chai");
const { createStore, getStore } = require("../support/serviceHelper");
const expect = chai.expect;
const data = require("../data/store.json");
const schema = require("../schema/createGetStore.json");
const validator = require("jsonschema")

describe("testing store", async () => {
    
    const {request, response, statusCode} = data;
    let storeId 

    it("create new store", async () => {
        const storeResponse = await createStore(request);
        storeId = storeResponse.data.id;
        validator.validate(storeResponse, schema);
        expect(storeResponse.status).to.equal(statusCode);
        //console.log(storeResponse.data);
        expect(storeResponse.data).to.eql(response);
    });    

    it("get created store", async () => {
        const getStoreResponse = await getStore(storeId);
        const a = validator.validate(getStoreResponse, schema);
        console.log(a.valid);

        expect(getStoreResponse.status).to.equal(statusCode);

        expect(getStoreResponse.data).to.eql(response);
  });

})
