const express = require("express");
const {
  addReview,
  getAllReview,
  getReviewOfProvider,
} = require("../controllers/review");
const { isUser } = require("../middleware/isUser");
const router = express.Router();

router.post("/", isUser, addReview);

router.get("/", getAllReview); // <-- Fix here

router.get("/:_id", getReviewOfProvider);

module.exports = router;
