import { Todo } from "./classes";
import {todoList} from "../index"

//referencia html
const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');
const btnBorrar    = document.querySelector('.clear-completed');
const ulFiltors   = document.querySelector('.filters');
const cuadro   = document.querySelectorAll('.filro');

export const crearTodoHtml = (todo)=>{
    const htmltodo =`
    <li class="${(todo.completado) ? 'completed': ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked':''}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li> 
    `;
    const div = document.createElement('div');
    div.innerHTML=htmltodo;

    divTodoList.append(div.firstElementChild);
    return div;

}


//evento
txtInput.addEventListener('keyup',( event ) => {
    if(event.keyCode === 13 && txtInput.value.length > 0){
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        console.log(todoList);

        crearTodoHtml(nuevoTodo);
        txtInput.value ='';
    }
});

divTodoList.addEventListener('click', (event)=>{
    
   const nombreElementos = event.target.localName;
   const todoElemento = event.target.parentElement.parentElement;
   const todoId       = todoElemento.getAttribute('data-id');
  
   if(nombreElementos.includes('input')){
       todoList.marcarCompleto(todoId);
       todoElemento.classList.toggle('completed');

   }else if(nombreElementos.includes('button')){
       todoList.eliminarTodo(todoId);
       divTodoList.removeChild(todoElemento);
   }
   
});

btnBorrar.addEventListener('click', ()=>{
      todoList.eleminarCompletados();
      for(let i = divTodoList.children.length-1; i>=0; i--){
          const elemento = divTodoList.children[i];
          if(elemento.classList.contains('completed')){
              divTodoList.removeChild(elemento);
          }
      }
});

ulFiltors.addEventListener('click', (event)=>{
    

    const filtro =event.target.text;
    if(!filtro){return;}

    cuadro.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');


    for(const elemento of divTodoList.children){
        elemento.classList.remove('hidden');
        const compleatdo = elemento.classList.contains('completed');

        switch(filtro){
            case 'Pendientes':
                if(compleatdo){
                    elemento.classList.add('hidden');
                }
                break;

            case 'Completados':
                if(!compleatdo){
                    elemento.classList.add('hidden');
                }
                break;
        }
    }

})