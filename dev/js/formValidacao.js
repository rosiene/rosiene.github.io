function validarInputsOnInput(formulario){

  const inputs = formulario.querySelectorAll("input[type=text], input[type=number]");

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener("blur", validacaoCampoObrigatorioOnInput);
  }
}

function validarInputsOnSubmit(formulario, msg_erro){

  const inputs = formulario.querySelectorAll("input[type=text], input[type=number]");

  var count = 0;

  console.log(inputs);

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (!validacaoCampoObrigatorioOnSubmit(input, msg_erro)){
      count++;
    }
  }
  var valido = (count == 0);

  console.log(valido);

  if (!valido){
    $("#erroForm").css("display", "block");
  }else{
    $("#erroForm").css("display", "none");
  }
  return valido;
}

function validacaoCampoObrigatorioOnSubmit(input, msg_erro){

  var spamErro = msg_erro;

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

function validacaoCampoObrigatorioOnInput(input){

  if(input.target.classList.value == "obrigatorio" && input.target.value == ''){
    input.target.style.border = '2px red ridge';
    return false;
  }else{
    input.target.style.border = '1px #ebc9d1 ridge';
    return true;
  }
}
