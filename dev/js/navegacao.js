$( document ).ready(function() {

  if ($("#submitInfo")){

    var form = document.getElementById("form_info");
    var msg_erro = document.getElementById("erroForm");

    validarInputsOnInput(form);

    var submitInfo = $('#submitInfo');

    submitInfo.on("click", function(event){
      event.preventDefault();

      if(validarInputsOnSubmit(form, msg_erro)){

        var parametros = montarParametros();

        window.location.href = "estilo.html" + parametros;
      }
    });
  }
});

function montarParametros(){

  const url = '?'
    + 'nome_projeto=' + getNomeProjeto()
    + '&descricao_projeto=' + getDescricaoProjeto()
    + '&tamanho=' + getTamanho()
    + '&agulha=' + getAgulha()
    + '&fio=' + getFio()
    + '&amostra_pts=' + getAmostraPts()
    + '&amostra_carr=' + getAmostraCarr();

  return url;
}
