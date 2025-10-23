$( document ).ready(function() {

  var form = document.getElementById("form_info");
  var msg_erro = document.getElementById("erroForm");

  validarInputsOnInput(form);

  var submitInfo = $('#submitInfo');

  submitInfo.on("click", function(event){
    event.preventDefault();

    if(validarInputsOnSubmit(form, msg_erro)){

      var parametros = montarParametrosInfo();

      window.location.href = "pala.html?" + parametros;
    }
  });

});

function montarParametrosInfo(){

  const url = 'nome_projeto=' + getNomeProjeto()
    + '&descricao_projeto=' + getDescricaoProjeto()
    + '&tamanho=' + getTamanho()
    + '&agulha=' + getAgulha()
    + '&fio=' + getFio()
    + '&amostra_pts=' + getAmostraPts()
    + '&amostra_carr=' + getAmostraCarr();

  return url;
}

function getNomeProjeto(){
  return $("#nomeProjeto").val();
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
