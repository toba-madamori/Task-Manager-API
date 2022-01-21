const express = require('express');
const router = express.Router();

// controllers
const {
    getAllItems,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require('../controllers/tasks');


// methods

router.route('/').get(getAllItems).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;