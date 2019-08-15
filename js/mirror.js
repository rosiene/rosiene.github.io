document.getElementById("urlSend").addEventListener("click", function(event){
  event.preventDefault();
  var str = document.getElementById("urlValue").value;
  var matches = str.match(/v=([^&]*)/);
  
  if (typeof matches === 'undefined' || matches === null) {
      console.log("Erro");
      var textnode = document.createTextNode("Infelizmente não foi possível exibir o vídeo.<br/>Tente outro link conforme exemplo!");
      document.getElementById("iframeAqui").innerHTML = "";
      document.getElementById("iframeAqui").appendChild(textnode);
  } else {
      if (typeof matches[1] === 'undefined' || matches[1] === null) {
          console.log("Erro");
          var textnode = document.createTextNode("Infelizmente não foi possível exibir o vídeo.<br/>Tente outro link conforme exemplo!");
          document.getElementById("iframeAqui").innerHTML = "";
          document.getElementById("iframeAqui").appendChild(textnode);
      }else{
          console.log("Ok");
          var iframeUrl = "https://www.youtube.com/embed/" + matches[1];
          var ifrm = document.createElement("iframe");
          ifrm.setAttribute("src", iframeUrl);
          ifrm.width = "480px";
          ifrm.height = "270px";
          ifrm.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
          ifrm.allowfullscreen =  "";
          ifrm.frameborder = "0" ;
          ifrm.style = "-moz-transform: rotatey(180deg); -webkit-transform: rotatey(180deg); transform: rotatey(180deg);";
          document.getElementById("iframeAqui").innerHTML = "";
          document.getElementById("iframeAqui").appendChild(ifrm);
      }
  }
});
