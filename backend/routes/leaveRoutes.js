const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  applyLeave,
  getMyLeaves,
  getAllLeaves,
  approveLeave,
  rejectLeave
} = require("../controllers/leaveController");


router.post("/apply", authMiddleware, applyLeave);

router.get("/my", authMiddleware, getMyLeaves);

router.get("/all", authMiddleware, getAllLeaves);

router.put("/approve/:id", authMiddleware, approveLeave);

router.put("/reject/:id", authMiddleware, rejectLeave);

module.exports = router;