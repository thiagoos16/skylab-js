class List {
    constructor() {
        this.todos = [];
    }

    add(data) {
        this.todos.push(data);
        console.log(this.todos);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'thiago';
    }

    showUser() {
        console.log(this.usuario);
    }
}

const MyList = new TodoList();

document.querySelector('#add').onclick = function () {
    MyList.add("new item");
}

MyList.showUser();