// --------------------- Inicio do crud: ---------------------

// Elementos do index.html
let emailLog = document.querySelector("#email");
let senhaLog = document.querySelector("#senha");
let lembrarSenhaLog = document.querySelector("#meuCheckbox")
let btnLog = document.querySelector("#btnEntrar")
let btnGoogleLog = document.querySelector("#btnGoogle")
// --------------------- Fim do crud: ---------------------

// --------------------- controle de sessão ---------------------
auth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        window.location.pathname = "logado.html"
        console.log("logado")
    }
    else {
        console.log("não logado")
    }
})


// --------------------- Criando as funções: ---------------------

// Função para logar na conta
function entrar() {
    auth.signInWithEmailAndPassword(emailLog.value, senhaLog.value)
}

// Função para deslogar da conta
function sair() {
    auth.signOut()
}

//  funcao para fazer login via firebase com provider (google , github, microsoft)
function signIn(provider) {
    //abrir popup na tela com autenticação do provider
    firebase.auth().signInWithPopup(provider)
        .then(function (resultado) {
            console.log(resultado)
        }).catch(function (error) {
            console.log(error)
            alert("falha na autenticação")
        })
}



// --------------------- Chamando as funções: ---------------------

// Chama a função que faz o login quando clicar no botão logar
btnLog.addEventListener('click', entrar);

// capturar evento click no botão Google
// capturar evento click no botão Google
btnGoogle.addEventListener("click", () => {
    // criar instancia do objeto Google provider auth
    let provider = new firebase.auth.GoogleAuthProvider()
    signIn(provider)
})

