const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");

// @access private
// @desc fetch all user data from the database
// @path GET /api/v1/user
const getAlluser = asyncHandler(async (req, res, next) => {
  const users = await prisma.users.findMany({
    include: { Media: true },
  });
  res.json(users);
});

// @access private
// @desc fetch single user record data from the database
// @path GET /api/v1/user/:id
const getSingleuser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const users = await prisma.users.findUnique({
    where: { userid: id },
  });
  res.json(users);
});

// @access private
// @desc create new user record
// @path POST /api/v1/user
const createNewuser = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const user = await prisma.users.create({
    data: data,
  });
  res.json(user);
});

// @access private
// @desc update user record
// @path PATCH /api/v1/user/:id
const updateuserRecord = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await prisma.users.update({
    where: { userid: id },
    data: req.body,
  });
  res.json(user);
});

// @access private
// @desc delete a user record
// @path DELETE /api/v1/user/:id
const deleteuserRecord = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await prisma.users.delete({
    where: { userid: id },
  });
  res.json(user);
});

// @access private
// @desc login
// @path POST /api/v1/user/login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await prisma.Users.findUnique({
    where: {
      email: email,
    },
  });

  if (email === user.email && password === user.password) {
    const accesstoken = jwt.sign(
      {
        user: {
          username: user.name,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "100000m" }
    );
    res.status(200).json({ accesstoken });
  } else {
    res.status(401);
    throw new Error("email or password not valid");
  }
});

module.exports = {
  getAlluser,
  getSingleuser,
  createNewuser,
  updateuserRecord,
  deleteuserRecord,
  login,
};
