var list = document.querySelector('#app ul');

var todos = [
    'Criar logo da lojinha',
    'Criar template para posts no insta',
    'Atualizar insta com o design'
];

function renderTodos() {
    list.innerHTML = ""; 

    todos.forEach(todo => {
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
    });
}

function adicionar() {
    var input = document.querySelector('input[name=nome]');

    todos.push(input.value);
    renderTodos();

    input.value = "";
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}

renderTodos();