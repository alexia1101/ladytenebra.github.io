function construcao(){
    alert("AINDA EM CONSTRUÇÃO!");
}

function login(){
    let usr = document.getElementById("usr").value;
    let psw = document.getElementById("psw").value;

    if(usr === "leka1101" && psw === "mari1101"){
        let n = "Tenebra";

        alert("Seja bem-vinda, " + n + "!");
    }
    else if(usr === "uthan84" && psw === "84brfbt3"){
        let n = "Hjlfgard";

        alert("Seja bem-vindo, " + n + "!");
    }
    else{
        alert("Senha incorreta. Tente novamente.");
    }
}