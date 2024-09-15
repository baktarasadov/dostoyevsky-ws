import * as bcrypt from "bcrypt";

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);

  return bcrypt.hash(password, salt);
}

async function comparePassword(plainTextPassword, hashedPassword) {
  return bcrypt.compare(plainTextPassword, hashedPassword);
}

export { comparePassword, hashPassword };
