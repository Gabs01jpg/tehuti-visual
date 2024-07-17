// --------------------- Inicio do crud: ---------------------

// Elementos do 'cadastro.html'
let nomeCad = document.querySelector("#nome");
let emailCad = document.querySelector("#email");
let senhaCad = document.querySelector("#senha");
let confirmarSenhaCad = document.querySelector("#confirme-senha");
let btnCadastrar = document.querySelector('#btnCadastrar');
// --------------------- Fim do crud: ---------------------



// --------------------- controle de sessão ---------------------
auth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log("logado")
    }
    else {
        console.log("não logado")
    }
})



// --------------------- Criando as funções: ---------------------

// Função cadastrar
function cadastrar() {
    if (senhaCad.value == confirmarSenhaCad.value) {
        auth.createUserWithEmailAndPassword(emailCad.value, senhaCad.value).
            then(function (user) { console.log(auth.currentUser.email) },
                function error() { console.log(error.message) })
    }
}


// Função para deslogar da conta
function sair() {
    auth.signOut()
}



// --------------------- Chamando as funções: ---------------------

// Chama a função de cadastro quando clicar no botão cadastrar
btnCadastrar.addEventListener('click', cadastrar);

// capturar evento click no botão Google
// capturar evento click no botão Google
btnGoogle.addEventListener("click", () => {
    // criar instancia do objeto Google provider auth
    let provider = new firebase.auth.GoogleAuthProvider()
    signIn(provider)
})
