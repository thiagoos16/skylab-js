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

class TodoList2 {
    constructor() {
        this.todo = [];
    }

    static addTodo() {
        this.todo.push('new todo');
        console.log(this.todo);
    }
}

// TodoList2.addTodo(); // vai dar erro

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,2));

//*******************************Const and let************************************//
function teste(x) {
    let y = 2;

    if (x > 5) {
        let y = 4; // com o let eu posso reatribuir valores dentro de escopos
        console.log(x, y);
    }
}

// console.log(y); // y está fora desse escopo, então vai acusar erro

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

/***************************Arrows Functions****************************/
const newArrZ =  arr.map(function(item) {
    return item * 2; 
});

const newArrA =  arr.map((item) => {
    return item * 2; 
});

const newArrB =  arr.map(item => {
    return item * 2; 
});

const newArrC =  arr.map(item => item * 2);

const teste1 = () => {
    return 'teste';
}

const teste2 = () => [1,2,3];

const teste3 = () => ({ nome : 'Diego'});

/****************************Desestruturação*************************/
const user = {
    name: 'Thiago',
    age: 26,
    address: {
        city: 'Manaus',
        state: 'AM'
    }
};

const { name, age, address: { city } } = user;

console.log(name);
console.log(age);

function showName({ name, address: { city } }) {
    console.log(name, city);
}

showName(user);



