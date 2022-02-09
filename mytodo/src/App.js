import { useReducer} from 'react';
import './App.css';
import Increaser from './Increaser';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function reducer(state,action){
  if(action.type==='add'){
    return[
      ...state,
      {
       id:Math.random(),
       text:action.payload.text,
       isCompleted:false
      }
    ]
  } else if(action.type==="delete"){
    return state.filter((t)=> t.id !== action.payload.id)
  } else if(action.type==="clear"){
    return state.filter((todo)=>!todo.isCompleted)
  } else if(action.type==="change"){
    return state.map((todo)=>{
         if(todo.id===action.payload.id){
           return action.payload.nt
         } else{return todo}
       })
  }
}

function App() {

  const [todos,dispatch]=useReducer(reducer,[
    {
      id:Math.random(),
      text:"JavaScript",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"ReactJS",
      isCompleted:false
    },
    {
      id:Math.random(),
      text:"Redux",
      isCompleted:false
    }
  ]);

  return (
    <div className="App">
       <TodoForm onAdd={(text)=>{
         dispatch({
           type:'add',
           payload:{
             text:text
           }
         });
      }}/>
       <TodoList 
           todos={todos}
           onDelete={(todo)=>{
             dispatch({
               type:"delete",
               payload:{
                 id:todo.id
               }
             });
           }}
          onChange={(newTodo)=>{
            dispatch({
              type:"change",
              payload:{
                id:newTodo.id,
                nt:newTodo
              }
            });
          }}
         />

       <TodoFooter todos={todos} onClearCompleted={(todo)=>{
         dispatch({
           type:"clear",
           payload:{
          
           }
         });
       }}/>
       
       <Increaser/>

    </div>
  );
}

export default App;