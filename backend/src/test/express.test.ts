import request from 'supertest';
import app from '../index'
import { deepEqual } from "node:assert/strict";
import test from 'node:test';

test('GET /api/goalkeepers should return status 200', async (t) => {
    const res = await request(app).get('/api/goalkeepers');

    deepEqual(res.status, 200);

});

test('GET /api/goalkeepers should return array', async () => {
    const res = await request(app).get('/api/goalkeepers');
    const goalkeepersArray = res.body;
    deepEqual(Array.isArray(goalkeepersArray), true);

});

test('GET /api/goalkeepers first should be named M. Perin', async () => {
    const res = await request(app).get('/api/goalkeepers');
    const firstGoalKepper = res.body[0];
    deepEqual(firstGoalKepper.name, "M. Perin");
});

test('GET /users should return status 200', async () => {
    const res = await request(app).get('/users');
    deepEqual(res.status, 200);
});

test('GET /users, the length should be same as users in database(4)', async () => {
    const res = await request(app).get('/users');
    const users = res.body;
    deepEqual(users.length, 4);
})