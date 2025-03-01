import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
function AddTodo() {
const [input, setInput] = useState('');
const dispatch = useDispatch();
const handleSubmit = (e) => {
e.preventDefault();
if (input.trim()) {
dispatch(addTodo(input));
setInput('');
}

Learn-2-Earn Labs - Best Institute for job opportunities, & career stability

Get 5 LPA Or 8 LPA Guaranteed Package | Live Online Classes | for more information, visit – www.learntoearnlabs.com

};
return (
<form onSubmit={handleSubmit}>
<input
type="text"
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Add new todo"
/>
<button type="submit">Add Todo</button>
</form>
);
}
export default AddTodo;