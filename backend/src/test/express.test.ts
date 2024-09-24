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