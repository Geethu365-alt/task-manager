
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {},
  reducers: {
    
    addTask: (state, action) => {

 const { user, task } = action.payload;
      if (!state[user]) state[user] = [];
      state[user].push(task);


      
      
    },
    removeTask: (state, action) => {

         const { user, index } = action.payload;
      if (state[user]) state[user].splice(index, 1);
    
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
