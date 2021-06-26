import { data } from '../../data/data';
import endpoint from '../../endpoints/cypressEndpoint2'

const { matchers } = require('jest-json-schema');

expect.extend(matchers);
let response;

describe('API Automation Test - Cypress', () => {
    test(`POST Cypress`, async () => {
        response = await endpoint(data);
        expect(response.status).toBe(201);
        console.log(response.body);
        expect(response.body.title).toEqual(data.title);
        expect(response.body.body).toEqual(data.body);
        expect(response.body.userId).toEqual(data.userId);


    });
});
