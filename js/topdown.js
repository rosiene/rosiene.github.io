var nomeProjeto,
  descricaoProjeto,
  ptsAmostra,
  carrAmostra,
  padraoBarra,
  ptsGola,
  nVoltasGola;

$( document ).ready(function() {

  var calcular = document.getElementById('calcular');

  validarInputsOnInput();

  calcular.addEventListener("click", function(event){
    event.preventDefault();

    //Validar os inputs antes de seguir com o resultado
    //if(validarInputsOnSubmit()){
      console.log("click");

      esconderFormulario();

      setValoresReceita();

      montarCabecalhoReceita();
      montarInstrucaoMontagem();

    //}

  });

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

  //

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

function setValoresReceita(){
  nomeProjeto = getNomeProjeto();
  descricaoProjeto = getDescricaoProjeto();
  ptsAmostra = getAmostraPts();
  carrAmostra = getAmostraCarr();
  padraoBarra = getEstiloBarra();
  cmCompGola = getGolaComprimento();
  ptsGola = gerarPtsCircunferencia(ptsAmostra, getGolaCircunferencia(), getEstiloBarra());
  nVoltasGola = gerarNdeVoltas(carrAmostra, cmCompGola);

}

function montarCabecalhoReceita(){
  $('.resultado').append(gerarTitulo(nomeProjeto, descricaoProjeto));
  $('.resultado').append(gerarAmostra(ptsAmostra, carrAmostra));
  $('.resultado').append(gerarLegenda());
}

function montarInstrucaoMontagem(){
  $('.resultado').append(gerarInstrucaoTitulo());
  $('.resultado').append(gerarInstrucaoMontagem(ptsGola));
  $('.resultado').append(gerarInstrucaoGola(padraoBarra, nVoltasGola));
}
