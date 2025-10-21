
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

var parametros = new Object();
var topDown = new Object();

$(document).ready(function() {

  setToDownParametros();

  escreverReceita();

  // setTimeout(() => {
  //   download();
  // }, 1000);
});

function escreverReceita(){
  montarCabecalho();
  montarMateriais();
  montarAmostra();
  montarTamanho();
  montarLegenda();

  montarInstrucoes();

  montarRodape();

}

function montarCabecalho(){
  //Título, Materiais, Amostra, Tamanho, Abreviacoes
  $('.titulo').append(gerarTitulo(parametros.nomeProjeto));
  $('.resultado').append(gerarDescricao(parametros.descricaoProjeto));
}

function montarMateriais(){
 parametros.fioQuantidade = calcularQtdFio(parametros);
 $('.resultado').append(gerarMateriais(parametros));
}

function montarAmostra(){
  $('.resultado').append(gerarAmostra(parametros));
}

function montarTamanho(){
  $('.resultado').append(gerarTamanho(parametros));
}

function montarLegenda(){
    $('.resultado').append(gerarLegenda());
}

function montarInstrucoes(){
  $('.resultado').append(gerarInstrucaoTitulo());
  topDown = calcularReceita(parametros);
  // console.log(topDown);
  $('.resultado').append(gerarInstrucaoMontagem(topDown.golaPontos));
  $('.resultado').append(gerarInstrucaoGola(topDown.golaVoltas, topDown.barra));
  $('.resultado').append(gerarInstrucaoPreparacaoRaglan(topDown.divisao,
                                                        topDown.corpoFrenteInicioPalaPontos,
                                                        topDown.corpoCostasPrimeiroPalaPontos,
                                                        topDown.corpoCostasSegundoPalaPontos,
                                                        topDown.mangaInicioPalaPontos));

}

function montarAcabamento(){
  $('.resultado').append(acabamento());
}

function montarRodape(){
  $('.resultado').append(rodape());
}

function download(){

  var titulo = parametros.nomeProjeto;
  var element = document.body;
  var opt = {
    margin:       0.5,
    filename:     titulo + '.pdf',
    image:        { type: 'jpg', quality: 1 },
    pagebreak: { mode: ['css'] },
    // pagebreak: { mode: ['css', 'legacy'] },
    html2canvas:  { scale: 3, useCORS: true, letterRendering: true},
    jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

function getCava(ptsAmostra){
  if (ptsAmostra <= 12){
    return 4;
  }else if(ptsAmostra <= 16){
    return 6;
  }else if(ptsAmostra <= 20){
    return 8;
  }else if(ptsAmostra <= 24){
    return 10;
  }else{
    return 12;
  }
}

function getMultiploPontos(padrao){
  if (padrao == "barra-2-2"){
    return 4;
  }
  return 2;
}

function getMultiploVoltas(padrao){
  if (padrao == "cordoes" || padrao == "arroz"){
    return 2;
  }
  return 1;
}


function getFioCategoria(amostra){
  return calcularCategoriaFio(amostra);
}

function setToDownParametros(){
  parametros.nomeProjeto = urlParams.get('nome_projeto');
  parametros.descricaoProjeto = urlParams.get('descricao_projeto');
  parametros.tamanho = urlParams.get('tamanho');
  parametros.agulha = urlParams.get('agulha');
  parametros.fioNome = urlParams.get('fio');
  parametros.amostraPts = urlParams.get('amostra_pts');
  parametros.amostraCarr = urlParams.get('amostra_carr');
  parametros.divisao = urlParams.get('divisao');
  parametros.gola = urlParams.get('gola');
  parametros.manga = urlParams.get('manga');
  parametros.barra = urlParams.get('barra');
  parametros.golaCircunferencia = urlParams.get('gola_circunferencia');
  parametros.golaComprimento = urlParams.get('gola_comprimento');
  parametros.golaDiferenca = urlParams.get('gola_diferenca');
  parametros.mangaCircunferencia = urlParams.get('manga_circunferencia');
  parametros.mangaComprimento = urlParams.get('manga_comprimento');
  parametros.punhoCircunferencia = urlParams.get('punho_circunferencia');
  parametros.mangaComprimentoBarra = urlParams.get('manga_comprimento_barra');
  parametros.corpoCircunferencia = urlParams.get('corpo_circunferencia');
  parametros.corpoComprimento = urlParams.get('corpo_comprimento');
  parametros.corpoComprimentoBarra = urlParams.get('corpo_comprimento_barra');
  parametros.multiploPontos = getMultiploPontos(urlParams.get('barra'));
  parametros.multiploVoltas = getMultiploVoltas(urlParams.get('barra'));
  parametros.cava = getCava(urlParams.get('amostra_pts'));
  parametros.fioCategoria = getFioCategoria(urlParams.get('amostra_pts'));
}
