function validarInputsOnInput(){
  const inputs = document.getElementById("formulario").querySelectorAll("input[type=text], input[type=number]");

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener("blur", validacaoCampoObrigatorioOnInput);

    if (input.id == 'ptsDivisao'){
      input.addEventListener("blur", nPontosPalaRaglan);
    }
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
  return (count);
}

function validacaoCampoObrigatorioOnSubmit(input){
  console.log(input.id);
  // console.log(input.classList.value);

  if((input.classList.value == "obrigatorio" || input.classList.value == "obrigatorio erro") && input.value == ''){
    input.classList.add('erro');
    return false;
  }else{
    input.classList.remove('erro');
    return true;
  }
}

function validacaoCampoObrigatorioOnInput(e){
  // console.log(e.target.value);

  if((e.target.classList.value == "obrigatorio" || e.target.classList.value == "obrigatorio erro") && e.target.value == ''){
    e.target.classList.add('erro');
    return false;
  }else{
    e.target.classList.remove('erro');
    return true;
  }
}

function nPontosPalaRaglan(e){
  console.log(e);

  if (e.target.value > 2){
    e.target.classList.add('erro');
  }else{
    e.target.classList.remove('erro');
    return true;
  }
}
