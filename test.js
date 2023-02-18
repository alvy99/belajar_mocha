const request = require("supertest")("https://dummyjson.com)
const expect = require("chai").expect;

describe("POST User REQRES", function(){
    it("Success Register", async function(){
        const response = await request
        .post("/products/add")
        .send({id: "101", title: "BMW Pencil"});

        expect(response.body.name).to.eql('101')
        expect(response.body.name).to.eql('BMW Pencil')

    })
})