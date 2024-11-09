
function redirectToTrabalho() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email && senha) {
       
        window.location.href = "index.html";
        return false;  
    } else {
        alert("Por favor, preencha todos os campos.");
        return false;  
    }
}