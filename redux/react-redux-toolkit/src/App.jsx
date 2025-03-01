import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
function App() {
return (
<div style={{ textAlign: 'center' }}>
<h1>Todo List</h1>
<AddTodo />
<TodoList />
</div>
);
}
export default App;