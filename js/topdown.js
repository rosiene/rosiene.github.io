

$( document ).ready(function() {

  var calcular = document.getElementById('calcular');

  validarInputsOnInput();

  calcular.addEventListener("click", function(event){
    event.preventDefault();
    console.log(validarInputsOnSubmit());

  });


  // var calcularElemento = document.getElementById('calcular');
  //
  //
  // if(calcularElemento != null){
  //   calcularElemento.addEventListener("click", function(event){
  //     event.preventDefault();
  //     console.log("click");
  //     //esconderFormulario();
  //
  //   });
  // }

  // const urlParams = new URLSearchParams(window.location.search);
  // var calcularElement = document.getElementById('calcular');
  //
  // var nomeProjeto = getNomeProjeto(urlParams);
  // console.log(nomeProjeto);
  //
  // if(nomeProjeto != '' && nomeProjeto != null){
  //
  //   console.log(urlParams);
  //
  //   validacaoFormulario();
  //   esconderFormulario();
  //
  //
  //   var descricaoProjeto = getDescricaoProjeto(urlParams);
  //
  //
  //   var ptsAmostra = getAmostraPts(urlParams);
  //   var carrAmostra = getAmostraCarr(urlParams);
  //   var padraoBarra = 'barra1';
  //
  //   // GOLA
  //   var cmCircunferenciaGola = getGolaCircunferencia(urlParams);
  //   var cmComprimentoGola = getGolaComprimento(urlParams);
  //   var cmGolaAjustada = getGolaComprimentoDiferenca(urlParams)
  //
  //   // GOLA CÁLCULOS
  //   var ptsGola = gerarPtsCircunferencia(ptsAmostra, cmCircunferenciaGola, padraoBarra);
  //   var nVoltasGola = gerarNdeVoltas(carrAmostra, cmComprimentoGola);
  //   var carrGolaAjustada = viraPar(gerarNdeVoltas(carrAmostra, cmGolaAjustada));
  //
  //   //CORPO
  //   var cmCorpoCircunferencia = getCmCorpoCircunferencia(urlParams);
  //   var cmCorpoComprimento = getCmCorpoComprimento(urlParams);
  //   var cmCorpoComprimentoBarra = getCmCorpoComprimentoBarra(urlParams);
  //
  //   // CORPO CÁLCULO
  //   var ptsCorpo = gerarPtsCircunferencia(ptsAmostra, cmCorpoCircunferencia, padraoBarra);
  //   var vComprimentoCorpo = gerarNdeVoltas(carrAmostra, cmCorpoComprimento);
  //   var vComprimentoBarraCorpo = gerarNdeVoltas(carrAmostra, cmCorpoComprimentoBarra);
  //
  //
  //   //MANGA
  //   var cmMangaCircunferencia = getCmMangaCircunferencia(urlParams);
  //   var cmMangaComprimento = getCmMangaComprimento(urlParams);
  //   var cmMangaComprimentoBarra = getCmMangaComprimentoBarra(urlParams);
  //   var cmCircunferenciaPunho = 19;
  //
  //   var ptsCircunferenciaManga = gerarPtsCircunferencia(ptsAmostra, cmMangaCircunferencia, padraoBarra);
  //   var vComprimentoManga = gerarNdeVoltas(carrAmostra, cmMangaComprimento);
  //   var vComprimentoBarraManga = gerarNdeVoltas(carrAmostra, cmMangaComprimentoBarra);
  //
  //   var mangaAjustada = true;
  //
  //   var ptsCircunferenciaPunho = gerarPtsCircunferencia(ptsAmostra, cmCircunferenciaPunho, padraoBarra);
  //   var totalDiminuicoes = ptsCircunferenciaManga - ptsCircunferenciaPunho;
  //   var intervaloDiminuicoesManga = gerarIntervaloDiminuicoesManga(totalDiminuicoes, vComprimentoManga);
  //   var vAntesDiminuicoesManga = vComprimentoManga - (intervaloDiminuicoesManga * totalDiminuicoes);
  //
  //     //PALA
  //     var ptsCava = getCava(ptsAmostra);
  //
  //     var ptsFinalRaglan = gerarNdePtsFinalRaglan(ptsCorpo, ptsCircunferenciaManga, ptsCava);
  //     var nVoltasRaglan = gerarNdeVoltasRaglan(ptsGola, ptsFinalRaglan);
  //     var nAumentosRaglan = nVoltasRaglan * 4;
  //
  //     ptsFinalRaglan = atualizarPtsFinais(ptsGola, nVoltasRaglan);
  //     ptsCorpo = atualizarPtsCorpo(ptsFinalRaglan, ptsCircunferenciaManga, ptsCava);
  //
  //     var ptsDivisaoRaglan = 1;
  //     var ptsMangaInicioPala = ptsCircunferenciaManga - nVoltasRaglan - ptsCava;
  //     var ptsCorpoFrenteInicioPala = (ptsCorpo / 2) - nVoltasRaglan - ptsCava - (2 * ptsDivisaoRaglan);
  //     var ptsCorpoCostas1InicioPala = parseInt(ptsCorpoFrenteInicioPala / 2);
  //     var ptsCorpoCostas2InicioPala = ptsCorpoFrenteInicioPala - ptsCorpoCostas1InicioPala;
  //
  //     var ptsMangaFinalPala = ptsMangaInicioPala + nVoltasRaglan;
  //     var ptsCorpoFrenteFinalPala = ptsCorpoFrenteInicioPala + nVoltasRaglan;
  //     var ptsCorpoCostas1FinalPala = ptsCorpoCostas1InicioPala + (nVoltasRaglan / 2);
  //     var ptsCorpoCostas2FinalPala = ptsCorpoCostas2InicioPala + (nVoltasRaglan / 2);
  //
  //
  //     //GOLA AJUSTADA
  //
  //     var ptsCadaLateralFrenteInicio = parseInt(ptsCorpoFrenteInicioPala / 3);
  //     var ptsCadaLateralFrenteFinalCarrEncurtada = gerarPtsCadaLateralFrenteFinalCarrEncurtada(ptsCadaLateralFrenteInicio, carrGolaAjustada);
  //     var interavaloPtsCarrEncurtada = gerarIntervaloPtsCarrEncurtada(carrGolaAjustada, ptsCadaLateralFrenteFinalCarrEncurtada);
  //     ptsCadaLateralFrente = (carrGolaAjustada / 2) * interavaloPtsCarrEncurtada;
  //     var ptsCentralFrente = ptsCorpoFrenteInicioPala - (2 * ptsCadaLateralFrenteInicio);
  //
  //     console.log('carrGolaAjustada ' + carrGolaAjustada);
  //     console.log('ptsCorpoFrenteInicioPala ' + ptsCorpoFrenteInicioPala);
  //     console.log('ptsCadaLateralFrenteFinalCarrEncurtada ' + ptsCadaLateralFrenteFinalCarrEncurtada);
  //     console.log('interavaloPtsCarrEncurtada ' + interavaloPtsCarrEncurtada);
  //
  //
  //     $('.resultado').empty();
  //     $('.resultado').append(gerarTitulo(nomeProjeto, descricaoProjeto));
  //     $('.resultado').append(gerarAmostra(ptsAmostra, carrAmostra));
  //     $('.resultado').append(gerarLegenda());
  //     $('.resultado').append(gerarInstrucao());
  //     $('.resultado').append(gerarInstrucaoMontagem(ptsGola));
  //     $('.resultado').append(gerarInstrucaoGola(padraoBarra, nVoltasGola));
  //
  //     if (cmGolaAjustada > 0){
  //       $('.resultado').append(gerarInstrucoesPreparacaoRaglanComCarrEncurtada(ptsDivisaoRaglan,
  //                                                                               ptsCentralFrente,
  //                                                                               ptsCadaLateralFrente,
  //                                                                               ptsCorpoCostas1InicioPala,
  //                                                                               ptsCorpoCostas2InicioPala,
  //                                                                               ptsMangaInicioPala));
  //     }else{
  //       $('.resultado').append(gerarInstrucaoPreparacaoRaglan(ptsDivisaoRaglan, ptsCorpoFrenteInicioPala, ptsCorpoCostas1InicioPala, ptsCorpoCostas2InicioPala, ptsMangaInicioPala));
  //     }
  //     $('.resultado').append(gerarInstrucaoRaglan(nVoltasRaglan, ptsFinalRaglan, ptsDivisaoRaglan));
  //     $('.resultado').append(gerarInstrucaoDivisaoRaglan(ptsFinalRaglan, ptsMangaFinalPala, ptsCorpoFrenteFinalPala, ptsCorpoCostas1FinalPala, ptsCorpoCostas2FinalPala, ptsDivisaoRaglan, ptsCava));
  //     $('.resultado').append(gerarInstrucaoCorpo(ptsCorpo, vComprimentoCorpo, padraoBarra, vComprimentoBarraCorpo));
  //
  //
  //     if (mangaAjustada){
  //       $('.resultado').append(gerarInstrucoesMangasAjustadas(ptsCircunferenciaManga, ptsCava, vComprimentoManga, padraoBarra, vComprimentoBarraManga, intervaloDiminuicoesManga, totalDiminuicoes, vAntesDiminuicoesManga, ptsCircunferenciaPunho));
  //     }else{
  //       $('.resultado').append(gerarInstrucoesMangasRetas(ptsCircunferenciaManga, ptsCava, vComprimentoManga, padraoBarra, vComprimentoBarraManga));
  //     }
  //     $('.resultado').append(consideracoesFinais());


});


