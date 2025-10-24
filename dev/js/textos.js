var identacaoInicio = "<div class='identacao'>"
var identacaoFinal = "</div>";

const gola_redonda_manga_curta =
  [ "A - Circunferência da gola: "
  , "B - Comprimento da barra da gola: "
  , false
  , "C - Circunferência da manga: "
  , "D - Comprimento da manga: "
  , false
  , "E - Comprimento da barra da manga: "
  , "F - Circunferência do corpo: "
  , "G - Comprimento do corpo: "
  , "H - Comprimento da barra do corpo: "
];

const gola_ajustada_manga_curta =
  [ "A - Circunferência da gola: "
  , "B - Comprimento da barra da gola: "
  , "C - Diferença do pescoço: "
  , "D - Circunferência da manga: "
  , "E - Comprimento da manga: "
  , false
  , "F - Comprimento da barra da manga: "
  , "G - Circunferência do corpo: "
  , "H - Comprimento do corpo: "
  , "I - Comprimento da barra do corpo: "
];

const gola_redonda_manga_comprida =
  [ "A - Circunferência da gola: "
  , "B - Comprimento da barra da gola: "
  , false
  , "C - Circunferência da manga: "
  , "D - Comprimento da manga: "
  , "E - Circunferência do punho: "
  , "F - Comprimento da barra da manga: "
  , "G - Circunferência do corpo: "
  , "H - Comprimento do corpo: "
  , "I - Comprimento da barra do corpo: "
];

const gola_ajustada_manga_comprida =
  [ "A - Circunferência da gola: "
  , "B - Comprimento da barra da gola: "
  , "C - Diferença do pescoço: "
  , "D - Circunferência da manga: "
  , "E - Comprimento da manga: "
  , "F - Circunferência do punho: "
  , "G - Comprimento da barra da manga: "
  , "H - Circunferência do corpo: "
  , "I - Comprimento do corpo: "
  , "J - Comprimento da barra do corpo: "
];

function gerarTitulo(titulo){
  return "<h1>"+titulo+"</h1>";
}
function gerarDescricao(descricao){
  if (descricao != ""){
    return "<p>"+descricao+"</p>";
  }else{
    return "";
  }
}

function gerarMateriais(parametros){

  var texto = "<h5>MATERIAIS:</h5>"
    + "<ul>"
    + "<li>" + parametros.fioQuantidade + "m de fio " + parametros.fioNome + ", considerando que o fio é da espessura categoria "
    + parametros.fioCategoria + ";</li>"
    + "<li> Agulha circular nº " + parametros.agulha + " com cabo de 80 cm;</li>";

  if (parametros.divisao > 0 && parametros.gola == "ajustada"){
    texto += "<li>11 marcadores - 1 cor A, 8 cor B, 1 cor C e 1 cor D;</li>";
  }else if (parametros.divisao > 0 && parametros.gola == "redonda"){
    texto += "<li>9 marcadores - 1 cor A e 8 cor B;</li>";
  }else if (parametros.divisao == 0 && parametros.gola == "ajustada"){
    texto += "<li>7 marcadores - 1 cor A, 4 cor B, 1 cor C e 1 cor D;</li>";
  }else{
    texto += "<li>5 marcadores - 1 cor A e 4 cor B;</li>";
  }
  return texto + "<li>Tesoura;</li>"
    + "<li>Agulha de tapeçaria.</li>";
}

function gerarAmostra(parametros){
  return "<h5>AMOSTRA:</h5> "
    + "<p> 10 cm x 10 cm = "
    + parametros.amostraPts + " pts e "
    + parametros.amostraCarr + " v./carr. no ponto malha.</p>";
}

function gerarTamanho(parametros){
  var texto = "<h5>TAMANHO (" + parametros.tamanho + "):</h5>"
        + "<div class='tamanho'>";

  texto += gerarTabelaMedidas(parametros);

  texto += gerarImgMedidas(parametros);

  return texto;
}

