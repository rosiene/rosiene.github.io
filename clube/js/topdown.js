var nomeProjeto,
  descricaoProjeto,
  ptsAmostra,
  carrAmostra,
  padraoBarra,
  cmGolaCircunferencia,
  cmGolaComprimento,
  cmGolaComprimentoDiferenca,
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

// const { jsPDF } = window.jspdf;

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

      montarCabecalhoReceita();

      //GOLA

      var ptsGola = gerarPontos(ptsAmostra, cmGolaCircunferencia, padraoBarra);
      var vGola = gerarVoltas(carrAmostra, cmGolaComprimento);

      //PALA

      var ptsCorpo = gerarPontos(ptsAmostra, cmCorpoCircunferencia, padraoBarra);
      var ptsManga = gerarPontos(ptsAmostra, cmMangaCircunferencia, padraoBarra);
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

      montarInstrucaoMontagem(ptsGola, vGola);

      // VERIFICA SE TEM CARREIRA ENCURTADA NA GOLA
      if (cmGolaComprimentoDiferenca == 0){

        montarPreparacaoRaglan(ptsDivisaoRaglan, ptsCorpoFrenteInicioPala, ptsCorpoCostas1InicioPala, ptsCorpoCostas2InicioPala, ptsMangaInicioPala);
        montarInstrucaoRaglan(vRaglan, ptsFinalRaglan, ptsDivisaoRaglan);
        montarDivisaoRaglan(ptsFinalRaglan,
                           ptsMangaFinalPala,
                           ptsCorpoFrenteFinalPala,
                           ptsCorpoCostas1FinalPala,
                           ptsCorpoCostas2FinalPala,
                           ptsDivisaoRaglan,
                           ptsCava);
      }else{

        var vCarrEncurtada = gerarVoltas(carrAmostra, cmGolaComprimentoDiferenca);

        var ptsFrenteLateralInicio = parseInt(ptsCorpoFrenteInicioPala / 3);

        var ptsFrenteLateralFinalCarrEncurtada = gerarptsFrenteLateralFinalCarrEncurtada(ptsFrenteLateralInicio, vCarrEncurtada);
        var interavaloPtsCarrEncurtada = gerarIntervaloPtsCarrEncurtada(vCarrEncurtada, ptsFrenteLateralFinalCarrEncurtada);
        ptsFrenteLateral = (vCarrEncurtada / 2) * interavaloPtsCarrEncurtada;
        var ptsFrenteCentral = ptsCorpoFrenteInicioPala - (2 * ptsFrenteLateral);

        $('.resultado').append(gerarInstrucoesPreparacaoRaglanComCarrEncurtada(ptsDivisaoRaglan,
                                                ptsFrenteCentral,
                                                ptsFrenteLateral,
                                                ptsCorpoCostas1InicioPala,
                                                ptsCorpoCostas2InicioPala,
                                                ptsMangaInicioPala));

        $('.resultado').append(gerarInstrucaoCarrEncurtada1Carr(ptsDivisaoRaglan));
        $('.resultado').append(gerarInstrucaoCarrEncurtadaMeio(ptsDivisaoRaglan, vCarrEncurtada ,interavaloPtsCarrEncurtada));
        $('.resultado').append(gerarInstrucaoCarrEncurtadaFinal(ptsDivisaoRaglan, vCarrEncurtada ,interavaloPtsCarrEncurtada));

        var novoVRaglan = vRaglan - (vCarrEncurtada - 2);

        montarInstrucaoRaglan(novoVRaglan, ptsFinalRaglan, ptsDivisaoRaglan);
        montarDivisaoRaglan(ptsFinalRaglan,
                           ptsMangaFinalPala,
                           ptsCorpoFrenteFinalPala,
                           ptsCorpoCostas1FinalPala,
                           ptsCorpoCostas2FinalPala,
                           ptsDivisaoRaglan,
                           ptsCava);
      }


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
      }else{

        var ptsPunho = gerarPontos(ptsAmostra, cmPunhoCircunferencia, padraoBarra);
        var totalDiminuicoes = ptsManga - ptsPunho;
        var intervaloDiminuicoesManga = gerarIntervaloDiminuicoesManga(totalDiminuicoes, vManga);
        var vAntesDiminuicoesManga = vManga - (intervaloDiminuicoesManga * totalDiminuicoes);

        montarInstrucoesMangasAjustadas(ptsManga,
                                        ptsCava,
                                        vManga,
                                        padraoBarra,
                                        vMangaBarra,
                                        intervaloDiminuicoesManga,
                                        totalDiminuicoes,
                                        vAntesDiminuicoesManga,
                                        ptsPunho);
      }

      $('.resultado').append(consideracoesFinais());
      $('html,body').scrollTop(0);

      gerarPDF();
    }

  });

});


function gerarPontos(ptsAmostra, cmCircunferencia, padraoBarra){

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

function gerarIntervaloPtsCarrEncurtada(vCarrEncurtada, ptsFrenteLateral){
  return parseInt(ptsFrenteLateral / (vCarrEncurtada / 2));
}

function gerarptsFrenteLateralFinalCarrEncurtada(ptsFrenteLateralInicio, vCarrEncurtada){
  return (ptsFrenteLateralInicio + (vCarrEncurtada/2) - 1);
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
  cmGolaComprimentoDiferenca = getGolaComprimentoDiferenca();

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
  var titulo = gerarTitulo(nomeProjeto, descricaoProjeto);

  $('.resultado').append(titulo);
  $('.resultado').append(gerarAmostra(ptsAmostra, carrAmostra));
  $('.resultado').append(gerarLegenda());

  // doc.text(titulo, 10, 10);
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

function montarInstrucoesMangasAjustadas(ptsManga,
                                ptsCava,
                                vManga,
                                padraoBarra,
                                vMangaBarra,
                                intervaloDiminuicoesManga,
                                totalDiminuicoes,
                                vAntesDiminuicoesManga,
                                ptsPunho){
  $('.resultado').append(gerarInstrucoesMangasAjustadas(ptsManga,
                                  ptsCava,
                                  vManga,
                                  padraoBarra,
                                  vMangaBarra,
                                  intervaloDiminuicoesManga,
                                  totalDiminuicoes,
                                  vAntesDiminuicoesManga,
                                  ptsPunho));
}

function gerarPDF(){

  var element = document.getElementById('resultado');

  opt = {
    margin:       1,
    filename:     'receita.pdf',
    image:        { type: 'png', quality: 1 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
}
