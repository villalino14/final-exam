const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  getTasksByStatus,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

router.get('/tasks', getAllTasks);
router.get('/tasks/:status', getTasksByStatus);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
