//Objetos são usados para organizar dados, no entanto podemos ter vários tipos de 
//dados!

const nomes = ["Pedro", "João", "Ana Clara"];
const telefone = ["2189748399", "248937489", "248783789"];
const idades = ["30", "25", "18"];

//Uso do Objetos {} -> chaves representam um objeto
// uso de arrays [] -> colchetes representam uma lista

const dados = [
    {
        nome: "Pedro",
        telefone: "2189748399",
        idade: "30"
    },
    {
        nome: "João",
        telefone: "248937489",
        idade: "25"
    },
    {
        nome: "Ana Clara",
        telefone: "248783789",
        idade: "18"
    }
];

const telefoneDoPedro = dados[0].telefone;

//Coloque no console os telefones das pessoas detro da lista de objetos!

const colocarTelefonesNoConsole = (lista) => {
    for(const dado of lista) {
        console.log(dado.telefone)
    }
};

colocarTelefonesNoConsole(dados);


//No projeto de CRUD você vai criar uma lista de dados e quando criar um novo contato 
// vai colocar os dados desse contato detro desta lista de contatos; e utilizará essa
//lista para colocar os dados na tela, excluir e editar.