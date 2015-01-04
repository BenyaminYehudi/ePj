function calculate(){
  var source = $("#source").val();
  var destination = $("#destination").val();
  postMessage(distances[source][destination]);
}

calculate();
