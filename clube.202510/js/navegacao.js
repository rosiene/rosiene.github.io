function voltar(){
  let userChoice = confirm("Você tem certeza que deseja apagar o formulário?");

if (userChoice) {
    // Code to execute if the user clicked "OK" (Yes)
    const url = "inicio.html";
    window.location.href = url;
  }
}
