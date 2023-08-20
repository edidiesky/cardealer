import bcrypt from "bcryptjs";

const users = [
  {
    firstname: "Edidiong",
    lastname: "Essien",
    country: "Nigeria",
    state: "Lagos",
    phone: "1456-93837-5883",
    email: "edidie@gmail.com",
    createdAt: "1/17/2023",
    password: bcrypt.hashSync("eAdg145%1", 10),
    isAdmin: true,
    postalCode: "78764",
    image: "/images/user_1.jpeg",
  },
  {
    lastname: "DamiLola17b",
    email: "DamiLola17b@gmail.com",
    phone: "639 404 8339",
    image: "/images/user_2.png",
    firstname: "Lami",
    address: "58 Merrick Parkway",
    country: "UK",
    state: "Ireland",
    postalCode: "59652 CEDEX",
    createdAt: "8/12/2022",
    password: bcrypt.hashSync("eAdg145%1", 10),
    isAdmin: false,
  },
];

export default users;
