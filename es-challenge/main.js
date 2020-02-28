class User {
    constructor() {
        this.email = "Ichigo";
        this.password = "123";
        this.admin = false;
    }

    isAdmin() {
        return this.admin ? true : false; 
    }
}

class Admin extends User {
    constructor() {
        super();

        this.admin = true;
    }
}

const user =  new User('email@user.com', '123');
const admin =  new Admin('email@admin.com', '123');

console.log("Object instanciad with User Class:");
console.log(user.isAdmin());
console.log("Object instanciad with Admin Class:");
console.log(admin.isAdmin());

//**********Trabalhando com map-reduce***********//
const userArr = 
    [
        { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
        { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
        { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

const agesA = userArr.map(item => item.idade);
console.log(agesA);
const agesB = userArr.map(function(item) { return item.idade; });
console.log(agesB);

const filterUser = userArr.filter(item => item.idade > 18 && item.empresa === 'Rocketseat');
console.log(filterUser);

const findUser = userArr.find(item => item.empresa === 'Google');
console.log(findUser);

const usersAux = userArr.map(item => ({...item, idade: item.idade * 2}));
console.log(usersAux);
const userAux2 = usersAux.filter(item => item.idade <= 50);
console.log(userAux2);