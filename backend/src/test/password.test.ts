import { ok } from "node:assert/strict";
import test from 'node:test';
import { hashPassword, checkHashedPassword } from "../password";
import assert from 'node:assert';

test('testing hashPassword & chechHashedPassword functions', () => {
    const hashedPassword = hashPassword("12345");
    const isValid = checkHashedPassword("12345", hashedPassword);
    ok(isValid);
})

test('Password should not allow non-strings', () => {
  assert.throws(() => {
    hashPassword(12345 as any);
  }, new Error('password must be a string'));
});