const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    console.log(await delay());
    console.log('1s');
    console.log(await delay());
    console.log('2s');
    console.log(await delay());
    console.log('3s');
}

umPorSegundo();