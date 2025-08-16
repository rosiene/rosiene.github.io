
function getNomeProjeto(){
  return $("#nomeProjeto").val();
}

function getDescricaoProjeto(){
  return $("#descricaoProjeto").val();
}

function getAmostraPts(){
  return $("#ptsAmostra").val();
}

function getAmostraCarr(){
  return $("#carrAmostra").val();
}

function getGolaCircunferencia(){
  return $("#cmGola").val();
}

function getGolaComprimento(){
  return $("#cmCompGola").val();
}

function getGolaComprimentoDiferenca(){
  return $("#cmCompDifGola").val();
}

function getPtsDivisao(){
  return $("#ptsDivisao").val();
}

function getCava(ptsAmostra){
  if (ptsAmostra <= 12){
    return 4;
  }else if(ptsAmostra <= 16){
    return 6;
  }else if(ptsAmostra <= 20){
    return 8;
  }else if(ptsAmostra <= 24){
    return 10;
  }else{
    return 12;
  }
}

function getCmCorpoCircunferencia(){
  return $("#cmCircunferenciaCorpo").val();
}

function getCmCorpoComprimento(){
  return $("#cmCompCorpo").val();
}

function getCmCorpoComprimentoBarra(){
  return $("#cmCompCorpoBarra").val();
}

function getTipoManga(){
  return $('input[name="tipo_manga"]:checked').val();
}

function getCmMangaCircunferencia(){
  return $("#cmMangaCircunferencia").val();
}

function getCmMangaComprimento(){
  return $("#cmMangaComprimento").val();
}

function getCmMangaComprimentoBarra(){
  return $("#cmMangaComprimentoBarra").val();
}

function getPunhoCircunferencia(){
  return $("#cmPunhoCircunferencia").val();
}

function getEstiloBarra(){
  return $('input[name="estilo_barra"]:checked').val();
}

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
  return (count == 0);
}

function validacaoCampoObrigatorioOnSubmit(input){

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

  if(e.target.classList.value == "obrigatorio" && e.target.value == ''){
    e.target.style.border = '2px red ridge';
    return false;
  }else{
    e.target.style.border = '2px #241f20 ridge';
    return true;
  }
}

function nPontosPalaRaglan(e){

  if (e.target.value > 2 || e.target.value < 1){
    e.target.classList.add('erro');
  }else{
    e.target.classList.remove('erro');
    return true;
  }
}
