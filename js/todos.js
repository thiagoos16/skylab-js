var list = document.querySelector('#app ul');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    list.innerHTML = ""; 

    for (todo of todos) {
        var new_item = document.createElement('li');
        var content_item = document.createTextNode(todo);

        var btn_excluir = document.createElement('a');
        btn_excluir.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        btn_excluir.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var excluir_text = document.createTextNode(' Excluir');
        btn_excluir.appendChild(excluir_text);

        new_item.appendChild(content_item);
        new_item.appendChild(btn_excluir);
        
        list.appendChild(new_item);
    };
}

renderTodos();

function adicionar() {
    var input = document.querySelector('input[name=nome]');

    todos.push(input.value);
    renderTodos();
    saveToStorage();

    input.value = "";
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}