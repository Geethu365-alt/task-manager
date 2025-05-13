

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from '../Redux/taskSlice';

export default function Task() {
  const [task, setTask] = useState('');
  const user = useSelector((state) => state.auth.user);
  const tasks = useSelector((state) => state.tasks[user] || []);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTask({user,task}));
      setTask('');
    }
  };

  return (
    <div className='max-w-md mx-auto'>
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
      <div className="mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="p-2 border rounded mr-2"
          placeholder="Enter a task"
        />
        <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {tasks.map((t, i) => (
          <li key={i} className="bg-white p-4 rounded shadow flex justify-between">
            <span>{t}</span>
            <button onClick={() => dispatch(removeTask({user,index:i}))} className="text-red-500 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
