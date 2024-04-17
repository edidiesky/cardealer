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
    password: "123456",
  },
};

afterEach(() => {
  jest.restoreAllMocks();
});
describe("register User", () => {
  it("should create a user", async () => {
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
    expect(MockResponse.status).toHaveBeenCalled();
    expect(MockResponse.status).toHaveBeenCalledWith(200);
    expect(MockResponse.json).toHaveBeenCalledWith({
      user: {
        _id: "64d78b7beac30bd060eeab89",
        firstname: "Edidiong",
        lastname: "Essien",
        phone: "1456-93837-5883",
        email: "edidie@gmail.com",
        country: undefined,
        isAdmin: undefined,
        postalCode: undefined,
        state: undefined,
      },
      token: "mocked_token",
    });
  });

  it("should throw a 404 error when the field of the body are empty", async () => {
     const MockRequest = {
       body: {},
     };

     // Use await to wait for the asynchronous operation to complete
     await expect(registerUser(MockRequest, MockResponse)).rejects.toThrow(
       "Please fill in the valid credentails"
     );

     // Assert the response status and JSON
     expect(MockResponse.status).toHaveBeenCalledWith(404);
     expect(MockResponse.json).toHaveBeenCalledWith({
       message: "Please fill in the valid credentails",
     });
  });
});
