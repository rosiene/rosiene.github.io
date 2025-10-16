const urlParams = new URLSearchParams(window.location.search);

function getUrlNomeProjeto(){
  console.log(urlParams);
  console.log(urlParams.get("nome_projeto"));

  return urlParams.get("nome_projeto");
}
