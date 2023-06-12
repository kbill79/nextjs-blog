import React from 'react';

// Model
const tasks = [
  { id: 1, description: 'Task 1' },
  { id: 2, description: 'Task 2' },
  { id: 3, description: 'Task 3' },
];

// View
const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task.id}>{task.description}</li>
    ))}
  </ul>
);

// Controller
const TasksPage = () => <TaskList tasks={tasks} />;

export default TasksPage;