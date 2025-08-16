var nomeProjeto,
  descricaoProjeto,
  ptsAmostra,
  carrAmostra,
  padraoBarra,
  cmGolaCircunferencia,
  cmGolaComprimento,
  cmCorpoCircunferencia,
  tipoManga,
  cmMangaCircunferencia,
  cmPunhoCircunferencia,
  ptsCava,
  ptsDivisaoRaglan,
  cmCorpoComprimento,
  cmCorpoBarraComprimento,
  cmMangaComprimento,
  cmMangaBarraComprimento;

$( document ).ready(function() {

  var calcular = document.getElementById('calcular');

  validarInputsOnInput();

  calcular.addEventListener("click", function(event){
    event.preventDefault();


    //Validar os inputs antes de seguir com o resultado
    if(validarInputsOnSubmit()){

    //Set variaveis com os resultados do form
    setValoresReceita();
    esconderFormulario();

    //GOLA

    var ptsGola = gerarPtsCircunferencia(ptsAmostra, cmGolaCircunferencia, padraoBarra);
    var vGola = gerarVoltas(carrAmostra, cmGolaComprimento);

    //PALA

    var ptsCorpo = gerarPtsCircunferencia(ptsAmostra, cmCorpoCircunferencia, padraoBarra);
    var ptsManga = gerarPtsCircunferencia(ptsAmostra, cmMangaCircunferencia, padraoBarra);
    var ptsFinalRaglan = gerarNdePtsFinalRaglan(ptsCorpo, ptsManga, ptsCava);
    var vRaglan = gerarVoltasRaglan(ptsGola, ptsFinalRaglan);

    var nAumentosRaglan = vRaglan * 4;

    ptsFinalRaglan = atualizarPtsFinais(ptsGola, vRaglan);
    ptsCorpo = atualizarPtsCorpo(ptsFinalRaglan, ptsManga, ptsCava);

    var ptsMangaInicioPala = ptsManga - vRaglan - ptsCava;
    var ptsCorpoFrenteInicioPala = (ptsCorpo / 2) - vRaglan - ptsCava - (2 * ptsDivisaoRaglan);
    var ptsCorpoCostas1InicioPala = parseInt(ptsCorpoFrenteInicioPala / 2);
    var ptsCorpoCostas2InicioPala = ptsCorpoFrenteInicioPala - ptsCorpoCostas1InicioPala;

    var ptsMangaFinalPala = ptsMangaInicioPala + vRaglan;
    var ptsCorpoFrenteFinalPala = ptsCorpoFrenteInicioPala + vRaglan;
    var ptsCorpoCostas1FinalPala = ptsCorpoCostas1InicioPala + (vRaglan / 2);
    var ptsCorpoCostas2FinalPala = ptsCorpoCostas2InicioPala + (vRaglan / 2);

    montarCabecalhoReceita();
    montarInstrucaoMontagem(ptsGola, vGola);
    montarPreparacaoRaglan(ptsDivisaoRaglan, ptsCorpoFrenteInicioPala, ptsCorpoCostas1InicioPala, ptsCorpoCostas2InicioPala, ptsMangaInicioPala);
    montarInstrucaoRaglan(vRaglan, ptsFinalRaglan, ptsDivisaoRaglan);
    montarDivisaoRaglan(ptsFinalRaglan,
                       ptsMangaFinalPala,
                       ptsCorpoFrenteFinalPala,
                       ptsCorpoCostas1FinalPala,
                       ptsCorpoCostas2FinalPala,
                       ptsDivisaoRaglan,
                       ptsCava);

    //CORPO

    var vCorpo = gerarVoltas(carrAmostra, cmCorpoComprimento);
    var vCorpoBarra = gerarVoltas(carrAmostra, cmCorpoBarraComprimento);

    vCorpo -= vCorpoBarra;

    montarInstrucoesCorpo(ptsCorpo,
                         vCorpo,
                         padraoBarra,
                         vCorpoBarra);


    //MANGA

    var vManga = gerarVoltas(carrAmostra, cmMangaComprimento);
    var vMangaBarra = gerarVoltas(carrAmostra, cmMangaBarraComprimento);

    vManga -= vMangaBarra;

    if (tipoManga == 'manga_curta'){
      montarInstrucoesMangaCurta(ptsManga,
                                ptsCava,
                                vManga,
                                padraoBarra,
                                vMangaBarra);
    // }else if(tipoManga == 'manga_comprida_reta'){

    }

    //
    // var ptsCircunferenciaManga = gerarPtsCircunferencia(ptsAmostra, cmMangaCircunferencia, padraoBarra);
    // var vComprimentoManga = gerarVoltas(carrAmostra, cmMangaComprimento);
    // var vComprimentoBarraManga = gerarVoltas(carrAmostra, cmMangaBarraComprimento);
    //
    // var mangaAjustada = true;
    //
    // var ptsCircunferenciaPunho = gerarPtsCircunferencia(ptsAmostra, cmPunhoCircunferencia, padraoBarra);
    // var totalDiminuicoes = ptsCircunferenciaManga - ptsCircunferenciaPunho;
    // var intervaloDiminuicoesManga = gerarIntervaloDiminuicoesManga(totalDiminuicoes, vComprimentoManga);
    // var vAntesDiminuicoesManga = vComprimentoManga - (intervaloDiminuicoesManga * totalDiminuicoes);
    //
    //

    //
    //
    //   $('.resultado').append(gerarInstrucaoCorpo(ptsCorpo, vComprimentoCorpo, padraoBarra, vComprimentoBarraCorpo));
    //
    //
    //   if (mangaAjustada){
    //     $('.resultado').append(gerarInstrucoesMangasAjustadas(ptsCircunferenciaManga, ptsCava, vComprimentoManga, padraoBarra, vComprimentoBarraManga, intervaloDiminuicoesManga, totalDiminuicoes, vAntesDiminuicoesManga, ptsCircunferenciaPunho));
    //   }else{
    //     $('.resultado').append(gerarInstrucoesMangasRetas(ptsCircunferenciaManga, ptsCava, vComprimentoManga, padraoBarra, vComprimentoBarraManga));
    //   }
      $('.resultado').append(consideracoesFinais());
    }

  });


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

  //



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

function gerarVoltas(carrAmostra, cmComprimento) {
  return parseInt(carrAmostra * cmComprimento / 10);
}

function gerarNdePtsFinalRaglan(ptsCorpo, ptsManga, ptsCava){
  return (ptsCorpo + (2 * ptsManga) - (4 * ptsCava));
}

function gerarVoltasRaglan(ptsGola, ptsFinalRaglan){
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

function esconderFormulario(){
  var form = document.getElementById('formulario');
  form.style.display = 'none';
}

function setValoresReceita(){

  //CABECALHO
  nomeProjeto = getNomeProjeto();
  descricaoProjeto = getDescricaoProjeto();

  //AMOSTRA
  ptsAmostra = getAmostraPts();
  carrAmostra = getAmostraCarr();

  padraoBarra = getEstiloBarra();

  //GOLA
  cmGolaCircunferencia = getGolaCircunferencia();
  cmGolaComprimento = getGolaComprimento();

  //PALA
  ptsCava = getCava(ptsAmostra);
  ptsDivisaoRaglan = getPtsDivisao();

  //CORPO
  cmCorpoCircunferencia = getCmCorpoCircunferencia();
  cmCorpoComprimento = getCmCorpoComprimento();
  cmCorpoBarraComprimento = getCmCorpoBarraComprimento();

  //MANGA
  tipoManga = getTipoManga();
  cmMangaCircunferencia = getCmMangaCircunferencia();
  cmPunhoCircunferencia = getPunhoCircunferencia();
  cmMangaComprimento = getCmMangaComprimento()
  cmMangaBarraComprimento = getCmMangaBarraComprimento();

}

function montarCabecalhoReceita(){
  $('.resultado').append(gerarTitulo(nomeProjeto, descricaoProjeto));
  $('.resultado').append(gerarAmostra(ptsAmostra, carrAmostra));
  $('.resultado').append(gerarLegenda());
}

function montarInstrucaoMontagem(ptsGola, vGola){
  $('.resultado').append(gerarInstrucaoTitulo());
  $('.resultado').append(gerarInstrucaoMontagem(ptsGola));
  $('.resultado').append(gerarInstrucaoGola(padraoBarra, vGola));
}

function montarPreparacaoRaglan(ptsDivisaoRaglan, ptsFrente, ptsCostas1, ptsCostas2, ptsManga){
  $('.resultado').append(gerarInstrucaoPreparacaoRaglan(ptsDivisaoRaglan, ptsFrente, ptsCostas1, ptsCostas2, ptsManga));
}

function montarInstrucaoRaglan(vRaglan, ptsFinalRaglan, ptsDivisaoRaglan){
  $('.resultado').append(gerarInstrucaoRaglan(vRaglan, ptsFinalRaglan, ptsDivisaoRaglan));
}

function montarDivisaoRaglan(ptsFinalRaglan,
                             ptsMangaFinal,
                             ptsCorpoFrenteFinal,
                             ptsCorpoCostas1Final,
                             ptsCorpoCostas2Final,
                             ptsDivisaoRaglan,
                             ptsCava){
  $('.resultado').append(gerarInstrucaoDivisaoRaglan(ptsFinalRaglan,
                                                     ptsMangaFinal,
                                                     ptsCorpoFrenteFinal,
                                                     ptsCorpoCostas1Final,
                                                     ptsCorpoCostas2Final,
                                                     ptsDivisaoRaglan,
                                                     ptsCava));
}

function montarInstrucoesCorpo(ptsCorpo,
                               vComprimentoCorpo,
                               padraoBarra,
                               vComprimentoBarraCorpo){
  $('.resultado').append(gerarInstrucaoCorpo(ptsCorpo,
                                             vComprimentoCorpo,
                                             padraoBarra,
                                             vComprimentoBarraCorpo));
}

function montarInstrucoesMangaCurta(ptsManga,
                                    ptsCava,
                                    vComprimentoManga,
                                    padraoBarra,
                                    vComprimentoBarraManga){
  $('.resultado').append(gerarInstrucoesMangasCurta(ptsManga,
                                      ptsCava,
                                      vComprimentoManga,
                                      padraoBarra,
                                      vComprimentoBarraManga));
}
