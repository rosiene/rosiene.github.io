$( document ).ready(function() {

  var form = document.getElementById("form_estilo");
  var msg_erro = document.getElementById("erroForm");

  validarInputsOnInput(form);

  var submitEstilo = $('#submitEstilo');

  submitEstilo.on("click", function(event){
    event.preventDefault();

    if(validarInputsOnSubmit(form, msg_erro)){

      var parametros = montarParametrosInfoEstilo();
      var urlMedida = montarUrl();

      window.location.href = "medidas.html?" + parametros;
    }
  });
});

function montarParametrosInfoEstilo(){
  const urlParams = new URLSearchParams(window.location.search);

  const url = urlParams.toString()
    + '&divisao=' + getDivisao()
    + '&gola=' + getGola()
    + '&manga=' + getManga()
    + '&barra=' + getBarra();

  return url;
}

function getDivisao(){
  return $("#divisao").val();
}

function setDivisao(urlParams){
  $("#divisao").val(urlParams.get('divisao'));
}

function getGola(){
  return $('input[name="gola"]:checked').val();
}

function setGola(urlParams){
  $("input[name='gola'][value='" + urlParams.get('gola') + "']").prop("checked", true);
}

function getManga(){
  return $('input[name="manga"]:checked').val();
}

function setManga(urlParams){
  $("input[name='manga'][value='" + urlParams.get('manga') + "']").prop("checked", true);
}

function getBarra(){
  return $('input[name="barra"]:checked').val();
}

function setBarra(urlParams){
  $("input[name='barra'][value='" + urlParams.get('barra') + "']").prop("checked", true);
}

function voltarInfo(){
  const urlParams = new URLSearchParams(window.location.search);
  const url = "info.html?"
    + urlParams.toString(); // Use encodeURIComponent para garantir que a URL seja segura

  window.location.href = url;
}
