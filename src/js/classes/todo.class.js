export class Todo{
    static fromjson({id,tarea,compleatdo,creado}){
        const tempTodo = new Todo(tarea);
        tempTodo.id =id;
        tempTodo.completado =compleatdo;
        tempTodo.creado =creado;
        
        return tempTodo;
    }
    constructor(tarea){
        this.tarea = tarea;
        this.id    = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
    // imprimirClase(){
    //     console.log(`${this.tarea}-${this.id}`);
    // }
}
