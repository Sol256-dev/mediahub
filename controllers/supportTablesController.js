const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const prisma = new PrismaClient()

// @access private
const getMediaTypes = asyncHandler(async (req, res) => {
  const mediatype = await prisma.mediaType.findMany({
    //   include: { type: true, genre: true, origin: true },
  });
  res.json(mediatype);
});

// @access Private
const createMediaType = asyncHandler(async (req, res) => {
  const data = req.body;
  const media = await prisma.mediaType.create({
    data: data,
  });
  res.json(media);
});

// @access Private
const getGenre = asyncHandler(async (req, res) => {
  const genre = await prisma.genre.findMany({
    //   include: { type: true, genre: true, origin: true },
  });
  res.json(genre);
});

// @access Private
const createGenre = asyncHandler(async (req, res) => {
  const data = req.body;
  const genre = await prisma.genre.create({
    data: data,
  });
  res.json(genre);
});

// @access Private
const getOrigins = asyncHandler(async (req, res, next) => {
  const origin = await prisma.origin.findMany({
    //   include: { type: true, genre: true, origin: true },
  });
  res.json(origin);
});

// @access Private
const createOrigin = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const origin = await prisma.origin.create({
    data: data,
  });
  res.json(origin);
});

module.exports = {
  getMediaTypes,
  createMediaType,
  getGenre,
  createGenre,
  getOrigins,
  createOrigin,
};
