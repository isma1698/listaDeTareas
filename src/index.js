import { Todo, TodoList } from './js/classes'
import { crearTodoHtml } from './js/componentes';
import './styles.css';



export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

todoList.todos[0].imprimirClase();

//console.log('todos', todoList.todos);