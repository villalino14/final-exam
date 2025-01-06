const { tasks } = require('../models/taskModel');

// Get all tasks
const getAllTasks = (req, res) => {
  res.json(tasks);
};

// Get tasks by status
const getTasksByStatus = (req, res) => {
  const { status } = req.params;
  const filteredTasks = tasks.filter(task => task.status === status);
  res.json(filteredTasks);
};

// Create a new task
const createTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    ...req.body,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Update a task
const updateTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

// Delete a task
const deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
};

module.exports = {
  getAllTasks,
  getTasksByStatus,
  createTask,
  updateTask,
  deleteTask,
};
