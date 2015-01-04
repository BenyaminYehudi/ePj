function calculate(){
  var source = document.getElementById("source").value;
  var destination = document.getElementById("destination").value;
  postMessage(distances[source][destination]);
}

calculate();
