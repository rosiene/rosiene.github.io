const gola_redonda_manga_curta =
  [ "A - Circunferência da gola (cm)*:"
  , "B - Comprimento da barra da gola (cm)*:"
  , false
  , "C - Circunferência da manga (cm)*:"
  , "D - Comprimento da manga (cm)*:"
  , false
  , "E - Comprimento da barra da manga (cm)*:"
  , "F - Circunferência do corpo (cm)*:"
  , "G - Comprimento do corpo (cm)*:"
  , "H - Comprimento da barra do corpo (cm)*:"
];

const gola_ajustada_manga_curta =
  [ "A - Circunferência da gola (cm)*:"
  , "B - Comprimento da barra da gola (cm)*:"
  , "C - Comprimento da diferença do pescoço (cm)*:"
  , "D - Circunferência da manga (cm)*:"
  , "E - Comprimento da manga (cm)*:"
  , false
  , "F - Comprimento da barra da manga (cm)*:"
  , "G - Circunferência do corpo (cm)*:"
  , "H - Comprimento do corpo (cm)*:"
  , "I - Comprimento da barra do corpo (cm)*:"
];

const gola_redonda_manga_comprida =
  [ "A - Circunferência da gola (cm)*:"
  , "B - Comprimento da barra da gola (cm)*:"
  , false
  , "C - Circunferência da manga (cm)*:"
  , "D - Comprimento da manga (cm)*:"
  , "E - Circunferência do punho (cm)*:"
  , "F - Comprimento da barra da manga (cm)*:"
  , "G - Circunferência do corpo (cm)*:"
  , "H - Comprimento do corpo (cm)*:"
  , "I - Comprimento da barra do corpo (cm)*:"
];

const gola_ajustada_manga_comprida =
  [ "A - Circunferência da gola (cm)*:"
  , "B - Comprimento da barra da gola (cm)*:"
  , "C - Comprimento da diferença do pescoço (cm)*:"
  , "D - Circunferência da manga (cm)*:"
  , "E - Comprimento da manga (cm)*:"
  , "F - Circunferência do punho (cm)*:"
  , "G - Comprimento da barra da manga (cm)*:"
  , "H - Circunferência do corpo (cm)*:"
  , "I - Comprimento do corpo (cm)*:"
  , "J - Comprimento da barra do corpo (cm)*:"
];

$(document).ready(function() {

  const urlParams = new URLSearchParams(window.location.search);
  const form = document.getElementById("form_medidas");
  var msg_erro = document.getElementById("erroForm");

  setEstilo(urlParams);
  setInputs(urlParams, form);

  validarInputsOnInput(form);

  var submitMedidas = $('#submitMedidas');

  submitMedidas.on("click", function(event){
    event.preventDefault();

    if(validarInputsOnSubmit(form, msg_erro)){

      var parametros = montarParametrosInfoEstiloMedida();
      window.location.href = "resultado.html?" + parametros;
    }
  });
});

function montarParametrosInfoEstiloMedida(){
  const urlParams = new URLSearchParams(window.location.search);

  const url = urlParams.toString()
    + '&gola_circunferencia=' + getGolaCircunferencia()
    + '&gola_comprimento=' + getGolaComprimento()
    + '&gola_diferenca=' + getGolaDiferenca()
    + '&manga_circunferencia=' + getMangaCircunferencia()
    + '&manga_comprimento=' + getMangaComprimento()
    + '&punho_circunferencia=' + getPunhoCircunferencia()
    + '&manga_comprimento_barra=' + getMangaComprimentoBarra()
    + '&corpo_circunferencia=' + getCorpoCircunferencia()
    + '&corpo_comprimento=' + getCorpoComprimento()
    + '&corpo_comprimento_barra=' + getCorpoComprimentoBarra();

  return url;
}

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

function setInputs(urlParams, formulario){

  var textLabels;
  const gola = urlParams.get('gola');
  const manga = urlParams.get('manga');

  if (gola == 'redonda'){
    const childElement = document.getElementById('golaDiferenca');
    const parentElement = childElement.parentElement;
    parentElement.style.display = 'none';
  }

  if (manga == 'curta'){
    const childElement = document.getElementById('punhoCircunferencia');
    const parentElement = childElement.parentElement;
    parentElement.style.display = 'none';
  }

  const labels = formulario.querySelectorAll("label");

  if (gola == 'redonda' && manga == 'curta'){
    textLabels = gola_redonda_manga_curta;
  }else if (gola == 'ajustada' && manga == 'curta'){
    textLabels = gola_ajustada_manga_curta;
  }else if (gola == 'redonda' && manga == 'comprida'){
    textLabels = gola_redonda_manga_comprida;
  }else{
    textLabels = gola_ajustada_manga_comprida;
  }

  for (let i = 0; i < labels.length; i++) {
    var label = labels[i];
    label.innerHTML = textLabels[i];
  }

}

function getGolaCircunferencia(){
  return $("#golaCircunferencia").val();
}

function getGolaComprimento(){
  return $("#golaComprimento").val();
}

function getGolaDiferenca(){
  return $("#golaDiferenca").val();
}

function getMangaCircunferencia(){
  return $("#mangaCircunferencia").val();
}

function getMangaComprimento(){
  return $("#mangaComprimento").val();
}

function getPunhoCircunferencia(){
  return $("#punhoCircunferencia").val();
}

function getMangaComprimentoBarra(){
  return $("#mangaComprimentoBarra").val();
}

function getCorpoCircunferencia(){
  return $("#corpoCircunferencia").val();
}

function getCorpoComprimento(){
  return $("#corpoComprimento").val();
}

function getCorpoComprimentoBarra(){
  return $("#corpoComprimentoBarra").val();
}
