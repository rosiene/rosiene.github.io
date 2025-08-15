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
  var spamErro = document.getElementById('erroForm');

  if(input.classList.value == "obrigatorio" && input.value == ''){
    input.style.border = '2px red ridge';
    spamErro.style.display = 'block';
    return false;
  }else{
    input.style.border = '2px #241f20 ridge';
    spamErro.style.display = 'none';
    return true;
  }
}

function validacaoCampoObrigatorioOnInput(e){
  console.log(e.target);

  if(e.target.classList.value == "obrigatorio" && e.target.value == ''){
    e.target.style.border = '2px red ridge';
    return false;
  }else{
    e.target.style.border = '2px #241f20 ridge';
    return true;
  }
}

function nPontosPalaRaglan(e){
  console.log(e);

  if (e.target.value > 2 || e.target.value < 1){
    e.target.classList.add('erro');
  }else{
    e.target.classList.remove('erro');
    return true;
  }
}
