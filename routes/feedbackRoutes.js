const express = require('express');
const Feedback = require('../models/Feedback');
const User = require('../models/User');
const router = express.Router();

// Submit feedback for a user
router.post('/submit', async (req, res) => {
  const { reviewerId, reviewedId, rating, comments, projectId } = req.body;

  try {
    const feedback = new Feedback({ reviewer: reviewerId, reviewed: reviewedId, rating, comments, project: projectId });
    await feedback.save();

    const user = await User.findById(reviewedId);
    user.reputationScore = await calculateReputation(user._id);
    await user.save();

    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting feedback' });
  }
});

// Calculate reputation score (average of ratings)
async function calculateReputation(userId) {
  const feedbacks = await Feedback.find({ reviewed: userId });
  const totalRating = feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0);
  return totalRating / feedbacks.length;
}

module.exports = router;
