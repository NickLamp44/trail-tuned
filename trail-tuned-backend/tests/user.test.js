const mongoose = require("mongoose");
const { User } = require("./userModel"); // Import User model
const bcrypt = require("bcrypt");

describe("User Model Password Tests", () => {
  let user;

  beforeEach(() => {
    user = new User({
      username: "testUser",
      password: "plainPassword",
      email: "test@example.com",
    });
  });

  test("should hash password before saving", async () => {
    await user.save();
    expect(bcrypt.compareSync("plainPassword", user.password)).toBe(true);
  });

  test("should validate password correctly", async () => {
    await user.save();
    expect(user.validatePassword("plainPassword")).toBe(true);
    expect(user.validatePassword("wrongPassword")).toBe(false);
  });
});
