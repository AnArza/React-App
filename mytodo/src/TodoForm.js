import { useState } from "react";

function TodoForm({onAdd}){
    const [text,setText]=useState('');
    return(
        <form onSubmit={(e)=>{
            if(text!==''){
            e.preventDefault()
            onAdd(text);
            setText('');
        } else{alert("ape ban gri vor mi hat el gcem")}
        }}> 
            <input type="text" value={text} onChange={
                (e)=>setText(e.target.value)
            }/>
            <button>Add</button>
        </form>
    );
}
export default TodoForm;