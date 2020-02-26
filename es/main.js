class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push('new item');
        console.log(this.todos);
    }
}

const MyList = new TodoList();

document.querySelector('#add').onclick = function () {
    MyList.addTodo();
}