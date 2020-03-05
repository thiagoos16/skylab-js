const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000 );
});

// myPromise() 
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });

async function execPromise() {
    // const response = await myPromise();
    // console.log(response);

    console.log(await myPromise());
    console.log(await myPromise());
    console.log(await myPromise());
    //Isso aqui em cima equivale a isso aqui em baixo
    myPromise().then(response => {
        console.log(response);
        myPromise().then(response => {
            console.log(response);
            myPromise().then(response => {
                console.log(response);
            });
        });
    });
}

//execPromise();

const executaPromise = async() => {
    console.log(await myPromise());
    console.log(await myPromise());
}