import React,{useState} from 'react'

function TaskManagement() {

    const [task,setTask]=useState([]);
    const [newTask,setNewTask]=useState('');

    const addTask = () => {
        const taskToAdd = {id:Date.now(),name:newTask};
        setTask([...task,taskToAdd]);
        setNewTask('')
    }

    const deleteTask = (taskId) =>{
        setTask(task.filter(task=>task.id !== taskId))
    }

  return (
    <div>
        <input value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder='New Task'/>
        <button onClick={addTask}>Add Task</button>

        <ul style={{}}>
            {task.map(task=>(<li key={task.id}>{task.name}
            <button onClick={()=>deleteTask(task.id)}>Delete Task</button>
            </li>))}
        </ul>
    </div>
  )
}

export default TaskManagement