$(document).ready(function() {

  const urlParams = new URLSearchParams(window.location.search);
  setEstilo(urlParams);


  var form = document.getElementById("form_medidas");
  var msg_erro = document.getElementById("erroForm");

  validarInputsOnInput(form);

  var submitEstilo = $('#submitMedidas');

  submitEstilo.on("click", function(event){
    event.preventDefault();

    if(validarInputsOnSubmit(form, msg_erro)){

      console.log('calcular!');
    }
  });


  // var medida = document.getElementById('medida');
  //
  // medida.addEventListener("click", function(event){
  //   event.preventDefault();
  //
  //   if (validar()){
  //     calcular();
  //   }
  // });

});

function setEstilo(urlParams){
  const divisao = urlParams.get('divisao');
  const gola = urlParams.get('gola');
  const manga = urlParams.get('manga');
  const barra = urlParams.get('barra');

  const textoEstilo = getTextoEstilo(divisao, gola, manga, barra);
  const imgEstilo = getImgEstilo(gola, manga);

  $('.modelo_selecionado').empty();
  $('.modelo_selecionado').html(textoEstilo + imgEstilo);
}

function getTextoEstilo(divisaoInput, golaInput, mangaInput, barraInput){

  var gola, manga, barra;

  if (golaInput == 'redonda'){
    gola = "redonda";
  }else if (golaInput == 'ajustada'){
    gola = "redonda ajustada";
  }

  if (mangaInput == 'curta'){
    manga = "curta";
  }else if (mangaInput == 'comprida'){
    manga = 'comprida ajustada ao punho';
  }

  if (barraInput == 'barra-1-1'){
    barra = 'Barra 1/1';
  }else if(barraInput == 'barra-2-2'){
    barra = 'Barra 2/2';
  }else if(barraInput == 'arroz'){
    barra = 'Ponto Arroz';
  }else if(barraInput == 'cordoes'){
    barra = 'Cordões de Tricô';
  }

  return "<p>Pala raglan em malha com "
    + divisaoInput + " pontos de divisão, "
    + " gola " + gola
    + ", mangas " + manga
    + " e barras no ponto " + barra
    + ".</p>";
}

function getImgEstilo(golaInput, mangaInput){

  return "<img src='img/medidas/raglan-gola-"
    + golaInput
    + "-manga-"
    + mangaInput
    + ".png' />";
}
