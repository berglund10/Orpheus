import bcryptjs from "bcryptjs";

export function hashPassword(password: string): string {
  if (typeof password !== "string") {
    throw new Error("password must be a string");
  }
  if (password.length === 0) {
    throw new Error("password can't be empty");
  }

  const saltRounds = 10;
  const salt = bcryptjs.genSaltSync(saltRounds);
  const hashPassword = bcryptjs.hashSync(password, salt);

  return hashPassword;
}

export function checkHashedPassword(
  password: string,
  hashPassword: string,
): boolean {
  const valid = bcryptjs.compareSync(password, hashPassword);
  return valid;
}
