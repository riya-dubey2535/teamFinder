const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Create new task
router.post('/create', async (req, res) => {
  const { title, description, assignedTo, projectId, dueDate } = req.body;
  try {
    const task = new Task({ title, description, assignedTo, projectId, dueDate });
    await task.save();
    res.status(200).json({ message: 'Task created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating task' });
  }
});

// Update task status
router.put('/update/:id', async (req, res) => {
  const { status } = req.body;
  try {
    const task = await Task.findById(req.params.id);
    task.status = status;
    await task.save();
    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' });
  }
});

module.exports = router;
