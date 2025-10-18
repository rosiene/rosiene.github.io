
// nome_projeto=Teste
// descricao_projeto=Meu+Primeiro+Top+Down
// tamanho=adulto
// agulha=7
// fio=Balloon
// amostra_pts=18
// amostra_carr=26
// divisao=0
// gola=redonda
// manga=curta
// barra=barra-1-1
// gola_circunferencia=60
// gola_comprimento=4
// gola_diferenca=4
// manga_circunferencia=40
// manga_comprimento=12
// punho_circunferencia=40
// manga_comprimento_barra=undefined
// corpo_circunferencia=100
// corpo_comprimento=24
// corpo_comprimento_barra=24

const urlParams = new URLSearchParams(window.location.search);

$(document).ready(function() {

  montarCabecalhoReceita();

  download();


});

function montarCabecalhoReceita(){

  montarCabecalhoReceita();
}

function montarCabecalhoReceita(){
  //Título, Materiais, Amostra, Tamanho, Abreviacoes

  $('.resultado').append(gerarTitulo(getNomeProjeto(), getDescricaoProjeto()));
  $('.resultado').append(gerarAmostra(getAmostraPts(), getAmostraCarr()));
  $('.resultado').append(gerarTamanho(getTamanho(), getGola(), getManga()));
  $('.resultado').append(gerarLegenda());

}

function download(){
  var buttonDownload = $("#download")

  buttonDownload.on("click", function(event){
    var element = document.getElementById('conteudo');
    var opt = {
      margin:       0,
      filename:     'file.pdf',
      image:        { type: 'png', quality: 0.70 },
      html2canvas:  { scale: 2, useCORS: true},
      jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  });
}

function calcularGeral(){
  var nomeProjeto = getNomeProjeto();
}

function getNomeProjeto(){
  return urlParams.get('nome_projeto');
}

function getDescricaoProjeto(){
  return urlParams.get('descricao_projeto');
}

function getTamanho(){
  return urlParams.get('tamanho');
}

function getAgulha(){
  return urlParams.get('agulha');
}

function getFio(){
  return urlParams.get('fio');
}

function getAmostraPts(){
  return urlParams.get('amostra_pts');
}

function getAmostraCarr(){
  return urlParams.get('amostra_carr');
}

function getDivisao(){
  return urlParams.get('divisao');
}

function getGola(){
  return urlParams.get('gola');
}

function getManga(){
  return urlParams.get('manga');
}

function getBarra(){
  return urlParams.get('barra');
}

function getGolaCircunferencia(){
  return urlParams.get('gola_circunferencia');
}

function getGolaComprimento(){
  return urlParams.get('gola_comprimento');
}

function getGolaDiferenca(){
  return urlParams.get('gola_diferenca');
}

function getMangaCircunferencia(){
  return urlParams.get('manga_circunferencia');
}

function getMangaComprimento(){
  return urlParams.get('manga_comprimento');
}

function getPunhoCircunferencia(){
  return urlParams.get('punho_circunferencia');
}

function getMangaComprimentoBarra(){
  return urlParams.get('manga_comprimento_barra');
}

function getCorpoCircunferencia(){
  return urlParams.get('corpo_circunferencia');
}

function getCorpoComprimento(){
  return urlParams.get('corpo_comprimento');
}

function getCorpoComprimentoBarra(){
  return urlParams.get('corpo_comprimento_barra');
}
