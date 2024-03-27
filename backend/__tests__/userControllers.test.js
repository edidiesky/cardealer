import { registerUser } from "../controllers/userControllers";
import User from "../models/User";
import bcrypt from "bcryptjs";
jest.mock("../models/User");
jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(() => "mocked_token"),
}));
const MockResponse = {
  status: jest.fn(() => MockResponse),
  json: jest.fn(),
  setHeader: jest.fn(),
};
const MockRequest = {
  body: {
    firstname: "test",
    lastname: "test",
    country: "Nigeria",
    state: "Lagos",
    phone: "1456-93837-5883",
    email: "test1333@gmail.com",
    password: "hashed_password",
  },
};

describe("register User", () => {
  it("should create a user", async() => {
    const mockUserResponse = {
      _id: "64d78b7beac30bd060eeab89",
      firstname: "Edidiong",
      lastname: "Essien",
      phone: "1456-93837-5883",
      email: "edidie@gmail.com",
      password: "hashed_password",
    };
    jest.spyOn(bcrypt, "hash").mockResolvedValueOnce("hashed_password");
    jest.spyOn(User, "create").mockResolvedValueOnce(mockUserResponse);

   await registerUser(MockRequest, MockResponse);
   expect(MockResponse.status).toHaveBeenCalled()
   expect(MockResponse.status).toHaveBeenCalledWith(300);
  });
});
