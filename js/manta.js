$( document ).ready(function() {
  var calcularMantaElement = document.getElementById('calcularManta');

  if(calcularMantaElement != null){
    calcularMantaElement.addEventListener("click", function(event){
      event.preventDefault();

      if (document.getElementById("amostraPontos").value == '' ||
            document.getElementById("ptoMultiplo").value == '' ||
            document.getElementById("tamanho").value == ''){

        if (document.getElementById("amostraPontos").value == ''){
          $('.amostra_pontos').css('color','red');
          $('#amostraPontos').css('border',' 1px solid red');
        }
        if (document.getElementById("ptoMultiplo").value == ''){
          $('.pto_multiplo').css('color','red');
          $('#ptoMultiplo').css('border',' 1px solid red');
        }
        if (document.getElementById("tamanho").value == ''){
          $('.tamanho').css('color','red');
          $('#tamanho').css('border',' 1px solid red');
        }

      }else{
        $('.amostra_pontos').css('color','#4f4f4f');
        $('#amostraPontos').css('border',' 1px solid #ddd');
        $('.pto_multiplo').css('color','#4f4f4f');
        $('#ptoMultiplo').css('border',' 1px solid #ddd');
        $('.tamanho').css('color','#4f4f4f');
        $('#tamanho').css('border',' 1px solid #ddd');

        var amostraPontos = parseInt(document.getElementById("amostraPontos").value);
        var ptoMultiplo = parseInt(document.getElementById("ptoMultiplo").value);
        var ptoMais = parseInt(document.getElementById("ptoMais").value);
        var ptosBorda = parseInt(document.getElementById("ptosBorda").value);
        var tamanho = parseInt(document.getElementById("tamanho").value);

        if(isNaN(ptoMais)){
          ptoMais = 0;
        }

        if (isNaN(ptosBorda)){
          ptosBorda = 0;
        }

        var maxPonto = tamanho / 10 * amostraPontos;
        var maxPontoComBorda = maxPonto - ptosBorda;
        var multiploTamanho = ptoMultiplo + ptoMais;
        var nPtoFantasia = 1;

        do {
          multiploTamanho = multiploTamanho + ptoMultiplo;
          nPtoFantasia++;
        } while (maxPontoComBorda > multiploTamanho);

        $('.resultado').append('A manta deverá ter '
          + maxPontoComBorda + ' pontos, e a repetição do ponto fantasia será de '
          + nPtoFantasia + ' vezes, incluindo os ' + ptosBorda + ' pontos de borda.');

      }
    });
  }
});
