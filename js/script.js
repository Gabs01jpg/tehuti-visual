const loginLink = document.querySelector("#loginLink")
const loginCamp = document.querySelector("#login")
const main = document.querySelector("#mainLogin")

main.style.display = 'none';

loginLink.addEventListener('click', () => {
    loginCamp.style.display = "block";
    main.style.display = "flex";
    main.style.opacity = 1;
})


document.addEventListener('click', function (event) {

    if (loginCamp.style.display == 'block') {
        var elementClicked = event.target;

        // Verifica se o click ocorreu fora do elemento espicifico
        if (!elementClicked.closest('#login') && !elementClicked.closest('#loginLink')) {
            // O clique foi fora
            main.style.opacity = 0;
            setTimeout(() => {
                loginCamp.style.display = 'none';
                main.style.display = 'none';
            }, 500);
        }
    }
})