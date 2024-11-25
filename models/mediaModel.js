const db = require("../database/connection");

const getAllMedia = async () => {
  const [rows] = await db.query("SELECT * FROM media");
  return rows;
};

const getMediaById = async (id) => {
  const [rows] = await db.query("SELECT * FROM media WHERE id = ?", [id]);
  return rows[0];
};

const addMedia = async (title, description, filePath) => {
  await db.query(
    "INSERT INTO media (title, description, file_path) VALUES (?, ?, ?)",
    [title, description, filePath]
  );
};

const updateMedia = async (id, title, description) => {
  await db.query("UPDATE media SET title = ?, description = ? WHERE id = ?", [
    title,
    description,
    id,
  ]);
};

const deleteMedia = async (id) => {
  await db.query("DELETE FROM media WHERE id = ?", [id]);
};

module.exports = {
  getAllMedia,
  getMediaById,
  addMedia,
  updateMedia,
  deleteMedia,
};
