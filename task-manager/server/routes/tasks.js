const express = require('express');
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Get all tasks for logged-in user
router.get('/', auth, async (req, res) => {
  const tasks = await prisma.task.findMany({
    where: { userId: req.userId },
    orderBy: { createdAt: 'desc' }
  });
  res.json(tasks);
});

// Create task
router.post('/', auth, async (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;
  const task = await prisma.task.create({
    data: { title, description, status, priority, dueDate: dueDate ? new Date(dueDate) : null, userId: req.userId }
  });
  res.status(201).json(task);
});

// Update task
router.put('/:id', auth, async (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;
  const task = await prisma.task.updateMany({
    where: { id: parseInt(req.params.id), userId: req.userId },
    data: { title, description, status, priority, dueDate: dueDate ? new Date(dueDate) : null }
  });
  res.json(task);
});

// Delete task
router.delete('/:id', auth, async (req, res) => {
  await prisma.task.deleteMany({
    where: { id: parseInt(req.params.id), userId: req.userId }
  });
  res.json({ message: 'Task deleted' });
});

module.exports = router;