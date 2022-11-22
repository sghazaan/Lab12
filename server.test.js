const { response } = require('express');
const request = require('supertest');

const app = require('./routes/User.js')
const mongoose = require('mongoose') 


describe("Test the root path",()=>{
    test("It should reponse the POST method",()=>{
        const response=request(app).post("http://localhost:8000/User/add"
).send({
    "Name" : "Hadia",
    "Email" : "hadia",
    "Age" : 20,
    "Contact" : 123
})
expect(response.statusCode).toBe(200);
})
})

describe("Test the root path",()=>{
    test("It should reponse the POST method",()=>{
        const response=request(app).delete("http://localhost:8000/User/:id"
).send({
    "Id" : "6366a8e6c22a3633833ba5a7"
})
expect(response.statusCode).toBe(200);
})
})