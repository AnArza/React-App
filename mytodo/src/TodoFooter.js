function TodoFooter({todos, onClearCompleted}){
    const completed=todos.filter((todo)=>todo.isCompleted);
    return(
        <div>
            <span>{completed.length}/{todos.length} Completed</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    );
}
export default TodoFooter;