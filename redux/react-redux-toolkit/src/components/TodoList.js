import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice';
function TodoList() {
const todos = useSelector((state) => state.todos);
const dispatch = useDispatch();
return (
<div style={{ display: 'flex', justifyContent: 'center' }}>
<ul style={{ listStyleType: 'none', padding: 0 }}>
{todos.map((todo) => (
<li
key={todo.id}
style={{
textDecoration: todo.completed ? 'line-through' : 'none',
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
width: '300px',
padding: '10px',
border: '1px solid #ddd',
marginBottom: '10px',
borderRadius: '5px',
}}
>
<span>{todo.text}</span>
<div>
<button onClick={() => dispatch(toggleTodo(todo.id))}>
{todo.completed ? 'Undo' : 'Complete'}
</button>
<button onClick={() =>
dispatch(deleteTodo(todo.id))}>Delete</button>
</div>
</li>
))}
</ul>
</div>
);
}
export default TodoList;