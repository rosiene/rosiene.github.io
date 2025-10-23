$( document ).ready(function() {

  var form = document.getElementById("form_pala");
  var msg_erro = document.getElementById("erroForm");

  validarInputsOnInput(form);

  var submitPala = $('#submitPala');

  submitPala.on("click", function(event){
    event.preventDefault();

    if(validarInputsOnSubmit(form, msg_erro)){
      var parametros = montarParametrosInfoPala();
      window.location.href = "estilo.html?" + parametros;
    }
  });
});

function montarParametrosInfoPala(){
  const urlParams = new URLSearchParams(window.location.search);

  const url = urlParams.toString()
    + '&pala=' + getPala();

  return url;
}

function getPala(){
  return $('input[name="pala"]:checked').val();
}

function setBarra(urlParams){
  $("input[name='pala'][value='" + urlParams.get('pala') + "']").prop("checked", true);
}
