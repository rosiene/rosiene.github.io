const volumoso = 72.4, medio = 98, leve = 127, fino = 147, superFino = 175;


function calcularReceita(parametros){

  var topDown = new Object();

  topDown.golaPontos = calcularPontos(parametros.amostraPts, parametros.golaCircunferencia, parametros.multiploPontos);
  topDown.golaVoltas = calcularVoltas(parametros.amostraCarr, parametros.golaComprimento, parametros.multiploVoltas);

  //PALA

  var corpoPontos = calcularPontos(parametros.amostraPts, parametros.corpoCircunferencia, parametros.multiploPontos);
  var mangaPontos = calcularPontos(parametros.amostraPts, parametros.mangaCircunferencia, parametros.multiploPontos);
  var raglanFinalPontos = calcularPontosFinalRaglan(corpoPontos, mangaPontos, parametros.cava);

  //var raglanVoltas = calcularVoltasRaglan(golaPontos, raglanFinalPontos);

  //var totalAumentosRaglan = raglanVoltas * 4;

  console.log(parametros);

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

function atualizarPtsFinais(ptsGola, nVoltasRaglan){
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
