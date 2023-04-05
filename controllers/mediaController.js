const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// @access private
// @desc fetch all media data from the database
// @path GET /api/v1/media
const getAllMedia = asyncHandler(async (req, res, next) => {
  const media = await prisma.media.findMany({
    include: { type: true, genre: true, origin: true },
  });
  res.json(media);
});

// @access private
// @desc fetch single media record data from the database
// @path GET /api/v1/media/:id
const getSingleMedia = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const media = await prisma.media.findUnique({
    where: { mediaid: id },
    include: { type: true, genre: true, origin: true },
  });
  res.json(media);
});

// @access private
// @desc create new media record
// @path POST /api/v1/media
const createNewMedia = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const media = await prisma.media.create({
    data: data,
  });
  res.json(media);
});

// @access private
// @desc update media record
// @path PATCH /api/v1/media/:id
const updateMediaRecord = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const media = await prisma.media.update({
    where: { mediaid: id },
    data: req.body,
  });
  res.json(media);
});

// @access private
// @desc delete a media record
// @path DELETE /api/v1/media/:id
const deleteMediaRecord = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const media = await prisma.media.delete({
    where: { mediaid: id },
  });
  res.json(media);
});

module.exports = {
  getAllMedia,
  getSingleMedia,
  createNewMedia,
  updateMediaRecord,
  deleteMediaRecord,
};
