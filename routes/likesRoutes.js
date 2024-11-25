const express = require("express");
const router = express.Router();
const db = require("../database/connection");

// GET all likes for a specific media item
router.get("/media/:id", async (req, res) => {
  const mediaId = req.params.id;
  try {
    const [likes] = await db.query("SELECT * FROM likes WHERE media_id = ?", [
      mediaId,
    ]);
    if (likes.length === 0) {
      return res.status(404).send("No likes found for this media item.");
    }
    res.json(likes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// POST a like for a media item
router.post("/", async (req, res) => {
  const { user_id, media_id } = req.body;
  try {
    await db.query("INSERT INTO likes (user_id, media_id) VALUES (?, ?)", [
      user_id,
      media_id,
    ]);
    res.status(201).send("Like added successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// DELETE a like
router.delete("/:id", async (req, res) => {
  const likeId = req.params.id;
  try {
    await db.query("DELETE FROM likes WHERE id = ?", [likeId]);
    res.send("Like removed successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
