$( document ).ready(function() {

  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);
  if(urlParams.get('gola')){
    setGola(urlParams);
    setManga(urlParams);
    setBarra(urlParams);
  }

  var modelo = document.getElementById('modelo');

  modelo.addEventListener("click", function(event){
    event.preventDefault();
    montarUrlInformacoesModelo();
  });
});

function montarUrlInformacoesModelo(){
  const urlParams = new URLSearchParams(window.location.search);
  const radioGola = getGola();
  const radioManga = getManga();
  const radioBarra = getBarra();

  const url = 'medida.html?'
    + urlParams.toString()
    + '&gola=' + radioGola;
    + '&manga=' + radioManga;
    + '&barra=' + radioBarra;

  window.location.href = url;
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
