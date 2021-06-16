import { Todo } from "./todo.class";

export class TodoList{

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.gurdarLocalStorage();
    }

    eliminarTodo(id){
       this.todos= this.todos.filter(todo => todo.id != id);
       this.gurdarLocalStorage();

    }

    marcarCompletado(id){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
            }
        }
        this.gurdarLocalStorage();
    }

    eliminarCompletados(){
       this.todos= this.todos.filter(todo => !todo.completado);
       this.gurdarLocalStorage();
    }

    gurdarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    cargarLocalStorage(){
        // if(localStorage.getItem('todo')){
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log('cargarLocal:', this.todos);
        // }else{
        //     this.todos = [];
        // }
        this.todos = (localStorage.getItem('todo'))
                        ? JSON.parse(localStorage.getItem('todo'))
                        : [];
        this.todos = this.todos.map(Todo.fromJson);                
        //this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }


}