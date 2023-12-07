import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    tasks:[{
        id: 1,
        status: 'pending',
        title: 'Programming',
        description:
          'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
        date: '2023-08-28',
        assignedTo: 'Md Rakib Mia',
        priority: 'high',
      },
    ],
    userTasks:[]
}
const tasksSlice = createSlice({
    name:"tasksSlice",
     initialState,
     reducers:{
      addTask:(state,{payload})=>{
        if(state.tasks.length ===0 ){

            state.tasks.push({id:1,status:"pending",...payload})
        }else{
            const lastItem= state.tasks.at(-1);
            state.tasks.push({id:lastItem.id+1,status:"pending",...payload})
        }
      },
      removeTask:(state,{payload})=>{
        state.tasks=state.tasks.filter(item=>item.id != payload)
       },
       updateStatus:(state,{payload})=>{
  
          const target= state.tasks.find(task=> task.id===payload.id);
          // console.log(target,"target")
          target.status=payload.updatedStatus;
       },
       setUserTask:(state,{payload})=>{
        state.userTasks=state.tasks.filter(item=> item.assignedTo === payload)
       }
     },
     

})
export const {addTask,removeTask,updateStatus,setUserTask} = tasksSlice.actions;

export default tasksSlice.reducer;