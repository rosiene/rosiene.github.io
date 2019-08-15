document.getElementById("urlSend").addEventListener("click", function(event){
  event.preventDefault();
  var str = event.target.value;
  //var matches = str.match(/name=([^&]*)/);
  alert(str);
});
