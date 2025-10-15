$( document ).ready(function() {

  validarInputsOnInput();

  if ($("#submitInfo")){

    var submitInfo = $('#submitInfo');

    submitInfo.on("click", function(event){
      event.preventDefault();

      if(validarInputsOnSubmit()){
        console.log('valido');
      }
    });
  }
});

function validarInputsOnInput(){
  const inputs = document.getElementById("formulario").querySelectorAll("input[type=text], input[type=number]");

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener("blur", validacaoCampoObrigatorioOnInput);
  }
}

function validarInputsOnSubmit(){
  const inputs = document.getElementById("formulario").querySelectorAll("input[type=text], input[type=number]");
  var count = 0;

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (!validacaoCampoObrigatorioOnSubmit(input)){
      count++;
    }
  }
  var valido = (count == 0);
  if (!valido){
    $("#erroForm").css("display", "block");
  }else{
    $("#erroForm").css("display", "none");
  }
  return valido;
}

function validacaoCampoObrigatorioOnSubmit(input){

  var spamErro = document.getElementById('erroForm');

  if(input.classList.value == "obrigatorio" && input.value == ''){
    input.style.border = '2px red ridge';
    spamErro.style.display = 'block';
    return false;
  }else{
    input.style.border = '1px #ebc9d1 ridge';
    spamErro.style.display = 'none';
    return true;
  }
}

function validacaoCampoObrigatorioOnInput(e){

  if(e.target.classList.value == "obrigatorio" && e.target.value == ''){
    e.target.style.border = '2px red ridge';
    return false;
  }else{
    e.target.style.border = '1px #ebc9d1 ridge';
    return true;
  }
}
