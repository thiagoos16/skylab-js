"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.todos = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.todos.push(data);
      console.log(this.todos);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'thiago';
    return _this;
  }

  _createClass(TodoList, [{
    key: "showUser",
    value: function showUser() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MyList = new TodoList();

document.querySelector('#add').onclick = function () {
  MyList.add("new item");
};

MyList.showUser(); //*****************************static function***********************************//

var TodoList2 = /*#__PURE__*/function () {
  function TodoList2() {
    _classCallCheck(this, TodoList2);

    this.todo = [];
  }

  _createClass(TodoList2, null, [{
    key: "addTodo",
    value: function addTodo() {
      this.todo.push('new todo');
      console.log(this.todo);
    }
  }]);

  return TodoList2;
}(); // TodoList2.addTodo(); // vai dar erro


var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2)); //*******************************Const and let************************************//

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4; // com o let eu posso reatribuir valores dentro de escopos

    console.log(x, _y);
  }
} // console.log(y); // y está fora desse escopo, então vai acusar erro


teste(10); //******************************arrays*********************************//

var arr = [1, 2, 3, 4, 5, 8, 10];
var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log('MAP result: ');
console.log(newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log('REDUCE result: ');
console.log(sum);
var filtered = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log('FILTER result: ');
console.log(filtered);
var finded = arr.find(function (item) {
  return item === 4;
});
console.log('FINDED result: ');
console.log(finded);
/***************************Arrows Functions****************************/

var newArrZ = arr.map(function (item) {
  return item * 2;
});
var newArrA = arr.map(function (item) {
  return item * 2;
});
var newArrB = arr.map(function (item) {
  return item * 2;
});
var newArrC = arr.map(function (item) {
  return item * 2;
});

var teste1 = function teste1() {
  return 'teste';
};

var teste2 = function teste2() {
  return [1, 2, 3];
};

var teste3 = function teste3() {
  return {
    nome: 'Diego'
  };
};
/****************************Desestruturação*************************/


var user = {
  name: 'Thiago',
  age: 26,
  address: {
    city: 'Manaus',
    state: 'AM'
  }
};
var name = user.name,
    age = user.age,
    city = user.address.city;
console.log(name);
console.log(age);

function showName(_ref) {
  var name = _ref.name,
      city = _ref.address.city;
  console.log(name, city);
}

showName(user);
