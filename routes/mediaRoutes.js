const express = require("express");
const multer = require("multer");
const mediaController = require("../controllers/mediaController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", mediaController.listMedia);
router.get("/:id", mediaController.getMedia);
router.put("/:id", mediaController.updateMedia);
router.delete("/:id", mediaController.deleteMedia);
router.post("/", upload.single("media"), mediaController.addMedia);

module.exports = router;