function gerarTabelaMedidas(parametros){
  var texto = "<div><table>";
  var tabela;

  // total de 10 itens
  var estilo;

  var valores = [
    parametros.golaCircunferencia,
    parametros.golaComprimento,
    parametros.golaDiferenca,
    parametros.mangaCircunferencia,
    parametros.mangaComprimento,
    parametros.punhoCircunferencia,
    parametros.mangaBarraComprimento,
    parametros.corpoCircunferencia,
    parametros.corpoComprimento,
    parametros.corpoBarraComprimento
  ];

  if (parametros.gola == 'redonda' && parametros.manga == 'curta'){
    estilo = gola_redonda_manga_curta;
  }else if (parametros.gola == 'ajustada' && parametros.manga == 'curta'){
    estilo = gola_ajustada_manga_curta;
  }else if (parametros.gola == 'redonda' && parametros.manga == 'comprida'){
    estilo = gola_redonda_manga_comprida;
  }else{
    estilo = gola_ajustada_manga_comprida;
  }

  for (let i = 0; i < valores.length; i++) {

    if(estilo[i]){
      texto += "<tr><td>"
        + estilo[i]
        + "</td><td class='tabela_valores'>"
        + valores[i]
        + " cm</td></tr>";
    }
  }
  return texto + "</table></div>";
}

function gerarImgMedidas(parametros){
  return "<div><img src='https://rosiene.github.io/mrp/img/medidas/raglan-gola-"
  + parametros.gola
  + "-manga-"
  + parametros.manga
  + ".png' /></div>"
  + "</div>";
}

function gerarLegenda(divisaoPontos){
  var texto = "<h5>ABREVIAÇÕES: </h5>"
    +"<p><b>[marc]</b> posicionar ou mover o marcador, "
    +"<b>2jm</b> 2 pontos juntos em meia, ";

  if (divisaoPontos > 0){
    texto += "<b>aumD</b> aumento em meia direcional para a direta, "
      +"<b>aumE</b> aumento em meia direcional para a esquerda, ";
  }
  texto += "<b>carr.</b> carreira(s), "
    +"<b>m</b> meia, "
    +"<b>ms</b> mate simples, ";

  if (divisaoPontos == 0){
    texto += "<b>mlm</b> 2 aumentos no mesmo ponto: tecer no mesmo ponto 1m, [marc B], laç, 1m, ";
  }

  return texto + "<b>pt(s)</b> ponto(s), "
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

  if (barra == 'barra-1-1') {
    texto += barra1(golaVoltas);
  }else if (barra == 'barra-2-2') {
    texto += barra2(golaVoltas);
  }else if (barra == 'arroz') {
    texto += arroz(golaVoltas);
  }else{
    texto += cordoes(golaVoltas);
  }
  return texto;
}

function gerarInstrucaoPreparacaoRaglan(topDown){
  var texto = "<p class='sessao_peca'>Pala:</p>";

  if (topDown.carreiraEncurtadaVoltas){
    texto += "<p>Tecer a carreira de preparação fazendo a divisão do raglan e carreira encurtada: </p>"
  }else{
    texto += "<p>Tecer a volta de preparação fazendo a divisão do raglan: </p>"
  }
  texto += identacaoInicio
    + "<p><b>v.:</b> "

  texto += topDown. corpoCostasPrimeiroInicioPalaPontos + "m, "
    + addMarcadorRaglan(topDown.divisao)
    + topDown.mangaInicioPalaPontos + "m, ";
    + addMarcadorRaglan(topDown.divisao);

  if (topDown.carreiraEncurtadaVoltas){
    texto += topDown.corpoFrenteLateralPontos + "m, [marc C], "
      + topDown.corpoFrenteCentralPontos + "m, [marc D], "
      + topDown.corpoFrenteLateralPontos + "m, "
  }else{
    texto += topDown.corpoFrenteInicioPalaPontos + "m, ";
  }
  texto += addMarcadorRaglan(topDown.divisao)
    + topDown.mangaInicioPalaPontos + "m, "
    + addMarcadorRaglan(topDown.divisao)
    + topDown. corpoCostasSegundoInicioPalaPontos + "m.</p>";
    + identacaoFinal;

  return texto;
}

function addMarcadorRaglan(divisaoPontos){
  if (divisaoPontos > 0){
    return "[marc B], " + divisaoPontos + "m, [marc B], ";
  }
  return "[marc B], ";
}

