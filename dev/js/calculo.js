const volumoso = 72.4, medio = 98, leve = 127, fino = 147, superFino = 175;


function calcularReceita(parametros){

  var topDown = new Object();

  topDown.cava = parametros.cava;
  topDown.divisao = parametros.divisao

  topDown.golaPontos = calcularPontos(parametros.amostraPts, parametros.golaCircunferencia, parametros.multiploPontos);
  topDown.golaVoltas = calcularVoltas(parametros.amostraCarr, parametros.golaComprimento, parametros.multiploVoltas);

  //PALA

  topDown.corpoPontos = calcularPontos(parametros.amostraPts, parametros.corpoCircunferencia, parametros.multiploPontos);
  topDown.mangaPontos = calcularPontos(parametros.amostraPts, parametros.mangaCircunferencia, parametros.multiploPontos);
  topDown.raglanFinalPontos = calcularPontosFinalRaglan(topDown.corpoPontos, topDown.mangaPontos, topDown.cava);

  topDown.raglanVoltas = calcularVoltasRaglan(topDown.golaPontos, topDown.raglanFinalPontos);
  topDown.totalAumentosRaglan = topDown.raglanVoltas * 4;

  topDown.raglanFinalPontos = atualizarPontosFinais(topDown.golaPontos, topDown.raglanVoltas);
  topDown.corpoPontos = atualizarPontosCorpo(topDown.raglanFinalPontos, topDown.mangaPontos, topDown.cava);

  console.log(parametros);

  //calculo divisao gola inicio
  topDown.corpoDivisaoPontos = Math.round(topDown.divisao / 2);
  topDown.mangaDivisaoPontos = Math.round(topDown.divisao - topDown.corpoDivisaoPontos);

  topDown.mangaInicioPalaPontos = topDown.mangaPontos - topDown.raglanVoltas - (topDown.mangaDivisaoPontos * 2) - topDown.cava;
  topDown.corpoFrenteInicioPalaPontos = (topDown.corpoPontos / 2) - topDown.raglanVoltas - (topDown.corpoDivisaoPontos * 2) - parametros.cava;
  topDown.corpoCostasPrimeiroPalaPontos = Math.round(topDown.corpoFrenteInicioPalaPontos / 2);
  topDown.corpoCostasSegundoPalaPontos = topDown.corpoFrenteInicioPalaPontos - topDown.corpoCostasPrimeiroPalaPontos;

  console.log(topDown.mangaPontos);
  console.log(topDown.raglanVoltas);
  console.log(topDown.mangaDivisaoPontos);
  console.log(topDown.mangaInicioPalaPontos);
  console.log(topDown.corpoFrenteInicioPalaPontos);
  console.log(topDown.corpoCostasPrimeiroPalaPontos);
  console.log(topDown.corpoCostasSegundoPalaPontos);
  console.log((topDown.divisao * 4) + (topDown.mangaInicioPalaPontos * 2) + topDown.corpoFrenteInicioPalaPontos + topDown.corpoCostasPrimeiroPalaPontos + topDown.corpoCostasSegundoPalaPontos)

  return topDown;

}

function calcularPontosFinalRaglan(ptsCorpo, ptsManga, ptsCava){
  return (ptsCorpo + (2 * ptsManga) - (4 * ptsCava));
}

function calcularCategoriaFio(amostraPts){
  if (amostraPts < 15){
    return "volumoso";
  }else if (amostraPts >= 15 && amostraPts < 18){
    return "médio";
  }else if (amostraPts >= 18 && amostraPts < 21){
    return "leve";
  }else if (amostraPts >= 21 && amostraPts < 25){
    return "fino";
  }else {
    return "super fino";
  }
}

function calcularQtdFio(parametros){
  var area = 2 * (parametros.mangaCircunferencia * parametros.mangaComprimento)
            + (parametros.corpoCircunferencia * parametros.corpoComprimento)
            + (parametros.mangaCircunferencia * (parametros.corpoCircunferencia/2));

  var mEmMetroQuadrado;

  if (parametros.fioCategoria == "volumoso"){
    mEmMetroQuadrado = volumoso;
  }else if (parametros.fioCategoria == "médio"){
    mEmMetroQuadrado = medio;
  }else if (parametros.fioCategoria == "leve"){
    mEmMetroQuadrado = leve;
  }else if (parametros.fioCategoria == "fino"){
    mEmMetroQuadrado = fino;
  }else{
    mEmMetroQuadrado = superFino;
  }
  return Math.round((area / 1000 * mEmMetroQuadrado) * 1.1);
}

function calcularPontos(ptsAmostra, cmCircunferencia, multiplo){

  var pts = ptsAmostra * cmCircunferencia / 10;

  if(multiplo == 4){
    var multiplo4 = Math.round(pts/4);
    return 4 * multiplo4;
  } else {
    return viraPar(pts);
  }
}

function calcularVoltas(amostraCarr, comprimento, multiploVoltas) {
  var voltas = Math.round(amostraCarr * comprimento / 10);

  if (multiploVoltas == 2){
    return viraPar(voltas);
  }
  return voltas;
}

function viraPar(numero) {

  var novoNumero = Math.round(numero)

  if (novoNumero % 2 === 0) {
    return novoNumero;
  } else {
    return (novoNumero + 1);
  }
}

function calcularVoltasRaglan(ptsGola, ptsFinalRaglan){
  return viraPar((ptsFinalRaglan - ptsGola) / 4);
}

function atualizarPontosFinais(ptsGola, nVoltasRaglan){
  return (ptsGola + (nVoltasRaglan * 4));
}

function atualizarPontosCorpo(ptsFinal, ptsManga, ptsCava){
  return ptsFinal - (2 * (ptsManga - ptsCava)) + (2 * ptsCava);
}


// function calcularPala(amostraPts,
//                       multiplo,
//                       cavaPts,
//                       golaCircunferencia,
//                       golaDiferenca,
//                       mangaCircunferencia
//                       corpoCircunferencia){
//     //Gola
//     var golaPts = calcularPontos(amostraPts, golaCircunferencia, multiplo);
//     var golaVoltas = calcularVoltas(amostraCarr, gola_comprimento);
//
//     var mangaPts = calcularPontos(amostraPts, mangaCircunferencia, multiplo);
//     var corpoPts = calcularPontos(amostraPts, corpoCircunferencia, multiplo);
//
//     var palaFinalSemCava = mangaPts + mangaPts + corpoPts - (cava * 4);
//
//     var raglanVoltas = gerarVoltasRaglan(golaPts, palaFinalSemCava);
//     var ptsAumentosRaglan = raglanVoltas * 4;
//
//     palaFinalSemCava = atualizarPtsFinais(golaPts, raglanVoltas);
//     corpoPts = atualizarPtsCorpo(palaFinalSemCava, mangaPts, cavaPts);
//
//     var meuTopDown = new Object();
//
//     meuTopDown.golaPts = golaPts;
//     meuTopDown.golaPts = golaPts;
//
// }
