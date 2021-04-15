const axios = require("axios");
const chai = require("chai");
const { createStore, getStore } = require("../support/serviceHelper");
const expect = chai.expect;
const myData = require("../data/store.json");
const schema = require("../schema/createGetStore.json");
const validator = require("jsonschema");
chai.use(require('chai-json-schema'));


describe("testing store", async () => {
    myData.map((currentData) => {
        const {request, response, statusCode} = currentData;
        let storeId 
        
        it("create new store", async () => {
            const storeResponse = await createStore(request);
            storeId = storeResponse.data.id;
            //validator.validate(storeResponse, schema);
            
            expect(storeResponse.status).to.equal(statusCode);
            expect(storeResponse.data).to.eql(response);
        });    

        it("get created store", async () => {
            const getStoreResponse = await getStore(storeId);
            //const a = validator.validate(getStoreResponse, schema);
            //console.log(a.valid);

            expect(getStoreResponse.status).to.equal(statusCode);
            expect(getStoreResponse.data).to.be.jsonSchema(schema);
        });

    })

})
