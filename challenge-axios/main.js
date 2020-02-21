var btn = document.querySelector('.btn');
var ul = document.querySelector("#app ul");

function getUser(name) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/' + name);
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function fillList()
{
    ul.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        var li = document.createElement("li");
        var li_content = document.createTextNode("repo" + i);

        li.appendChild(li_content);
        ul.appendChild(li);
    }
}

btn.onclick = function() {
    var name = document.getElementById('name').value;

    ul.innerHTML = "";

    var li = document.createElement("li");
    var li_content = document.createTextNode("Carregando...");
    li.appendChild(li_content);
    ul.appendChild(li);

    //getUser(name)
    axios.get('https://api.github.com/users/' + name)
        sleep(2000).then(function(response) {
            fillList();
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
};

