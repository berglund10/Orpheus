import { ok } from "node:assert/strict";
import test from 'node:test';
import { hashPassword, checkHashedPassword } from "../password";

test('testing hashPassword & chechHashedPassword functions', () => {
    const hashedPassword = hashPassword("12345");
    const isValid = checkHashedPassword("12345", hashedPassword);
    ok(isValid);
})