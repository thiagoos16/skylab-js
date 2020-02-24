var btn = document.querySelector('.btn');

function checaIdade(age) {
    return new Promise(function(resolve, reject) {
        if (age > 18) {
            resolve("Maior que 18");
        } else {
            reject("Menor que 18");
        }
    });
}

btn.onclick = function() {
    var age = document.getElementById('age').value;
    console.log(age);
    checaIdade(age)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
};

