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

//*****************Arrow Functions******************//
const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//  return item + 10;
// });
const arrA = arr.map(item => item + 10);
console.log(arrA);
//****end

const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));
//****end

const nome = "Diego";
const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }
const mostraUsuario = (nome = "Thiago", idade = 19) => ({nome, idade});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario());
//****end

//********************Desestruturação*********/
const empresa = {
    nome2: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome2, endereco: {cidade, estado}} = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
//****end

const user05 = {
    nome: 'Thiago',
    idade: '31'
};

function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo(user05));
//****end

/****************Rest-Spread********/
const arr1 = [1, 2, 3, 4, 5, 6];
const [x1, ...y1] = arr1;
console.log(x1);
console.log(y1);
//****end

function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1,2,3,4,5,6));
//****end

const userSpread = {
        nome: 'Diego',
        idade: 23,
        endereco: {
            cidade: 'Rio do Sul',
            uf: 'SC',
            pais: 'Brasil',
        }   
};

const usuario02 = {...userSpread, nome:'Momo'}
console.log(usuario02);

const usuario03 = {...userSpread, endereco: {cidade: 'lontras', uf: 'SC', pais: 'Brasil'}};
console.log(usuario03);
//****end