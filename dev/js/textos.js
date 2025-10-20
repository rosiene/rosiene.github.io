var identacaoInicio = "<div class='identacao'>"
var identacaoFinal = "</div>";

function gerarTitulo(titulo){
  return "<h1>- "+titulo+" -</h1>";
}
function gerarDescricao(descricao){
  if (descricao != ""){
    return "<p>"+descricao+"</p>";
  }else{
    return "";
  }
}

function gerarMateriais(parametros){
  return "<h5>MATERIAIS:</h5>"
    + "<ul>"
    + "<li>" + parametros.fioQuantidade + "m de fio " + parametros.fioNome + ", considerando que o fio é da espessura categoria "
    + parametros.fioCategoria + ";</li>"
    + "<li> Agulha circular nº " + parametros.agulha + " com cabo de 80 cm;</li>"
    + "<li>9 marcadores - 1 cor A e 8 cor B;</li>"
    + "<li>Tesoura;</li>"
    + "<li>Agulha de tapeçaria.</li>"

}

function gerarAmostra(parametros){
  return "<h5>AMOSTRA:</h5> "
    + "<p> 10 cm x 10 cm = "
    + parametros.amostraPts + " pts e "
    + parametros.amostraCarr + " v./carr. no ponto malha.</p>";
}

function gerarTamanho(parametros){
  return "<h5>TAMANHO:</h5><p>" + parametros.tamanho + "</p>"
      + "<img src='https://rosiene.github.io/mrp/img/medidas/raglan-gola-"
      + parametros.gola
      + "-manga-"
      + parametros.manga
      + ".png' />";

}

function gerarLegenda(){
  return "<h5>ABREVIAÇÕES: </h5>"
    +"<p><b>[marc]</b> posicionar ou mover o marcador, "
    +"<b>2jm</b> 2 pontos juntos em meia, "
    +"<b>aumD</b> aumento em meia direcional para a direta, "
    +"<b>aumE</b> aumento em meia direcional para a esquerda, "
    +"<b>carr.</b> carreira(s), "
    +"<b>m</b> meia, "
    +"<b>ms</b> mate simples, "
    +"<b>pt(s)</b> ponto(s), "
    +"<b>t</b> tricô, "
    +"<b>v.</b> volta(s).</p>";
}

function gerarInstrucaoTitulo(){
  return "<h5>INSTRUÇÕES: </h5>";
}

function gerarInstrucaoMontagem(golaPontos){
  return "<p>Montar " + (golaPontos + 1) + " pts na agulha circular, derrubar "
    + "o último ponto colocado na agulha em cima do primeiro pt fechando "
    + " o círculo de pts, ficando assim com " + golaPontos + " pts."
    + " Posicionei o <i>marc. A</i> para marcar o início e final de cada volta.</p>";
}

function gerarInstrucaoGola(golaVoltas, barra){

  var texto = "<p class='sessao_peca'>Gola:</p>"

  if (barra == 'barra1') {
    texto += barra1(golaVoltas);
  }else if (barra == 'barra2') {
    texto += barra1(golaVoltas);
  }else if (barra == 'arroz') {
    texto += arroz(golaVoltas);
  }else{
    texto += cordoes(golaVoltas);
  }
  return texto;
}

function gerarInstrucaoPreparacaoRaglan(ptsDivisao,
                                        ptsFrente,
                                        ptsCostas1,
                                        ptsCostas2,
                                        ptsManga){

  return "<b class='sessao_peca'>Pala:</b></br>"
    + "Tecer a volta de preparação fazendo a divisão do raglan: </br>"
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
    + "Tecer a carreira de preparação fazendo a divisão do raglan e carreira encurtada: </br>"
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
    + ptsCostas2 + "m.</br>"
    + identacaoFinal;
}

function gerarInstrucaoCarrEncurtada1Carr(ptsDivisaoRaglan){
  return "Tecer as carreiras encurtadas:</br>"
    + identacaoInicio
    + "<b>1ª carr.:</b> todos em m até o marc B, aumD, [marc B], "
    + ptsDivisaoRaglan + "m, [marc B], aumE, todos em m até o marc. B, aumD, "
    + "[marc B], "
    + ptsDivisaoRaglan + "m, [marc B], aumE, todos em m até o marc C, "
    + "remover o marc C.</br>"
    + identacaoFinal;
}

function gerarInstrucaoCarrEncurtadaMeio(ptsDivisaoRaglan,
                                        vCarrEncurtada,
                                        interavaloPtsCarrEncurtada){
    var ultimaPar = vCarrEncurtada - 2;
    var ultimaImpar = vCarrEncurtada - 3;
    var intervaloMenos1 = interavaloPtsCarrEncurtada - 1;

    return identacaoInicio
      + "<b>2ª e todas as pares até a "
      +  ultimaPar + "ª carr.:</b> com o fio na frente, 1sf, "
      + "passa o fio por cima da agulha direita até revelar os "
      + "fios do ponto da carr. anterior, "
      +  intervaloMenos1 + "t, [marc C], todos em "
      + "t até o marc D, remover o marc D. </br>"
      + identacaoFinal
      + identacaoInicio
      + "<b>3ª e todas as impares até a "
      + ultimaImpar + "ª carr.:</b> com o fio na frente, 1sf, passa "
      + "o fio por cima da agulha direita até revelar os "
      + "fios do ponto da carr. anterior, "
      + intervaloMenos1 + "m, [marc D], "
      + "todos em m até o marc B, aumD, [marc B] "
      + ptsDivisaoRaglan + "m, [marc B], aumE, todos em m até o marc B, aumD, [marc B] "
      + ptsDivisaoRaglan + "m, [marc B], aumE, todos em m até o marc B, aumD, [marc B] "
      + ptsDivisaoRaglan + "m, [marc B], aumE, todos em m até o marc B, aumD, [marc B] "
      + ptsDivisaoRaglan + "m, [marc B], aumE, todos em m até o marc C, remover o marc C.</br>"
      + identacaoFinal;
}

