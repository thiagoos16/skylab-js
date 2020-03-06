import axios from 'axios';

//begin
const delay = time => new Promise(resolve => setTimeout(() => {resolve('ok')}, 1000));

async function umPorSegundo() {
    await delay('1s');
    console.log('2s');
    await delay('3s');
    console.log('4s');
    await delay('5s');
    console.log('6s');
}

//umPorSegundo();
//end

//begin
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);  
        console.log(response);
    } catch (error) {
        console.warn('Usuário não existe');
    }
}

/*getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');*/
//end

//begin
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (error) {
            console.warn('Repositório não existe');
        }
    }
}

/*Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');*/
//end

//begin
const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (error) {
        console.warn('Usuário não existe');
    }
}

buscaUsuario('diego3g');
//end
