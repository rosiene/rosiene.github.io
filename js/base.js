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
        $('.amostra_pontos').css('color','#241f20');
        $('#amostraPontos').css('border',' 1px solid #ddd');
        $('.pto_multiplo').css('color','#241f20');
        $('#ptoMultiplo').css('border',' 1px solid #ddd');
        $('.tamanho').css('color','#241f20');
        $('#tamanho').css('border',' 1px solid #ddd');

        var amostraPontos = parseInt(document.getElementById("amostraPontos").value);
        var ptoMultiplo = parseInt(document.getElementById("ptoMultiplo").value);
        var ptoMais = parseInt(document.getElementById("ptoMais").value);
        var tamanho = parseInt(document.getElementById("tamanho").value);

        if(isNaN(ptoMais)){
          ptoMais = 0;
        }

        var maxPonto = tamanho / 10 * amostraPontos;
        var multiploTamanho = ptoMultiplo + ptoMais;
        var nPtoFantasia = 1;

        while (maxPonto > multiploTamanho) {
          multiploTamanho = multiploTamanho + ptoMultiplo;
          nPtoFantasia++;
        }

        var nProximoMenor = maxPonto - multiploTamanho + ptoMultiplo;
        var nProximoMaior = multiploTamanho - maxPonto;

        if (nProximoMenor < nProximoMaior){
          multiploTamanho = multiploTamanho - ptoMultiplo;
          nPtoFantasia--;
        }
        $('.resultado').empty();
        $('.resultado').append('Você deve montar '
          + multiploTamanho + ' pontos na agulha, e a repetição do ponto fantasia será de '
          + nPtoFantasia + ' vezes.');

        }
      });
    }
  });
