const mediaModel = require("../models/mediaModel");

const listMedia = async (req, res) => {
  const media = await mediaModel.getAllMedia();
  res.json(media);
};

const getMedia = async (req, res) => {
  const media = await mediaModel.getMediaById(req.params.id);
  media ? res.json(media) : res.status(404).send("Media not found");
};

const updateMedia = async (req, res) => {
  await mediaModel.updateMedia(req.params.id, req.body);
  res.send("Media updated");
};

const deleteMedia = async (req, res) => {
  await mediaModel.deleteMedia(req.params.id);
  res.send("Media deleted");
};

const addMedia = async (req, res) => {
  const filePath = req.file.path;
  await mediaModel.addMedia(filePath);
  res.send("Media added");
};

module.exports = { listMedia, getMedia, updateMedia, deleteMedia, addMedia };
