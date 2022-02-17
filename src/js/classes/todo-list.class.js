//import { Todo } from ".";
import {Todo} from './todo.class'
export class TodoList{
    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id !=id);
        this.guardarLocalStorage();

    }

    marcarCompleto(id){
        for(const todo of this.todos){
            console.log(id, todo.id);
            if(todo.id === id){
                todo.copletado = !completado;
                this.guardarLocalStorage();
                break;

            }
        }

    }

    eleminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
         localStorage.setItem('todo', JSON.stringify( this.todos));
    }

    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo'))
         ? JSON.parse(localStorage.getItem('todo')) : this.todos=[];
        
         this.todos = this.todos.map(Todo.fromjson);

    }

}