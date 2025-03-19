//Projeto Amigo Secreto

let nome = "";


//criando função de salvar nome
function salvarNome() {
     nome = document.getElementById("nome").value;
        if (nome == "") {
           alert("Por favor, insira seu nome");
        }  
         else {
                listaDeAmigos.push(nome);
                document.getElementById("nome").value = "";
                atualizarLista();
        }
}

// lista vazia
let listaDeAmigos = [];

// adicionar amigos 
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
        if (nomeAmigo == "") {
            alert("Por favor, insira um nome");
        }   
        else {
               listaDeAmigos.push(nomeAmigo);
               document.getElementById("amigo").value ="";
               atualizarLista();
    }
}
// atualizar lista 
function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
         let itemLista = document.createElement("li");
         itemLista.innerHTML = listaDeAmigos[i];
         listaAtualizada.appendChild(itemLista);
    }
}
// sortear amigo 
function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("Por favor, insira um nome.");
        return;

    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceAleatorio];
    if (nomeSorteado == nome) {
        return;
    }

    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;

}  

function reiniciarSorteio() {
    listaDeAmigos = [];
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
}