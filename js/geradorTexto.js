var identacaoInicio = "<div style='margin: 12px 0px 12px 28px'>"
var identacaoFinal = "</div>";

function gerarTitulo(titulo){
  return "<h1>"+titulo+"</h1>";
}

function gerarAmostra(ptsAmostra, carrAmostra){
  return "<b>AMOSTRA:</b> 10 cm x 10 cm = "
    + ptsAmostra + " pts e "
    + carrAmostra + " v./carr. no ponto malha.<br/>";
}

function gerarLegenda(){
  return "<b>ABREVIAÇÕES: </b></br>"
    +"</br>"
    +"<b>[marc]</b> posicionar ou mover o marcador, "
    +"<b>1sf</b> passar 1 ponto sem fazer, "
    +"<b>2jm</b> 2 pontos juntos em meia, "
    +"<b>aumD</b> aumento em meia direcional para a direta, "
    +"<b>aumE</b> aumento em meia direcional para a esquerda, "
    +"<b>carr.</b> carreira(s), "
    +"<b>laç</b> laçada, "
    +"<b>m</b> meia, "
    +"<b>ms</b> mate simples, "
    +"<b>pt(s)</b> ponto(s), "
    +"<b>t</b> tricô.</br>";
}

function gerarInstrucao(){
  return "<b>INSTRUÇÕES: </b></br>";
}

function gerarInstrucaoMontagem(ptsGola){
  return "Montar " + (ptsGola + 1) + " pts na agulha circular, derrubar "
    + "o último ponto colocado na agulha em cima do primeiro pt fechando "
    + " o círculo de pts, ficando assim com " + ptsGola + " pts."
    + " Posicionei o marc. A para marcar o início e final de cada volta.</br>";
}

function gerarInstrucaoGola(padraoBarra, nVoltasGola){
  if (padraoBarra = 'barra1') {
    return "<b class='sessao_peca'>Gola:</b></br>"
      + "Tecer por " + nVoltasGola + " v. no ponto barra 1/1:</br>"
      + identacaoInicio
      + "<b>1ª até " + nVoltasGola + "ª v.:</b> * 1m, 1t, *, rep. de * a* até o final.</br>"
      + identacaoFinal;
  } else {
    return "Tecer por " + nVoltasGola + " v. no ponto barra 2/2:</br>"
      + identacaoInicio
      + "<b>1ª até " + nVoltasGola + "ª v.:</b> * 2m, 2t, *, rep. de * a* até o final.</br>"
      + identacaoFinal;
  }
}

function gerarInstrucaoPreparacaoRaglan(ptsDivisao,
                                        ptsFrente,
                                        ptsCostas1,
                                        ptsCostas2,
                                        ptsManga){
  return "<b class='sessao_peca'>Pala:</b></br>"
    + "Tecer a carreira de preparação fazendo a divisão do raglan: </br>"
    + identacaoInicio
    + "<b>v.:</b> "
    + ptsCostas1 + "m, [marc B], "
    + ptsDivisao + "m, [marc B], "
    + ptsManga + "m, [marc B], "
    + ptsDivisao + "m, [marc B], "
    + ptsFrente + "m, [marc B], "
    + ptsDivisao + "m, [marc B], "
    + ptsManga + "m, [marc B], "
    + ptsDivisao + "m, [marc B], "
    + ptsCostas2 + "m.</br>";
    + identacaoFinal;
}

function gerarInstrucoesPreparacaoRaglanComCarrEncurtada(ptsDivisao,
                                        ptsFrenteCentral,
                                        ptsFrenteLateral,
                                        ptsCostas1,
                                        ptsCostas2,
                                        ptsManga){
  return "<b class='sessao_peca'>Pala:</b></br>"
    + "Tecer a carreira de preparação fazendo a divisão do raglan: </br>"
    + identacaoInicio
    + "<b>v.:</b> "
    + ptsCostas1 + "m, [marc B], "
    + ptsDivisao + "m, [marc B], "
    + ptsManga + "m, [marc B], "
    + ptsDivisao + "m, [marc B], "
    + ptsFrenteLateral + "m, [marc C], "
    + ptsFrenteCentral + "m, [marc D], "
    + ptsFrenteLateral + "m, [marc B], "
    + ptsDivisao + "m, [marc B], "
    + ptsManga + "m, [marc B], "
    + ptsDivisao + "m, [marc B], "
    + ptsCostas2 + "m.</br>";
    + identacaoFinal;
}

function gerarInstrucaoRaglan(nVoltas,
                              ptsFinal,
                              ptsDivisao){
  return "Tecer as duas voltas abaixo por "
    + nVoltas + " voltas, até ter "
    + ptsFinal + " pts nas agulhas: </br>"
    + identacaoInicio
    + "<b>1ª v.:</b> * m até o próximo marc., aumD, [marc B], "
    + ptsDivisao + "m, [marc B], aumE, *, rep. de * a * por 4 vezes, todos em m até o final.</br>"
    + "<b>2ª v.:</b> todos em m."
    + identacaoFinal;
}