function gerarPtsCircunferencia(ptsAmostra, cmCircunferencia, padraoBarra){

  var pts = ptsAmostra * cmCircunferencia / 10;

  if (padraoBarra == 'barra1'){
    return viraPar(pts);
  } else if(padraoBarra == 'barra2'){
    var multiplo4 = parseInt(pts/4);
    return 4 * multiplo4;
  } else {
    return 'Barra não informada';
  }
}

function gerarNdeVoltas(carrAmostra, cmComprimento) {
  return parseInt(carrAmostra * cmComprimento / 10);
}

function gerarNdePtsFinalRaglan(ptsCorpo, ptsManga, ptsCava){
  return (ptsCorpo + (2 * ptsManga) - (4 * ptsCava));
}

function gerarNdeVoltasRaglan(ptsGola, ptsFinalRaglan){
  return viraPar((ptsFinalRaglan - ptsGola) / 4);
}

function atualizarPtsFinais(ptsGola, nVoltasRaglan){
  return (ptsGola + (nVoltasRaglan * 4));
}

function atualizarPtsCorpo(ptsFinal, ptsManga, ptsCava){
  return ptsFinal - (2 * (ptsManga - ptsCava)) + (2 * ptsCava);
}

function gerarIntervaloDiminuicoesManga(totalDiminuicoes, vComprimentoManga){
  return parseInt(vComprimentoManga/totalDiminuicoes);
}

