import React, {useState} from 'react'

function todoList() {
  const [tasks, setTasks] = useState([]);

  //what we are adding to todo list
  const[newTask, setNewTask] = useState("");

function input(event){
  setNewTask(event.target.value);
}
function addItem(){

    if (newTask.trim() !== ""){
      setTasks(t=>[...t, newTask]);
      setNewTask("");
    }
    
}
function deleteItem(index){
  const updatedTasks = tasks.filter((_, i) => i !==index);
  setTasks(updatedTasks);
}
function moveUp(index){
  if (index > 0){
    const updatedTasks = [...tasks];
    const currTask = updatedTasks[index];
    const aboveTask = updatedTasks[index-1];
    updatedTasks[index]= aboveTask;
    updatedTasks[index-1] = currTask;
    setTasks(updatedTasks);
  }
  
}

function moveDown(index){
 
    const updatedTasks = [...tasks];
    const length = updatedTasks.length;
    if (index < length -1){
    const currTask = updatedTasks[index];
    const belowTask = updatedTasks[index+1];
    updatedTasks[index]= belowTask;
    updatedTasks[index+1] = currTask;
    setTasks(updatedTasks);
    }
  
}
  return (
    <div className = "to-do">
      <h1> Todo List</h1>
      <div>
        <input className = "input"
          type = "text" 
          placeholder = "Enter a task..."
          value = {newTask}
          onChange = {input}/>
          
          <button className = "add"
          onClick ={addItem} >
            Add </button>
      </div>
      <ol>
        {tasks.map((task, index)=>
        <li key ={index}>
            <span className = "text">{task} </span>
            <button className = "delete-button"
                    onClick = {() => deleteItem(index)}>
              Completed
            </button>
            <button 
            className = "moveUp"
            onClick = {() => moveUp(index)}>Up</button>
            <button 
            className = "moveDown"
            onClick = {() => moveDown(index)}>Down</button>
        </li>)}
      </ol>
     </div>
  )
}

export default todoList;
