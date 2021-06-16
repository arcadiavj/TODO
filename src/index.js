import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml );// CUANDO ES SOLO UN ARGUMENTO SE PUEDE HACER ASI
// todoList.todos.forEach(todo =>crearTodoHtml(todo) );

todoList.todos[0].imprimirClase();
//const tarea = new Todo('Aprender JavaScript!!!');

// todoList.nuevoTodo(tarea);
// crearTodoHtml(tarea);

// console.log(todoList);

// localStorage.setItem('mi-key','abc1234');
//sessionStorage.setItem('mi-key','abc1234');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);