let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#Password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789!@#$%¨&*/"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let pass = "";
    for(let i = 0, n  =  charset.length; i < sliderElement.value; ++i){  /* enquanto N for menor que o valor do slider, o programa vai rodar ate que seja obtido todos os caracteres*/
        pass += charset.charAt(Math.floor(Math.random() * n)); /* Ele contou quantos digitos tem em N, e  vai gerar um número aleatorio dentro da quantidade de digitos*/
    }

    containerPassword.classList.remove("hide"); /* Remove a class hide do  CSS que escondia a div*/
    password.innerHTML =  pass;
    novaSenha = pass;

}

function copyPassword(){
    if (novaSenha) {
        const input = document.createElement('textarea');
        input.value = novaSenha;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);

        alert("Senha Copiada Com Sucesso.");
    } else {
        console.error("A variável novaSenha não está definida.");
    }
}