function gerarInstrucaoDivisaoRaglan(ptsFinalRaglan,
                                     ptsMangaFinal,
                                     ptsCorpoFrenteFinal,
                                     ptsCorpoCostas1Final,
                                     ptsCorpoCostas2Final,
                                     ptsDivisaoRaglan,
                                     ptsCava){
  return "Com "
    + ptsFinalRaglan + " pts nas agulhas, fazer a divisão do corpo e das mangas:</br>"
    + identacaoInicio
    + "<b>v.:</b> "
    + (ptsCorpoCostas1Final + ptsDivisaoRaglan) + "m, reservar "
    + ptsMangaFinal + " pts, montar "
    + ptsCava + " pts, "
    + (ptsCorpoFrenteFinal + (2 * ptsDivisaoRaglan)) + "m, reservar "
    + ptsMangaFinal + " pts, montar "
    + ptsCava + " pts, "
    + (ptsCorpoCostas2Final + ptsDivisaoRaglan) + "m.";
    + identacaoFinal;
}

function gerarInstrucaoCorpo(ptsCorpo,
                             vComprimentoCorpo,
                             padraoBarra,
                             vComprimentoBarraCorpo){
  var texto = "<b class='sessao_peca'>Corpo:</b></br>"
    + "Com "
    + ptsCorpo + " pts nas agulhas, tecer por "
    + vComprimentoCorpo + " voltas em ponto malha, ou seja, todos os pontos em <b><i>m</i></b>. </br>"
    + "Em seguida, tecer a barra final por "
    + vComprimentoBarraCorpo + " v.: </br>"
    + identacaoInicio
    + "<b>1ª até "
    + vComprimentoBarraCorpo + "ª v.:</b> ";

  if (padraoBarra == "barra1"){
    texto += "* 1m, 1t *, rep. de * a * até o final."
  }else{
    texto += "* 2m, 2t *, rep. de * a * até o final."
  }
  texto += identacaoFinal;
  texto += "Fazer com o arremate dos pontos.</br>";

  return texto;
}

function gerarInstrucoesMangasRetas(ptsManga,
                                    ptsCava,
                                    vComprimentoManga,
                                    padraoBarra,
                                    vComprimentoBarraManga){
  var texto = "<b class='sessao_peca'>Mangas:</b></br>"
    + "Pegar os pontos reservados, tecer "
    + "a primeira volta em <b><i>m</i></b>, subindo os "
    + ptsCava + " pts da cava. </br>Com "
    + ptsManga + " pts nas agulhas, tecer por "
    + vComprimentoManga + " v. em ponto <b><i>m</i></b>.</br>"
    + "Tecer o punho por "
    + vComprimentoBarraManga + " voltas:</br>"
    + identacaoInicio
    + "<b>1ª até "
    + vComprimentoBarraManga + "ª v.:</b> ";

    if (padraoBarra == "barra1"){
      texto += "* 1m, 1t *, rep. de * a * até o final."
    }else{
      texto += "* 2m, 2t *, rep. de * a * até o final."
    }
    texto += identacaoFinal;
    texto += "Fazer com o arremate dos pontos.";

    return texto;
}

function gerarInstrucoesMangasAjustadas(ptsManga,
                                        ptsCava,
                                        vComprimentoManga,
                                        padraoBarra,
                                        vComprimentoBarraManga,
                                        intervaloDiminuicoes,
                                        totalDiminuicoes,
                                        vAntesDiminuicoesManga,
                                        ptsCircunferenciaPunho){
  var texto = "<b class='sessao_peca'>Mangas:</b></br>"
    + "Pegar os pontos reservados, tecer "
    + "a primeira volta em <b><i>m</i></b>, subindo os "
    + ptsCava + " pts da cava, ficando assim com "
    + ptsManga + " pts nas agulhas.</br>"

  if (vAntesDiminuicoesManga > 0){
    texto += "Tecer por "
      + vAntesDiminuicoesManga + " v. em <b><i>m</i></b>. </br>"
  }

  texto += "Em seguida, iniciar a sequência de diminuições definindo "
  + "como ponto central na direção abaixo da axila e sempre "
  + "seguindo o ponto central, intercalando as diminuições a cada "
  + intervaloDiminuicoes + " v., e também intercalando as diminuições entre ms e 2jm. <br>"
  + "Tecer as diminuições até a manga ter "
  + vComprimentoManga + " v. com total de "
  + totalDiminuicoes + " diminuições. <br>"
  + "Com "
  + ptsCircunferenciaPunho + " pts nas agulhas, tecer o punho por "
  + vComprimentoBarraManga + " voltas:</br>"
  + identacaoInicio
  + "<b>1ª até "
  + vComprimentoBarraManga + "ª v.:</b> ";

  if (padraoBarra == "barra1"){
    texto += "* 1m, 1t *, rep. de * a * até o final."
  }else{
    texto += "* 2m, 2t *, rep. de * a * até o final."
  }
  texto += identacaoFinal;
  texto += "Fazer com o arremate dos pontos.";

  return texto;
}