function gerarInstrucaoCarrEncurtadaFinal(ptsDivisaoRaglan,
                                        vCarrEncurtada,
                                        interavaloPtsCarrEncurtada){
  var ultimaPar = vCarrEncurtada - 2;
  var ultimaImpar = vCarrEncurtada - 1;

  return identacaoInicio
    + "<b>"
    + ultimaImpar + "ª carr.:</b> com o fio na frente, 1sf, "
    + "passa o fio por cima da agulha direita até revelar os fios "
    + "do ponto da carr. anterior, todos em m até o marc B, aumD, [marc B] "
    + ptsDivisaoRaglan + "m, [marc B], aumE, todos em m até o marc B, aumD, [marc B] "
    + ptsDivisaoRaglan + "m, [marc B], aumE, todos em m até o marc. A."
    + identacaoFinal
    + "Tecer uma volta de finalização das carreiras encurtadas toda em "
    + "<b><i>m</i></b> com atenção aos pontos que foram passados sem fazer na "
    + "sequência das carreiras encurtadas e remover o marc C e D. </br>";
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

  var ptsCostas1ComDivisao = parseInt(ptsCorpoCostas1Final) + parseInt(ptsDivisaoRaglan);
  var ptsFrenteComDivisao = ptsCorpoFrenteFinal + (2 * ptsDivisaoRaglan);
  var ptsCostas2ComDivisao = parseInt(ptsCorpoCostas2Final) + parseInt(ptsDivisaoRaglan);

  return "Com "
    + ptsFinalRaglan + " pts nas agulhas, fazer a divisão do corpo e das mangas:</br>"
    + identacaoInicio
    + "<b>v.:</b> "
    + ptsCostas1ComDivisao + "m, reservar "
    + ptsMangaFinal + " pts, montar "
    + ptsCava + " pts, "
    + ptsFrenteComDivisao + "m, reservar "
    + ptsMangaFinal + " pts, montar "
    + ptsCava + " pts, "
    + ptsCostas2ComDivisao + "m.";
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

function gerarInstrucoesMangasCurta(ptsManga,
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
    + "Tecer a barra por "
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
    texto += "Fazer com o arremate dos pontos.</br>";

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
      + vAntesDiminuicoesManga + " v. em <b><i>m</i></b>. "
  }

  texto += "Em seguida, iniciar a sequência de diminuições definindo "
  + "como ponto central na direção abaixo da axila e sempre "
  + "seguindo o ponto central, intercalando as diminuições a cada "
  + intervaloDiminuicoes + " v., e também intercalando as diminuições entre <b><i>ms</i></b> e <b><i>2jm</b></i>, "
  + "até a manga ter "
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
  texto += "Fazer com o arremate dos pontos.</br>";

  return texto;
}

function acabamento(){
  return "<p>Fazer os acabamentos da peça e blocar se necessário.</p>";
}

function barra1(voltas){
  return "<p>Tecer por " + voltas + " v. no ponto barra 1/1:</p>"
    + identacaoInicio
    + "<p><b>1ª até " + voltas + "ª v.:</b> * 1m, 1t, *, rep. de * a* até o final.</p>"
    + identacaoFinal;
}

function barra2(voltas){
  return "<p>Tecer por " + voltas + " v. no ponto barra 2/2:</p>"
    + identacaoInicio
    + "<p><b>1ª até " + voltas + "ª v.:</b> * 2m, 2t, *, rep. de * a* até o final.</p>"
    + identacaoFinal;
}

function arroz(voltas){
  return "<p>Tecer por " + voltas + " v. no ponto barra 1/1:</p>"
    + identacaoInicio
    + "<p><b>1ª e todas ímpares até " + (voltas - 1) + "ª v.:</b> * 1m, 1t, *, rep. de * a* até o final.</p>"
    + "<p><b>2ª e todas pares até " + voltas + "ª v.:</b> * 1t, 1m, *, rep. de * a* até o final.</p>"
    + identacaoFinal;
}

function cordoes(voltas){
  return "<p>Tecer por " + voltas + " v. no ponto cordões de tricô:</p>"
    + identacaoInicio
    + "<p><b>1ª e todas ímpares até " + (voltas - 1) + "ª v.:</b> todos em t até o final.</p>"
    + "<p><b>2ª e todas pares até " + voltas + "ª v.:</b> todos em m até o final.</p>"
    + identacaoFinal;
}

function rodape(){
  return "<div class='rodape'>Essa receita foi gerada de forma automática "
    + "através do sistema &quot;Minha Receita Pronta&quot; por Rosiene Dilly.</br>"
    + "É proibida a cópia, distribuição ou reprodução total ou parcial "
    + "deste material <br/>sem autorização prévia do autor por escrito. </br>"
    + "É permitida a venda de peças feitas a partir desta receita.</div>";
}
