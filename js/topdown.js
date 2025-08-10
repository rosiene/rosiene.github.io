

$( document ).ready(function() {

  var calcularElement = document.getElementById('calcular');

  if(calcularElement != null){

    calcularElement.addEventListener("click", function(event){
      event.preventDefault();

      console.log("iniciado");

      var nomePeca = "Meu Primeiro Suéter Sob Medida";

      var ptsAmostra = 15;
      var carrAmostra = 19;
      var padraoBarra = 'barra1';

      //Gola
      var cmCircunferenciaGola = 60;
      var cmComprimentoGola = 4;
      var ptsGola = gerarPtsCircunferencia(ptsAmostra, cmCircunferenciaGola, padraoBarra);
      var nVoltasGola = gerarNdeVoltas(carrAmostra, cmComprimentoGola);

      //Corpo
      var cmCircunferencisCorpo = 99;
      var ptsCorpo = gerarPtsCircunferencia(ptsAmostra, cmCircunferencisCorpo, padraoBarra);
      var cmComprimentoCorpo = 30;
      var cmComprimentoBarraCorpo = 10;
      var vComprimentoCorpo = gerarNdeVoltas(carrAmostra, cmComprimentoCorpo);
      var vComprimentoBarraCorpo = gerarNdeVoltas(carrAmostra, cmComprimentoBarraCorpo);

      //Manga
      var cmCircunferenciaManga = 32;
      var ptsCircunferenciaManga = gerarPtsCircunferencia(ptsAmostra, cmCircunferenciaManga, padraoBarra);
      var cmComprimentoManga = 40;
      var cmComprimentoBarraManga = 8;
      var cmCircunferenciaPunho = 19;

      var vComprimentoManga = gerarNdeVoltas(carrAmostra, cmComprimentoManga);
      var vComprimentoBarraManga = gerarNdeVoltas(carrAmostra, cmComprimentoBarraManga);

      var mangaAjustada = true;

      var ptsCircunferenciaPunho = gerarPtsCircunferencia(ptsAmostra, cmCircunferenciaPunho, padraoBarra);
      var totalDiminuicoes = ptsCircunferenciaManga - ptsCircunferenciaPunho;
      var intervaloDiminuicoesManga = gerarIntervaloDiminuicoesManga(totalDiminuicoes, vComprimentoManga);
      var vAntesDiminuicoesManga = vComprimentoManga - (intervaloDiminuicoesManga * totalDiminuicoes);

      //PALA
      var ptsCava = 4;

      var ptsFinalRaglan = gerarNdePtsFinalRaglan(ptsCorpo, ptsCircunferenciaManga, ptsCava);
      var nVoltasRaglan = gerarNdeVoltasRaglan(ptsGola, ptsFinalRaglan);
      var nAumentosRaglan = nVoltasRaglan * 4;

      ptsFinalRaglan = atualizarPtsFinais(ptsGola, nVoltasRaglan);
      ptsCorpo = atualizarPtsCorpo(ptsFinalRaglan, ptsCircunferenciaManga, ptsCava);

      var ptsDivisaoRaglan = 2;
      var ptsMangaInicioPala = ptsCircunferenciaManga - nVoltasRaglan - ptsCava;
      var ptsCorpoFrenteInicioPala = (ptsCorpo / 2) - nVoltasRaglan - ptsCava - (2 * ptsDivisaoRaglan);
      var ptsCorpoCostas1InicioPala = parseInt(ptsCorpoFrenteInicioPala / 2);
      var ptsCorpoCostas2InicioPala = ptsCorpoFrenteInicioPala - ptsCorpoCostas1InicioPala;

      var ptsMangaFinalPala = ptsMangaInicioPala + nVoltasRaglan;
      var ptsCorpoFrenteFinalPala = ptsCorpoFrenteInicioPala + nVoltasRaglan;
      var ptsCorpoCostas1FinalPala = ptsCorpoCostas1InicioPala + (nVoltasRaglan / 2);
      var ptsCorpoCostas2FinalPala = ptsCorpoCostas2InicioPala + (nVoltasRaglan / 2);


      //GOLA AJUSTADA
      var cmGolaAjustada = 5;
      var carrGolaAjustada = viraPar(gerarNdeVoltas(carrAmostra, cmGolaAjustada));

      var ptsCadaLateralFrenteInicio = parseInt(ptsCorpoFrenteInicioPala / 3);
      var ptsCadaLateralFrenteFinalCarrEncurtada = gerarPtsCadaLateralFrenteFinalCarrEncurtada(ptsCadaLateralFrenteInicio, carrGolaAjustada);
      var interavaloPtsCarrEncurtada = gerarIntervaloPtsCarrEncurtada(carrGolaAjustada, ptsCadaLateralFrenteFinalCarrEncurtada);
      ptsCadaLateralFrente = (carrGolaAjustada / 2) * interavaloPtsCarrEncurtada;
      var ptsCentralFrente = ptsCorpoFrenteInicioPala - (2 * ptsCadaLateralFrenteInicio);

      console.log('carrGolaAjustada ' + carrGolaAjustada);
      console.log('ptsCorpoFrenteInicioPala ' + ptsCorpoFrenteInicioPala);
      console.log('ptsCadaLateralFrenteFinalCarrEncurtada ' + ptsCadaLateralFrenteFinalCarrEncurtada);
      console.log('interavaloPtsCarrEncurtada ' + interavaloPtsCarrEncurtada);


      // $('.resultado').empty();
      // $('.resultado').append(gerarTitulo(nomePeca));
      // $('.resultado').append("<br/>");
      // $('.resultado').append(gerarAmostra(ptsAmostra, carrAmostra));
      // $('.resultado').append("<br/>");
      // $('.resultado').append(gerarLegenda());
      // $('.resultado').append("<br/>");
      // $('.resultado').append(gerarInstrucao());
      // $('.resultado').append("<br/>");
      // $('.resultado').append(gerarInstrucaoMontagem(ptsGola));
      // $('.resultado').append(gerarInstrucaoGola(padraoBarra, nVoltasGola));

      if (cmGolaAjustada > 0){
        $('.resultado').append(gerarInstrucoesPreparacaoRaglanComCarrEncurtada(ptsDivisaoRaglan,
                                                                                ptsCentralFrente,
                                                                                ptsCadaLateralFrente,
                                                                                ptsCorpoCostas1InicioPala,
                                                                                ptsCorpoCostas2InicioPala,
                                                                                ptsMangaInicioPala));
      }else{
        $('.resultado').append(gerarInstrucaoPreparacaoRaglan(ptsDivisaoRaglan, ptsCorpoFrenteInicioPala, ptsCorpoCostas1InicioPala, ptsCorpoCostas2InicioPala, ptsMangaInicioPala));
      }
      // $('.resultado').append(gerarInstrucaoRaglan(nVoltasRaglan, ptsFinalRaglan, ptsDivisaoRaglan));
      // $('.resultado').append(gerarInstrucaoDivisaoRaglan(ptsFinalRaglan, ptsMangaFinalPala, ptsCorpoFrenteFinalPala, ptsCorpoCostas1FinalPala, ptsCorpoCostas2FinalPala, ptsDivisaoRaglan, ptsCava));
      // $('.resultado').append(gerarInstrucaoCorpo(ptsCorpo, vComprimentoCorpo, padraoBarra, vComprimentoBarraCorpo));
      //
      //
      // if (mangaAjustada){
      //   $('.resultado').append(gerarInstrucoesMangasAjustadas(ptsCircunferenciaManga, ptsCava, vComprimentoManga, padraoBarra, vComprimentoBarraManga, intervaloDiminuicoesManga, totalDiminuicoes, vAntesDiminuicoesManga, ptsCircunferenciaPunho));
      // }else{
      //   $('.resultado').append(gerarInstrucoesMangasRetas(ptsCircunferenciaManga, ptsCava, vComprimentoManga, padraoBarra, vComprimentoBarraManga));
      // }
      // $('.resultado').append("<br/>");

    });
  }
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
