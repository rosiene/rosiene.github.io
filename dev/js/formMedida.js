$( document ).ready(function() {

  const urlParams = new URLSearchParams(window.location.search);

});

function voltarModelo(){
  const urlParams = new URLSearchParams(window.location.search);
  const url = "modelo.html?"
    + urlParams.toString(); // Use encodeURIComponent para garantir que a URL seja segura

  window.location.href = url;
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