function addAumentosRaglan(divisaoPontos){
  if (divisaoPontos > 0){
    return "aumD, [marc B], " + divisaoPontos + ", [marc B], aumE, ";
  }else{
    return "mlm, ";
  }

}

function gerarInstrucoesPreparacaoRaglanComCarrEncurtada(ptsDivisao,
                                        ptsFrenteCentral,
                                        ptsFrenteLateral,
                                        ptsCostas1,
                                        ptsCostas2,
                                        ptsManga){
  return "<b class='sessao_peca'>Pala:</b></br>"
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

function gerarInstrucaoCarrEncurtada1Carr(divisao){
  return "<p>Tecer, no modo plano em carreiras no método alemão as carreiras encurtadas:</p>"
    + identacaoInicio
    + "<p><b>1ª carr.:</b> * todos em m até o marc B, "
    + addAumentosRaglan(divisao)
    + " *, rep. de * a * por 2 vezes, "
    + "todos em m até o marc C, "
    + "remover o marc C.</p>"
    + identacaoFinal;
}

function gerarInstrucaoCarrEncurtadaMeio(divisao,
                                        carreiraEncurtadaVoltas,
                                        carreiraEncurtadaIntervaloVoltas){
    var ultimaPar = carreiraEncurtadaVoltas - 2;
    var ultimaImpar = carreiraEncurtadaVoltas - 3;
    var intervaloMenos1 = carreiraEncurtadaIntervaloVoltas - 1;

    var texto = "";

    if (ultimaPar > 2){
      texto += identacaoInicio
        + "<p><b>2ª e todas as pares até a "
        + ultimaPar + "ª carr.:</b> com o fio na frente, 1sf, "
        + "passa o fio por cima da agulha direita até revelar os "
        + "fios do ponto da carr. anterior, "
        +  intervaloMenos1 + "t, [marc C], todos em "
        + "t até o marc D, remover o marc D. </p>"
        + identacaoFinal
    }
    if (ultimaImpar > 3){
      texto += identacaoInicio
        + "<p><b>3ª e todas as impares até a "
        + ultimaImpar + "ª carr.:</b> com o fio na frente, 1sf, passa "
        + "o fio por cima da agulha direita até revelar os "
        + "fios do ponto da carr. anterior, "
        + intervaloMenos1 + "m, [marc D], "
        + "* todos em m até o marc B, "
        + addAumentosRaglan(divisao)
        + "*, rep. de * a * por 4 vezes, todos em m até o marc C, remover o marc C.</br>"
        + identacaoFinal;
    }
    return texto;
}

function gerarInstrucaoCarrEncurtadaFinal(divisao,
                                        carreiraEncurtadaVoltas){
  var ultimaPar = carreiraEncurtadaVoltas - 2;
  var ultimaImpar = carreiraEncurtadaVoltas - 1;

  return identacaoInicio
    + "<p><b>" + ultimaImpar + "ª carr.:</b> com o fio na frente, 1sf, "
    + "passa o fio por cima da agulha direita até revelar os fios "
    + "do ponto da carr. anterior, * todos em m até o marc B, "
    + addAumentosRaglan(divisao)
    + " *, rep. de * a * por 2 vezes, "
    + "todos em m até o marc. A.</p>"
    + identacaoFinal
    + "<p>Tecer uma volta de finalização das carreiras encurtadas toda em "
    + "<b><i>m</i></b> com atenção aos pontos que foram passados sem fazer na "
    + "sequência das carreiras encurtadas e remover o marc C e D. </p>";
}

function gerarInstrucaoRaglan(raglanVoltas,
                              raglanFinalPontos,
                              divisao){
  return "<p>Tecer as duas voltas abaixo por "
      + raglanVoltas + " voltas, até ter "
      + raglanFinalPontos + " pts nas agulhas: </p>"
      + identacaoInicio
      + "<p><b>1ª v.:</b> * m até o próximo marc., "
      + addAumentosRaglan(divisao)
      + ", *, rep. de * a * por 4 vezes, todos em m até o final.</p>"
      + "<p><b>2ª v.:</b> todos em m.</p>"
      + identacaoFinal;
}

function gerarInstrucaoDivisaoRaglan(topDown){

  var costasPrimeiraPontos = parseInt(topDown.corpoCostasPrimeiroInicioPalaPontos) + parseInt(topDown.corpoDivisaoPontos) + (topDown.raglanVoltas / 2);
  var frentePontos = parseInt(topDown.corpoFrenteInicioPalaPontos) + (2 * parseInt(topDown.corpoDivisaoPontos)) + topDown.raglanVoltas;
  var costasSegundaPontos = parseInt(topDown.corpoCostasSegundoInicioPalaPontos) + parseInt(topDown.corpoDivisaoPontos) + (topDown.raglanVoltas / 2);

  var mangaInicioPontos = parseInt(topDown.mangaInicioPalaPontos) + (2 * parseInt(topDown.mangaDivisaoPontos)) + topDown.raglanVoltas;

  return "<p>Com "
    + topDown.raglanFinalPontos + " pts nas agulhas, fazer a divisão do corpo e das mangas:</p>"
    + identacaoInicio
    + "<p><b>v.:</b> "
    + costasPrimeiraPontos + "m, reservar "
    + mangaInicioPontos + " pts, montar "
    + topDown.cava + " pts, "
    + frentePontos + "m, reservar "
    + mangaInicioPontos + " pts, montar "
    + topDown.cava  + " pts, "
    + costasSegundaPontos + "m.</p>";
    + identacaoFinal;
}

function gerarInstrucaoCorpo(corpoPontos,
                             corpoVoltas,
                             corpoBarraVoltas,
                             barra){
  var texto = "<p><b class='sessao_peca'>Corpo:</b></p>"
    + "<p>Com "
    + corpoPontos + " pts nas agulhas, tecer por "
    + corpoVoltas + " voltas em ponto malha, ou seja, todos os pontos em <b><i>m</i></b>. </p>";

  if (barra == 'barra-1-1') {
    texto += barra1(corpoBarraVoltas);
  }else if (barra == 'barra-2-2') {
    texto += barra2(corpoBarraVoltas);
  }else if (barra == 'arroz') {
    texto += arroz(corpoBarraVoltas);
  }else{
    texto += cordoes(corpoBarraVoltas);
  }
  texto += "<p>Fazer com o arremate dos pontos.</p>";

  return texto;
}

function gerarInstrucaoMangas(topDown, manga, barra){

  var texto = "<p><b class='sessao_peca'>Mangas:</b></p>"
    + "<p>Pegar os "
    + (topDown.mangaPontos - topDown.cava)
    + " pontos reservados, e subir os "
    + topDown.cava + " pts da cava, ficando assim com "
    + topDown.mangaPontos + " pts nas agulhas. Posicionar o <i>marc. A</i> no meio dos pontos da cava.</p>"

  if (manga == "comprida"){
    texto += "<p>Tecer por "
      + topDown.mangaAntesDiminuicoesVoltas + " v. em <b><i>m</i></b>. "
      + "Em seguida, iniciar a sequência de diminuições direcionais "
      + "em <b><i>2jm</i></b> e <b><i>ms</i></b>, em relação ao <i>marc. A</i,> "
      + "invercalando no início e no final da volta respectivamente a cada "
      + topDown.mangaIntervaloDiminuicoes + " v., "
      + "até a manga ter "
      + topDown.mangaVoltas + " v. com total de "
      + topDown.mangaDiminuicoes + " diminuições. </p>";
  }else{
    texto += "<p>Tecer por "
      + topDown.mangaVoltas + " v. em <b><i>m</i></b>. </p>";
  }

  if (barra == 'barra-1-1') {
    texto += barra1(topDown.mangaBarraVoltas);
  }else if (barra == 'barra-2-2') {
    texto += barra2(topDown.mangaBarraVoltas);
  }else if (barra == 'arroz') {
    texto += arroz(topDown.mangaBarraVoltas);
  }else{
    texto += cordoes(topDown.mangaBarraVoltas);
  }
  texto += "<p>Fazer com o arremate dos pontos.</p>";

  return texto;;
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
