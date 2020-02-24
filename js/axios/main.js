axios.get('https://api.github.com/users/diego3g')
    .then(function(response) {
        console.log(response); // o axios já faz o parse
    })
    .catch(function(error) {
        console.log(error);
    });