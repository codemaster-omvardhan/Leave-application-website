const Leave = require("../models/Leave");

exports.applyLeave = async (req, res) => {

  try {

    const { leaveType, startDate, endDate, reason } = req.body;

    const leave = await Leave.create({
      employee: req.user.id,
      leaveType,
      startDate,
      endDate,
      reason
    });

    res.json(leave);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};


exports.getMyLeaves = async (req, res) => {

  try {

    const leaves = await Leave.find({ employee: req.user.id });

    res.json(leaves);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};


exports.getAllLeaves = async (req, res) => {

  try {

    const leaves = await Leave.find().populate("employee", "name email");

    res.json(leaves);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};


exports.approveLeave = async (req, res) => {

  try {

    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status: "Approved" },
      { new: true }
    );

    res.json(leave);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};


exports.rejectLeave = async (req, res) => {

  try {

    const leave = await Leave.findByIdAndUpdate(
      req.params.id,
      { status: "Rejected" },
      { new: true }
    );

    res.json(leave);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};