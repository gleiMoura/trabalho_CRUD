let data = [{
    name: "Ana Britto",
    handle: "ana_britto",
},
{
    name: "Ricardo Costa",
    handle: "ricardocosta",
},
{
    name: "Tiago Montana",
    handle: "tiagomontana",
}];

let handleId = '';

function searchContact() {
    //Essa funão procura por elementos
    const searchTerm = document.getElementById("caixa-pesquisa").value.toLowerCase();
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        //passa pelos element h3 que possuem os textos e colocar display flex naqueles que possuem o mesmo texto que está no search
        const h3Element = item.querySelector("h3");
        if (h3Element) {
            const itemName = h3Element.textContent.toLowerCase();
            if (itemName.includes(searchTerm)) {
                item.style.display = "flex"; // Mostra o elemento
            } else {
                item.style.display = "none"; // Oculta o elemento
            }
        }
    }
}

function openAddContact() {
    //Essa função abre a tela de colocar o contato
    const addContact = document.querySelector(".tela-adiciona-contato");
    addContact.style.display = "flex"
}

function closeContact() {
    //Essa função fecha a tela de colocar contato
    const addContact = document.querySelector(".tela-adiciona-contato");
    addContact.style.display = "none";
}

function addContact() {
    const main = document.querySelector("main");//main é onde ficam os itens de contato

    const name = document.querySelector(".name"); // Este é o elemento em que fica o nome do contato
    const handle = document.querySelector(".handle"); //Este é o elemento em que fica o handle do contato

    const nameText = name.value;// Aqui pegamos o valor do elemento 
    const handleText = handle.value;

    let codeText = ''; // atribuímos um valor para o codeText

    if (nameText && handleText) {
        //Adicionar elementos dentro do LOCAL STORAGE
        localStorage.setItem("name", nameText);
        localStorage.setItem("handle", handleText);


        //verificamos se a pessoa escreveu os dois textos
        codeText = `
            <div class="item ${handleText}">
                <div class="info">
                    <h3>${nameText}</h3>
                    <p>${handleText}</p>
                </div>
                <div class="acoes">
                    <div class="edita acoes-icone" onclick={openEditContact('${handleText}')}> 
                        <img src="images/caneta.svg" alt="editar" />
                    </div>
                    <div class="exclui acoes-icone" >
                        <img src="images/cancel.svg" alt="excluir" onclick={removeContact('${handleText}')} />
                    </div>
                </div>
            </div>
        `
    }

    main.innerHTML = main.innerHTML + codeText; // adicionamos o código na página

    closeContact();
}

function openEditContact(handleName) {
    const editContact = document.querySelector(".tela-edita-contato");
    editContact.style.display = "flex";
    handleId = handleName;
}

function closeEditContact() {
    const editContact = document.querySelector(".tela-edita-contato");
    editContact.style.display = "none"
}

function editContact() {
    let item = document.querySelector(`.${handleId}`);
    if (!item) {
        item = document.querySelector(".ana_britto")
    }

    //pega os dados que estão no LOCAL STORAGE
    const nomeDoStorage = localStorage.getItem("name");
    console.log("Nome do storage",nomeDoStorage);

    const list = [
        
    ]

    const classe = item.classList.item(1) //pega o nome da segunda classe do item

    const name = document.querySelector(".edit-name"); //pega o elemento nome do contato no quando queremos editar
    const handle = document.querySelector(".edit-handle");

    const nameText = name.value;
    const handleText = handle.value;

    if (nameText && handleText && item) { //verificamos se os campos foram preenchidos e inserimos o componente 
        item.innerHTML = ` 
                        <div class="info">
                            <h3>${nameText}</h3>
                            <p>${handleText}</p>
                        </div>
                        <div class="acoes">
                            <div class="edita acoes-icone" onclick={openEditContact(${classe})}>
                                <img src="images/caneta.svg" alt="editar" />
                            </div>
                            <div class="exclui acoes-icone">
                                <img src="images/cancel.svg" alt="excluir" />
                            </div>
                        </div>
            `
        handleId = '';
    }

    closeEditContact();
}

function removeContact(name) {
    const item = document.querySelector(`.${name}`);
    item.remove();
}