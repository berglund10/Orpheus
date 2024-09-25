import jwt from "jsonwebtoken";

const sharedSymmetricKey = "secret";
const issuerValue = "http://localhost:3000";
const audienceValue = "http://localhost:3000/api";
const accessTokenExpiry = 120;

export function signAccessToken(userId: string) {
  const token = jwt.sign(
    {
      sub: userId,
    },
    sharedSymmetricKey,
    {
      algorithm: "HS256",
      issuer: issuerValue,
      audience: audienceValue,
      expiresIn: accessTokenExpiry,
    },
  );
  return {
    accessToken: token,
    accessTokenExpiry: accessTokenExpiry,
  };
}
