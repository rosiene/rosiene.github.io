


$( document ).ready(function() {

  const urlParams = new URLSearchParams(window.location.search);

  if(urlParams.size != 0){
      setNomeProjeto(urlParams);
      setDescricaoProjeto(urlParams);
      setTamanho(urlParams);
      setAgulha(urlParams);
      setFio(urlParams);
      setAmostraPts(urlParams);
      setAmostraCarr(urlParams);
  }
});

function voltar(){
  let userChoice = confirm("Você tem certeza que deseja apagar o formulário?");

if (userChoice) {
    // Code to execute if the user clicked "OK" (Yes)
    const url = "inicio.html";
    window.location.href = url;
  }
}



function getNomeProjeto(){
  if ($("#nomeProjeto").val()){
    return $("#nomeProjeto").val();
  }
}

function setNomeProjeto(urlParams){
  $("#nomeProjeto").val(urlParams.get('nome_projeto'));
}

function getDescricaoProjeto(){
  return $("#descricaoProjeto").val();
}

function setDescricaoProjeto(urlParams){
  $("#descricaoProjeto").val(urlParams.get('descricao_projeto'));
}

function getTamanho(){
  return $('input[name="tamanho"]:checked').val();
}

function setTamanho(urlParams){
  $('input[name="tamanho"][value="'+ urlParams.get('tamanho') +'"]').prop("checked", true);
}

function getAgulha(){
  return $("#agulha").val();
}

function setAgulha(urlParams){
  $("#agulha").val(urlParams.get('agulha'));
}

function getFio(){
  return $("#fio").val();
}

function setFio(urlParams){
  $("#fio").val(urlParams.get('fio'));
}

function getAmostraPts(){
  return $("#amostraPts").val();
}

function setAmostraPts(urlParams){
  $("#amostraPts").val(urlParams.get('amostra_pts'));
}

function getAmostraCarr(){
  return $("#amostraCarr").val();
}

function setAmostraCarr(urlParams){
  $("#amostraCarr").val(urlParams.get('amostra_carr'));
}