function gerarIntervaloPtsCarrEncurtada(carrGolaAjustada, ptsCadaLateralFrente){
  return parseInt(ptsCadaLateralFrente / (carrGolaAjustada / 2));
}

function gerarPtsCadaLateralFrenteFinalCarrEncurtada(ptsCadaLateralFrenteInicio, carrGolaAjustada){
  return (ptsCadaLateralFrenteInicio + (carrGolaAjustada/2) - 1);
}

function viraPar(numero) {

  var novoNumero = parseInt(numero)

  if (novoNumero % 2 === 0) {
    return novoNumero;
  } else {
    return (novoNumero + 1);
  }
}

function getNomeProjeto(url){
  return url.get('nome_projeto');
}

function getDescricaoProjeto(url){
  return url.get('descricao_projeto');
}

function getAmostraPts(url){
  return url.get('pts_amostra');
}

function getAmostraCarr(url){
  return url.get('carr_amostra');
}

function getGolaCircunferencia(url){
  return url.get('cm_gola');
}

function getGolaComprimento(url){
  return url.get('cm_comp_gola');
}

function getGolaComprimentoDiferenca(url){
  return url.get('cm_comp_dif_gola');
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

function getCmCorpoCircunferencia(url){
  return url.get('cm_corpo_circunferencia');
}

function getCmCorpoComprimento(url){
  return url.get('cm_corpo_comprimento');
}

function getCmCorpoComprimentoBarra(url){
  return url.get('cm_corpo_comprimento_barra');
}

function getCmMangaCircunferencia(url){
  return url.get('cm_manga_circunferencia');
}

function getCmMangaComprimento(url){
  return url.get('cm_manga_comprimento');
}

function getCmMangaComprimentoBarra(url){
  return url.get('cm_manga_comprimento_barra');
}

function atualizarTipoManga(radio){
  var punho = document.getElementById('punho');
  var punhoInput = document.getElementById('cmPunhoCircunferencia');
  if(radio.value == 'manga_curta'){
    punho.style.display = 'none';
    punhoInput.attributes.required = false;
  }else{
    punho.style.display = 'block';
    punhoInput.attributes.required = true;
  }
}

function esconderFormulario(){
  var form = document.getElementById('formulario');
  form.style.display = 'none';
}
