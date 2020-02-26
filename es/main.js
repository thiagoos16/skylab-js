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

//*****************************static function***********************************//

class TodoList {
    constructor() {
        this.todo = [];
    }

    static addTodo() {
        this.todos.push('new todo');
        console.log(this.todo);
    }
}

TodoList.addTodo(); // vai dar erro

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica);

//*******************************Const and let************************************//
function teste(x) {
    let y = 2;

    if (x > 5) {
        let y = 4; // com o let eu posso reatribuir valores dentro de escopos
        console.log(x, y);
    }
}

console.log(y); // y está fora desse escopo, então vai acusar erro

teste(10);

//******************************arrays*********************************//
const arr = [1,2,3,4,5,8,10];

const newArr = arr.map(function(item, index) {
    return item * index;
});
console.log('MAP result: ');
console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});
console.log('REDUCE result: ');
console.log(sum);

const filtered = arr.filter(function(item) {
    return item % 2 === 0;
});
console.log('FILTER result: ');
console.log(filtered);

const finded =  arr.find(function(item) {
    return item === 4;
});
console.log('FINDED result: ');
console.log(finded);